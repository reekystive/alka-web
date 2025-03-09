import { useImageCapture } from './use-image-capture';
import { useMediaStream } from './use-media-stream';
import { RefObject } from 'react';

interface UseCameraOptions {
  facingMode?: 'user' | 'environment';
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const useCamera = (options: UseCameraOptions) => {
  const { facingMode = 'environment', videoRef } = options;

  const { stream, isStreaming, start, stop } = useMediaStream({
    mediaDeviceConstraints: { video: { facingMode }, audio: false },
  });

  const { captureImage } = useImageCapture({
    videoRef,
  });

  return {
    stream,
    isStreaming,
    start,
    stop,
    captureImage,
  };
};
