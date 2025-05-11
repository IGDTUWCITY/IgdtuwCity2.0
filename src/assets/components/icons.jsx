import React from "react";

export function RoundedImageIcon({ src, alt = "icon", size = "w-8 h-8", bg = "bg-white", border = "border border-white" }) {
  return (
    <div className={`rounded-full ${size} ${bg} ${border} flex items-center justify-center overflow-hidden`}>
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
}

// HOW TO USE 
// import React from "react";
// import { RoundedImageIcon } from "./RoundedImageIcon";

// function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-300 to-rose-700">
//       <RoundedImageIcon src="/your-icon-path.png" />
//     </div>
//   );
// }

// export default App;
