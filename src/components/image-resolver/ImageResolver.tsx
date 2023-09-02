import offlineImage from '../../assets/offline.svg'

type ImageResolverType = {
  src: string
  alt?: string
  className?: string
}

function ImageResolver({ className, src, alt = 'Some image' }: ImageResolverType) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = offlineImage
  }

  return (
    <img className={className} src={src} alt={alt} onError={handleImageError} />
  )
}

export default ImageResolver
