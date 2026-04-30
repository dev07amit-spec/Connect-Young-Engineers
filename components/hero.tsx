"use client";

import { useRef, useState } from "react";

export default function VideoHero() {
  //  FIXED TYPE
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  //  Progress update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percentage = video.duration
      ? (video.currentTime / video.duration) * 100
      : 0;

    setProgress(percentage);
  };

  // Seek on click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    video.currentTime = percent * video.duration;
  };

  return (
    <div className="relative w-full overflow-hidden h-[760px] xl:h-[816px]">

      {/*  Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
      >
        <source src="https://yefranchisees.b-cdn.net/connect-new/desktop-videos/no-audio-canvas-desktop.mp4" type="video/mp4" />
      </video>
      
      {/*  Background Video for mobile */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
      >
        <source src="https://yefranchisees.b-cdn.net/connect-new/mobile-videos/connect-new-mobile.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000F19CC] to-transparent" />

      {/* Content */}
      <div className="max-w-[1360px] m-auto xl:mt-[80px]">
      <div className="relative z-10 flex flex-col justify-start h-full px-4 text-white pt-8 md:pt-4 max-w-[700px]">
        <h1 className="text-[28px] md:text-[36px] xl:text-[48px] xl:leading-[1.2] font-bold  max-[380px]:text-[27px] max-[324px]:text-[22px]">
          Start Your Child’s Journey into Engineering 🚀
        </h1>
        <p className="mt-4 xl:mt-6 text-[20px] max-[324px]:text-[16px] xl:text-[32px] xl:leading-[1.4]">
          Coding and Mechanics Discovered through a Memorable and Unforgettable Experience
        </p>
      </div>
      </div>

      {/*  Controls  */}
      <div className="absolute bottom-20 left-5 z-20 flex items-center gap-3 w-[300px]  max-[324px]:w-[280px] block md:hidden">

        {/* Play / Pause */}
        <button onClick={togglePlay}>
         <img
           src={isPlaying ? "https://yefranchisees.b-cdn.net/connect-new/video-thumbnails/Layer_1.png" : "https://yefranchisees.b-cdn.net/connect-new/video-thumbnails/Layer_2.png"}
           alt="play-pause"
           className="w-[22px] h-[22px] object-contain"
         />
       </button>

        {/* Progress Bar */}
        <div
          onClick={handleSeek}
          className="flex-1 h-[2px] bg-[#58585a66]  rounded cursor-pointer overflow-hidden"
        >
          <div
            className="h-full bg-white/40 "
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
}