"use client";

import Image from "next/image";

export default function BlurImage({
  src,
  alt,
  blurDataURL,
  sizes,
  styleImage,
}) {
  return (
    <div className={styleImage.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes={sizes}
        style={{ objectFit: "cover", borderRadius: "10px" }}
        className={styleImage.img}
      />
    </div>
  );
}
