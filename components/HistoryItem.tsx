import React from 'react';
import { GiftHistoryItem } from '../types';
import { Clock, Trash2 } from 'lucide-react';

interface HistoryItemProps {
  item: GiftHistoryItem;
  onClick: (item: GiftHistoryItem) => void;
  onDelete: (id: string) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item, onClick, onDelete }) => {
  return (
    <div className="group relative flex bg-white rounded-xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-all mb-3 overflow-hidden">
      <button 
        onClick={() => onClick(item)}
        className="flex-1 text-left p-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
          <Clock size={12} />
          {new Date(item.timestamp).toLocaleDateString()}
        </div>
        <p className="text-slate-700 font-medium line-clamp-1 text-sm mb-2 pr-2">
          {item.description}
        </p>
        <div className="flex gap-1 flex-wrap">
          {item.recommendations.slice(0, 2).map((rec, i) => (
            <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
              {rec.name}
            </span>
          ))}
          {item.recommendations.length > 2 && (
            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
              +{item.recommendations.length - 2}
            </span>
          )}
        </div>
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
        className="w-10 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors border-l border-transparent hover:border-slate-100"
        title="Remove from history"
        aria-label="Delete history item"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default HistoryItem;