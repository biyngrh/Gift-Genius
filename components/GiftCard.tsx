import React, { useState, useEffect, useRef } from 'react';
import { GiftRecommendation, Language } from '../types';
import { ExternalLink, ShoppingBag, Bookmark, Check, Share2, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { translations } from '../utils/translations';

interface GiftCardProps {
  gift: GiftRecommendation;
  index: number;
  language: Language;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, index, language }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    try {
      const savedGiftsRaw = localStorage.getItem('gift_genius_saved');
      if (savedGiftsRaw) {
        const savedGifts: GiftRecommendation[] = JSON.parse(savedGiftsRaw);
        const exists = savedGifts.some(
          (g) => g.name === gift.name && g.reason === gift.reason
        );
        setIsSaved(exists);
      }
    } catch (error) {
      console.error("Error reading saved gifts:", error);
    }
  }, [gift]);

  const handleToggleSave = () => {
    try {
      const savedGiftsRaw = localStorage.getItem('gift_genius_saved');
      let savedGifts: GiftRecommendation[] = savedGiftsRaw ? JSON.parse(savedGiftsRaw) : [];

      if (isSaved) {
        savedGifts = savedGifts.filter(
          (g) => !(g.name === gift.name && g.reason === gift.reason)
        );
      } else {
        savedGifts.push(gift);
      }

      localStorage.setItem('gift_genius_saved', JSON.stringify(savedGifts));
      setIsSaved(!isSaved);
    } catch (error) {
      console.error("Error updating saved gifts:", error);
    }
  };

  const handleSearch = () => {
    const query = encodeURIComponent(gift.name);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const handleShopSearch = () => {
    const query = encodeURIComponent(gift.name);
    // Use Amazon for EN, Shopee for ID
    const url = language === 'id' 
      ? `https://shopee.co.id/search?keyword=${query}`
      : `https://www.amazon.com/s?k=${query}`;
    window.open(url, '_blank');
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    setIsCapturing(true);
    
    try {
      // Small delay to ensure state updates
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#1e1b4b', // Dark purple/slate background for the image
        scale: 2, // Higher resolution
        useCORS: true,
        logging: false
      });

      const link = document.createElement('a');
      link.download = `gift-genius-${gift.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error("Failed to capture image", err);
      alert(language === 'id' ? "Gagal membuat gambar." : "Failed to generate image.");
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="group relative bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:bg-white dark:hover:bg-slate-900/60 hover:border-purple-200 dark:hover:border-white/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 transform translate-y-0 animate-fade-in-up shadow-sm"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decorative gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header Actions */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={handleDownloadImage}
          disabled={isCapturing}
          className="p-2 rounded-full bg-white/50 dark:bg-white/5 text-slate-400 dark:text-slate-500 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-500 dark:hover:text-purple-400 transition-colors border border-transparent hover:border-purple-200 dark:hover:border-purple-500/30"
          title={t.downloadImage}
        >
          {isCapturing ? <Download size={16} className="animate-bounce"/> : <Share2 size={16} />}
        </button>
        <button
          onClick={handleToggleSave}
          className={`p-2 rounded-full transition-all duration-300 border ${
            isSaved 
              ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]' 
              : 'bg-white/50 dark:bg-white/5 text-slate-400 dark:text-slate-500 border-transparent hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-500 dark:hover:text-purple-400'
          }`}
          title={isSaved ? t.removeFromSaved : t.saveForLater}
        >
          {isSaved ? <Check size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      <div className="p-6 pt-12 flex-1 relative z-10 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight drop-shadow-sm mb-3 pr-8">
          {gift.name}
        </h3>
        
        <div className="mb-4">
           <span className="inline-block bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-200 border border-purple-200 dark:border-purple-500/30 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-[0_0_10px_rgba(168,85,247,0.1)] dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            {gift.price_range}
          </span>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light flex-1">
          {gift.reason}
        </p>
      </div>

      {/* Buttons - Hidden during image capture to keep it clean */}
      <div 
        data-html2canvas-ignore="true" 
        className="p-4 bg-slate-50/50 dark:bg-black/20 border-t border-slate-200 dark:border-white/5 flex gap-3 relative z-10 backdrop-blur-sm"
      >
        <button
          onClick={handleSearch}
          className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white font-medium py-2 px-4 rounded-xl transition-all text-sm group/btn"
        >
          <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
          {t.btnSearchGoogle}
        </button>
        <button
          onClick={handleShopSearch}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 text-orange-600 dark:text-orange-200 border border-orange-200 dark:border-orange-500/20 hover:border-orange-400 dark:hover:border-orange-500/40 hover:from-orange-100 hover:to-red-100 dark:hover:from-orange-500/20 dark:hover:to-red-500/20 font-medium py-2 px-4 rounded-xl transition-all text-sm group/btn"
        >
          <ShoppingBag size={16} className="group-hover/btn:scale-110 transition-transform" />
          {t.btnSearchShop}
        </button>
      </div>
    </div>
  );
};

export default GiftCard;