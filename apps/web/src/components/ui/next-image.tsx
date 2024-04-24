import { useState } from 'react'
import Image from 'next/image'
import cn from 'clsx'
import type { ReactNode } from 'react'
import type { ImageProps } from 'next/image'

type NextImageProps = {
  alt: string
  width?: string | number
  children?: ReactNode
  useSkeleton?: boolean
  imgClassName?: string
  previewCount?: number
  blurClassName?: string
} & ImageProps

/**
 *
 * @description Must set width and height, if not add layout='fill'
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 * @param useSkeleton.src The source of the image to be displayed as the skeleton
 * @param useSkeleton.alt The alternative text for the image
 * @param useSkeleton.width The width of the skeleton
 * @param useSkeleton.height The height of the skeleton
 * @param useSkeleton.children The children elements of the skeleton
 * @param useSkeleton.className The class name of the skeleton
 * @param useSkeleton.useSkeleton Whether to use the skeleton or not
 * @param useSkeleton.imgClassName The class name for the image inside the skeleton
 * @param useSkeleton.previewCount The count of previews to show
 * @param useSkeleton.blurClassName The class name for the blur effect inside the skeleton
 */
export function NextImage({
  src,
  alt,
  width,
  height,
  children,
  className,
  useSkeleton,
  imgClassName,
  previewCount,
  blurClassName,
  ...rest
}: NextImageProps): JSX.Element {
  const [loading, setLoading] = useState(!!useSkeleton)

  const handleLoad = (): void => setLoading(false)

  return (
    <figure style={{ width }} className={className}>
      <Image
        className={cn(
          imgClassName,
          loading
            ? blurClassName
            ?? 'animate-pulse bg-light-secondary dark:bg-dark-secondary'
            : previewCount === 1
              ? '!h-auto !min-h-0 !w-auto !min-w-0 rounded-lg object-contain'
              : 'object-cover',
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={handleLoad}
        layout="responsive"
        {...rest}
      />
      {children}
    </figure>
  )
}
