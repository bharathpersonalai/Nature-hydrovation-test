import { useRef, useEffect, useState } from "react";

interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  scrollSpeed?: number;
  scrollEase?: number;
  textColor?: string;
  borderRadius?: number;
}

export const CircularGallery = ({
  items,
  bend = -10,
  scrollSpeed = 2,
  scrollEase = 0.05,
  textColor = "#ffffff",
  borderRadius = 0.05,
}: CircularGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0); // This is our target scroll position
  const scrollStartRef = useRef(0); // To store where the scroll was when drag started

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // 1. DUPLICATE THE ITEMS for the infinite loop

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    let animationFrameId: number;
    let currentScroll = 0;

    const animate = () => {
      if (!containerRef.current) return; // Calculate the width of ONE set of items

      const scrollWidth = containerRef.current.scrollWidth;
      const halfWidth = scrollWidth / 2; // This is the width of your original list // Apply easing

      currentScroll += (scrollRef.current - currentScroll) * scrollEase; // 2. INFINITE LOOP LOGIC // If scrolling right and pass the end of the first list

      if (halfWidth > 0 && currentScroll >= halfWidth) {
        currentScroll -= halfWidth; // Snap back
        scrollRef.current -= halfWidth; // Adjust the target
        scrollStartRef.current -= halfWidth; // Adjust the drag start point
      } // If scrolling left and pass the start of the first list
      if (halfWidth > 0 && currentScroll < 0) {
        currentScroll += halfWidth; // Snap forward
        scrollRef.current += halfWidth;
        scrollStartRef.current += halfWidth;
      }

      containerRef.current.style.transform = `translateX(${-currentScroll}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollEase, items.length]);

  const getEventX = (e: MouseEvent | TouchEvent) => {
    return "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const x = getEventX(e.nativeEvent);
    setStartX(x);
    scrollStartRef.current = scrollRef.current;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const dragSpeed = 2.5; // <-- We added this multiplier

    const x = getEventX(e.nativeEvent);
    const deltaX = (x - startX) * dragSpeed; // <-- Apply the multiplier here
    scrollRef.current = scrollStartRef.current - deltaX;
  }; 

  const handleUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        cursor: "grab",
        userSelect: "none",
      }}
      onMouseDown={handleDown}
      onMouseMove={handleMove}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
      onTouchStart={handleDown}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
    >
           {" "}
      <div
        ref={containerRef}
        className="flex"
        style={{
          transform: `perspective(1000px) rotateY(${bend}deg)`,
        }}
      >
                {/* 3. RENDER THE DUPLICATED LIST */}       {" "}
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.text}-${index}`}
            className="flex-none p-4 w-full lg:w-1/3" // Responsive width
          >
                       {" "}
            <div className="relative group overflow-hidden bg-white rounded-2xl">
                           {" "}
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
                onDragStart={(e) => e.preventDefault()}
              />
                      _    {" "}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               {" "}
                <p
                  className="text-lg font-semibold"
                  style={{ color: textColor }}
                >
                                    {item.text}
                  NB             {" "}
                </p>
                             {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
        ))}
             {" "}
      </div>
         {" "}
    </div>
  );
};
