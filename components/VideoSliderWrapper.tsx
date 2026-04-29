"use client";

import { useSearchParams } from "next/navigation";
import VideoSlider from "./VideoSlider";

export default function VideoSliderWrapper() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId");

  return <VideoSlider selectedVideoId={videoId} />;
}