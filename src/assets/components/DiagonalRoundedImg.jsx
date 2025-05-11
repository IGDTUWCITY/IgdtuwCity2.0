import React from "react";

export function DiagonalRoundedImage({ src, alt = "event", size = "w-full h-auto" }) {
  return (
    <div className={`relative ${size} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-tl-[50px] rounded-br-[50px] border-2 border-blue-500"
      />
    </div>
  );
}

// HOW TO USE 
// import React from "react";
// import { DiagonalRoundedImage } from "./DiagonalRoundedImage";

// function App() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-rose-700 to-rose-300">
//       <DiagonalRoundedImage src="/your-image-path.png" />
//     </div>
//   );
// }

// export default App;
