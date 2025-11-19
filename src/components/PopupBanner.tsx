import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PopupBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    // Overlay (Backdrop)
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300">
      
      {/* Modal Container - changed to w-auto and fit-content */}
      <div className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] shadow-2xl rounded-2xl overflow-hidden flex justify-center items-center animate-fadeIn bg-transparent">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-20 p-1.5 bg-white/90 hover:bg-white rounded-full shadow-lg text-gray-800 hover:text-red-500 transition-colors cursor-pointer"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <img 
          src="/images/banner.jpg" 
          alt="Promotional Banner" 
          // 1. block: removes bottom gap
          // 2. w-auto h-auto: keeps original aspect ratio
          // 3. max-w/max-h: prevents it from going off-screen
          // 4. object-contain: ensures it shows the whole image
          className="block w-auto h-auto max-w-full max-h-[85vh] object-contain"
        />

      </div>
    </div>
  );
}