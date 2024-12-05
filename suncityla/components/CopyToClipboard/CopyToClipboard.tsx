'use client';

import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';

const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    console.log(copied);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div>
      {copied ? (
        <div className="font-normal">Copied 😊</div>
      ) : (
        <ReactCopyToClipboard text={text} onCopy={handleCopy}>
          <Copy size={18} className=" cursor-pointer hover:text-slate-600" />
        </ReactCopyToClipboard>
      )}
    </div>
  );
};

export default CopyToClipboard;
