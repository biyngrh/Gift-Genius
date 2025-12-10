import React from 'react';
import { GiftHistoryItem, Language } from '../types';
import { Clock, Trash2 } from 'lucide-react';
import { translations } from '../utils/translations';

interface HistoryItemProps {
  item: GiftHistoryItem;
  onClick: (item: GiftHistoryItem) => void;
  onDelete: (id: string) => void;
  language: Language;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item, onClick, onDelete, language }) => {
  const t = translations[language];
  const locale = language === 'id' ? 'id-ID' : 'en-US';

  return (
    <div className="group relative flex bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 mb-3 overflow-hidden shadow-sm hover:shadow-md dark:shadow-lg dark:shadow-black/20">
      <button 
        onClick={() => onClick(item)}
        className="flex-1 text-left p-4 transition-colors"
      >
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
          <Clock size={12} className="text-purple-500 dark:text-purple-400" />
          {new Date(item.timestamp).toLocaleDateString(locale)}
        </div>
        <p className="text-slate-800 dark:text-slate-200 font-medium line-clamp-1 text-sm mb-2.5 pr-2 group-hover:text-purple-700 dark:group-hover:text-white transition-colors">
          {item.description}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {item.recommendations.slice(0, 2).map((rec, i) => (
            <span key={i} className="text-[10px] bg-slate-100 dark:bg-black/40 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full border border-slate-200 dark:border-white/5">
              {rec.name}
            </span>
          ))}
          {item.recommendations.length > 2 && (
            <span className="text-[10px] bg-slate-100 dark:bg-black/40 text-slate-500 px-2 py-1 rounded-full border border-slate-200 dark:border-white/5">
              +{item.recommendations.length - 2}
            </span>
          )}
        </div>
      </button>
      
      <div className="flex flex-col border-l border-slate-200 dark:border-white/5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item.id);
          }}
          className="flex-1 w-10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
          title={t.deleteHistory}
        >
          <Trash2 size={14} />
        </button>
      </div>
      
      {/* Decorative highlight */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default HistoryItem;