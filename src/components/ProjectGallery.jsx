
import { useState } from "react";

export default function ProjectGallery({ images = [] }) {
  const [selection, setSelection] = useState({
    images,
    index: 0,
  });

  const activeIndex =
    selection.images === images &&
    selection.index >= 0 &&
    selection.index < images.length
      ? selection.index
      : 0;

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  return (
    <section className="space-y-5">
      {/* Main Image */}
      <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-surface p-6 sm:p-10">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-[650px] w-full object-contain"
        />
      </div>

      {/* Image Counter */}
      <p className="text-center font-mono text-xs text-accent">
        {activeIndex + 1} / {images.length}
        {activeImage.label && ` — ${activeImage.label}`}
      </p>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() =>
                setSelection({
                  images,
                  index,
                })
              }
              aria-label={`View ${image.label || `image ${index + 1}`}`}
              aria-pressed={activeIndex === index}
              className={`overflow-hidden rounded-xl border text-left transition-colors ${
                activeIndex === index
                  ? "border-primary bg-surface"
                  : "border-white/10 bg-background hover:border-accent/50"
              }`}
            >
              <div className="flex h-36 items-center justify-center bg-background p-3 sm:h-44">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="px-4 py-3 font-mono text-xs text-accent">
                {image.label || `Image ${index + 1}`}
              </p>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
