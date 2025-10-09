import Image, { ImageProps } from 'next/image'
import React from 'react'

type AspectImageProps = Omit<ImageProps, 'fill'> & {
  ratio?: number // width / height, default 16/9
}

export const AspectImage: React.FC<AspectImageProps> = ({ ratio = 16/9, alt, className, ...props }) => {
  const paddingBottom = `${100 / ratio}%`
  return (
    <div className={`relative overflow-hidden rounded-xl bg-surface shadow-md ${className || ''}`} style={{ paddingBottom }}>
      <Image
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        style={{ objectFit: 'cover' }}
        {...(props as Omit<ImageProps, 'fill' | 'alt' | 'sizes' | 'style'>)}
      />
    </div>
  )
}
