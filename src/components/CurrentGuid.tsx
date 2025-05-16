import { useState } from 'react';
import { CopyIcon } from './Icons/Copy';

interface CurrentGuidProps {
  guid: string;
}

const CurrentGuid: React.FC<CurrentGuidProps> = ({ guid }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!guid) return;
    try {
      await navigator.clipboard.writeText(guid);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section>
      <p className="text-lg font-semibold mb-1 text-white">Current GUID:</p>
      <div className="flex items-center">
        <span className="bg-white px-3 text-black flex items-center text-xs sm:text-sm h-10 sm:h-12 font-mono rounded-tl-full rounded-bl-full">{guid}</span>
        <button
          onClick={copyToClipboard}
          className="bg-[#00DC82] cursor-pointer hover:bg-white hover:text-[#0D162B] text-white transition-all text-sm px-3 h-10 sm:h-12 py-1 sm:px-6 flex items-center rounded-tr-full rounded-br-full"
          title="Copy to clipboard"
        >
          <CopyIcon className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:block">Copy</span>
        </button>
      </div>
      {copied && (
        <div className="py-2 px-6 mb-4 text-[#0D162B] bg-white bg-opacity-80 rounded-full shadow-sm fixed top-2 right-2 transition-all">
          Copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default CurrentGuid;