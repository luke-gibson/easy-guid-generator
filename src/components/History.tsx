import React from 'react';
import { TrashIcon } from './Icons/Trash';

interface HistoryProps {
  history: { guid: string; timestamp: string }[];
  clearHistory: () => void;
}

const formatTimestamp = (ts: string): string => {
  const date = new Date(ts);
  return (
    date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }) +
    ' ' +
    date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );
};

const History: React.FC<HistoryProps> = ({ history, clearHistory }) => {
  return (
    <details className="py-4 border-b border-gray-600">
      <summary className="text-xl font-bold text-white cursor-pointer">
        History
      </summary>

      <div className="flex justify-between items-center my-6">
        <h2 className="text-lg font-bold text-white">Your Previous GUIDs</h2>
        <button
          onClick={clearHistory}
          className="bg-red-900 hover:bg-white hover:text-red-900 text-white transition-all text-sm px-3 h-9 py-1 flex items-center rounded-full cursor-pointer"
        >

           <TrashIcon className="w-4 h-4 mr-2"/> Clear History
        </button>
      </div>

      {history.length > 0 ? (
        <ul className="space-y-1 text-sm">
          {history.map((item, index) => (
            <li
              key={index}
              className={`${
                index < history.length - 1
                  ? 'border-b border-gray-600 pb-4'
                  : ''
              } pt-2 px-2 text-gray-300`}
            >
              <p className="font-mono text-xs sm:text-sm leading-none">
                {item.guid}
              </p>
              <p className="text-white text-xs sm:text-sm">
                {formatTimestamp(item.timestamp)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-200 text-xs sm:text-sm">No history yet.</p>
      )}
    </details>
  );
};

export default History;