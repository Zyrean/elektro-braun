import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
}

function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, index) => (
        <div key={index} className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image src={src} alt={`Behandlung Bild ${index + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
