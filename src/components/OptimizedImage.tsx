'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width = 800, 
  height = 450, // Default to 16:9 aspect ratio
  className = "", 
  priority = false,
  aspectRatio = "16/9"
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  // Ensure the image path is correctly formatted
  const imageSrc = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio }}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => {
          console.error('Failed to load image:', imgSrc);
          // Fallback to a default image if the original fails to load
          if (imgSrc !== '/images/default-article1.jpg') {
            setImgSrc('/images/default-article1.jpg');
          }
        }}
      />
    </div>
  );
}
