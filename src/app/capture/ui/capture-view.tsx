'use client';

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useCamera } from '@/app/capture/hooks/use-camera';
import { Camera, RefreshCcw, Save } from 'lucide-react';
import { CameraButton } from './camera-button';
import { cn } from '@/utils/component';
import Image from 'next/image';

interface CaptureViewProps {
  className?: string;
  onConfirm?: (blob: Blob) => void;
}

export const CaptureView: FC<CaptureViewProps> = (props) => {
  const { className, onConfirm: handleConfirm } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const { stream, isStreaming, start, stop, captureImage } = useCamera({
    videoRef,
  });

  const [capturedImageBlob, setCapturedImageBlob] = useState<Blob | null>(null);
  const capturedImageBlobUrl = useMemo(() => {
    if (!capturedImageBlob) return null;
    return URL.createObjectURL(capturedImageBlob);
  }, [capturedImageBlob]);

  const handleCaptureImage = useCallback(async () => {
    const blob = await captureImage();
    setCapturedImageBlob(blob);
    stop();
  }, [captureImage, stop]);

  const startStream = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    const activeStream = isStreaming ? stream : await start();
    if (!activeStream) return;
    video.srcObject = activeStream;
    void video.play().catch((error: unknown) => {
      console.error(error);
    });
    return activeStream;
  }, [start, isStreaming, stream]);

  const handleRecapture = useCallback(async () => {
    setCapturedImageBlob(null);
    await startStream();
  }, [startStream]);

  useEffect(() => {
    if (!capturedImageBlobUrl) {
      void handleRecapture();
    }
  }, [handleRecapture, capturedImageBlobUrl]);

  return (
    <div className={cn('relative flex aspect-[3/4] w-full flex-col overflow-clip bg-black', className)}>
      <video ref={videoRef} playsInline muted className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
        <CameraButton
          ariaLabel="Capture Image"
          onClick={() => {
            void handleCaptureImage();
          }}
        >
          <Camera className="size-6" />
        </CameraButton>
      </div>

      {capturedImageBlobUrl && (
        <div className="absolute inset-0">
          <Image
            src={capturedImageBlobUrl}
            alt="Captured Image"
            width={3000}
            height={4000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
            <div className="flex flex-row gap-8">
              <CameraButton
                ariaLabel="Retake"
                onClick={() => {
                  void handleRecapture();
                }}
              >
                <RefreshCcw className="size-6" />
              </CameraButton>
              <CameraButton
                ariaLabel="Save"
                onClick={() => {
                  if (!capturedImageBlob) return;
                  handleConfirm?.(capturedImageBlob);
                }}
              >
                <Save className="size-6" />
              </CameraButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
