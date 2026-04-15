'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

const videos = [
  { id: 1, title: 'Bricks Challenge', thumbnail: '/images/img-01.png', videoUrl: '/videos/connect-new-mobile.mp4' },
  { id: 2, title: 'Galileo Technic', thumbnail: '/images/img-02.jpg', videoUrl: '/videos/connect-new-mobile.mp4' },
  { id: 3, title: 'Big Builders', thumbnail: '/images/img-033.png', videoUrl: '/videos/connect-new-mobile.mp4' },
  { id: 4, title: 'Algo Play', thumbnail: '/images/img-01.png', videoUrl: '/videos/connect-new-mobile.mp4' },
  { id: 5, title: 'Robo Toys', thumbnail: '/images/img-02.jpg', videoUrl: '/videos/connect-new-mobile.mp4' },
];

export default function VideoSlider() {
  const [active, setActive] = useState(1);
  const [playingIndex, setPlayingIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(180);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const total = videos.length;

  const extendedVideos = [
    videos[videos.length - 1],
    ...videos,
    videos[0],
  ];

  // Detect screen
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      if (desktop) {
        setSlideWidth(window.innerWidth / 3.2);
      } else if (window.innerWidth >= 768) {
        setSlideWidth(500);
      } else {
        setSlideWidth(180);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop fix
  useEffect(() => {
    if (active === extendedVideos.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActive(1);
      }, 400);
    }

    if (active === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActive(total);
      }, 400);
    }
  }, [active]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  // Sync playing video
  useEffect(() => {
    setPlayingIndex(active);
  }, [active]);

  // Swipe (mobile only)
  const handleStart = (x: number) => {
    if (isDesktop) return;
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x: number) => {
    if (!isDragging.current || isDesktop) return;

    const diff = startX.current - x;

    if (diff > 50) setActive((p) => p + 1);
    else if (diff < -50) setActive((p) => p - 1);

    isDragging.current = false;
  };

  const getRealIndex = () => {
    if (active === 0) return total - 1;
    if (active === total + 1) return 0;
    return active - 1;
  };

  return (
    <div className="w-full max-w-[1360px] mx-auto relative z-10">

      <div
        className="overflow-hidden pb-14"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
      >
        <div
          className="flex gap-5 items-center"
          style={{
            transform: isDesktop
              ? `translateX(-${active * (slideWidth + 20)}px)`
              : `translateX(calc(50% - ${active * slideWidth}px - ${slideWidth / 2}px))`,
            transition: isTransitioning ? 'transform 0.4s ease' : 'none',
          }}
        >
          {extendedVideos.map((video, index) => {
            const isPlaying = index === playingIndex;

            return (
              <div
                key={index}
                style={{ width: `${slideWidth}px` }}
                className={`flex-shrink-0 transition-all duration-300 v-slide ${
                  isPlaying
                    ? 'active-slide scale-100 z-20 opacity-100'
                    : 'scale-100 opacity-100'
                }`}
                onClick={() => {
                  setPlayingIndex(index);
                  if (!isDesktop) setActive(index);
                }}
              >
                <div className="relative">

                  {isPlaying ? (
                    <video
                      src={video.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-2xl w-full h-[320px] md:h-[350px] object-cover xl:rounded-[52px]"
                    />
                  ) : (
                    <>
                    <div className='overlay'></div>
                      <img
                        src={video.thumbnail}
                        className="rounded-2xl w-full h-[280px] md:h-[350px] object-cover xl:rounded-[52px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/images/Layer_2.png"
                          alt="play"
                          width={80}
                          height={80}
                          className='w-[30px] h-[30px] xl:w-[80px] xl:h-[80px]'
                        />
                      </div>
                    </>
                  )}

                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full whitespace-nowrap text-[17px] text-[#0097DC] font-light w-[90%] h-[44px] text-center flex items-center justify-center shadow-[0px_5px_5px_#0000002E]
                  xl:text-[44px] xl:h-[112px] xl:bottom-[-50px] button-title xl:w-max xl:py-[10px] xl:px-[40px] video-title">
                    {video.title}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 xl:mt-12">
        {videos.map((_, index) => {
          const current = getRealIndex();

          return (
            <button
              key={index}
              onClick={() => setActive(index + 1)}
              className={`w-2.5 h-2.5 rounded-full  dots cursor-pointer ${
                current === index
                  ? 'bg-[linear-gradient(45deg,#013A5E,#016CAC)] scale-100'
                  : 'bg-gray-300'
              }`}
            />
          );
        })}
      </div>

    </div>
  );
}