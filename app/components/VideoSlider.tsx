'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

const videos = [
  {
    id: 1,
    title: 'Galileo Technic',
    thumbnail: '/images/Zrzut-1.png',
    videoUrl: '/videos/connect-new-mobile-1.mp4',
  },
  {
    id: 2,
    title: 'Big Builders',
    thumbnail: '/images/Zrzut-1.png',
    videoUrl: '/videos/connect-new-mobile-1.mp4',
  },
  {
    id: 3,
    title: 'Smartiv',
    thumbnail: '/images/Zrzut-1.png',
    videoUrl: '/videos/connect-new-mobile-1.mp4',
  },
  {
    id: 4,
    title: 'Big Builders',
    thumbnail: '/images/Zrzut-1.png',
    videoUrl: '/videos/connect-new-mobile-1.mp4',
  },
  {
    id: 5,
    title: 'Smartiv',
    thumbnail: '/images/Zrzut-1.png',
    videoUrl: '/videos/connect-new-mobile-1.mp4',
  },
];

export default function VideoSlider() {
  const [active, setActive] = useState(1);
  const [slideWidth, setSlideWidth] = useState(220);
  const [centerPercent, setCenterPercent] = useState(50);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const total = videos.length;

  // ✅ Responsive width logic
  useEffect(() => {
    const updateWidth = () => {
      setSlideWidth(window.innerWidth >= 768 ? 500 : 220);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  
useEffect(() => {
  const updateCenter = () => {
    setCenterPercent(window.innerWidth >= 768 ? 56 : 50);
  };

  updateCenter();
  window.addEventListener("resize", updateCenter);

  return () => window.removeEventListener("resize", updateCenter);
}, []);

  // 👉 swipe start
  const handleStart = (x: number) => {
    startX.current = x;
    isDragging.current = true;
  };

  // 👉 swipe end
  const handleEnd = (x: number) => {
    if (!isDragging.current) return;

    const diff = startX.current - x;

    if (diff > 50) {
      setActive((prev) => (prev + 1) % total);
    } else if (diff < -50) {
      setActive((prev) => (prev - 1 + total) % total);
    }

    isDragging.current = false;
  };

  return (
    <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center relative z-10">

      {/* SLIDER */}
      <div
        className="relative w-full pb-5 overflow-hidden xl:pb-18"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
      >
        <div
        className="flex items-center transition-transform duration-500 ease-in-out gap-5" 
        style={{
         transform: `translateX(calc(${centerPercent}% - ${active * slideWidth}px - ${slideWidth / 2}px))`,
        }}
       >
          {videos.map((video, index) => {
            const isActive = index === active;

            return (
              <div
                key={video.id}
                className="flex-shrink-0 flex justify-center"
                style={{ width: `${slideWidth}px` }}
                onClick={() => setActive(index)}
              >
                <div
                className={`relative transition-all duration-500 desk-video xl:rounded-[52px] ${
                isActive ? 'active' : ''
                } ${
                isActive
                  ? 'scale-100 opacity-100 z-20'
                  : 'scale-90 opacity-60 md:scale-100 md:opacity-100'
                }`}
                >

                  {/* ACTIVE VIDEO */}
                  {isActive ? (
                    <video
                      src={video.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-2xl w-[220px] md:w-[500px] h-[220px] md:h-[350px] object-cover xl:rounded-[52px]"
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="rounded-2xl w-[200px] md:w-[500px] h-[220px] md:h-[350px] object-cover xl:rounded-[52px]"
                      />

                      {/* PLAY BUTTON */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full">
                          <Image
                          src="/images/Layer_2.png"
                          alt="play"
                          width={80}
                          height={80}
                          className="object-contain w-[80px] h-[80px]"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* TITLE */}
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full whitespace-nowrap text-[17px] text-[#0097DC] font-light w-[90%] h-[44px] text-center flex items-center justify-center shadow-[0px_5px_5px_#0000002E]
                  xl:text-[44px] xl:h-[112px] xl:bottom-[-50px] button-title">
                    {video.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-6">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-2.5 h-2.5 rounded-full transition dots ${
              index === active ? 'bg-[linear-gradient(45deg,#013A5E,#016CAC)] scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}