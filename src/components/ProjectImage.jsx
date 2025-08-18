import { useState, useEffect } from "react";

export default function ProjectImage({
  project,
  page,
  thumbnail = false,
  className = "",
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const fileName = thumbnail ? `${page}-t.jpg` : `${page}.jpg`;
  const src = `/assets/images/${project}/${fileName}`;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
  }, [src]);

  return (
    <img
      src={src}
      alt=""
      width={dimensions.width || undefined}
      height={dimensions.height || undefined}
      className={className || undefined}
    />
  );
}
