import React from "react";
export function PresPic({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-40 h-40 object-cover rounded-r-[100px]"
    />
  );
}

  