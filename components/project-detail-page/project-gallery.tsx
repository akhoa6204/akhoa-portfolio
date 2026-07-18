import Image from "next/image";

import type { ProjectImage } from "@/types/portfolio";

type ProjectGalleryProps = {
  title: string;
  imageUrl?: string;
  gallery?: ProjectImage[];
};

export function ProjectGallery({
  title,
  imageUrl,
  gallery,
}: ProjectGalleryProps) {
  const images =
    gallery && gallery.length > 0
      ? gallery
      : imageUrl
        ? [
            {
              url: imageUrl,
              alt: `${title} application interface`,
            },
          ]
        : [];

  if (images.length === 0) {
    return null;
  }

  const [mainImage, ...remainingImages] = images;

  return (
    <section aria-labelledby="project-gallery-title" className="mt-14">
      <h2 id="project-gallery-title" className="sr-only">
        Project gallery
      </h2>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={mainImage.url}
            alt={mainImage.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </div>

      {remainingImages.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {remainingImages.map((image) => (
            <div
              key={image.url}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
