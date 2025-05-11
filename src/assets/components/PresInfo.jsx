import { PresPic } from "./PresPic";


export function PresInfo({ name, description, image }) {
  return (
    <div className="flex bg-[#511c2c] p-4 rounded-lg text-white w-fit max-w-2xl">
      {/* Text Section */}
      <div className="bg-[#f8f5f2] text-[#511c2c] p-4 rounded-l-[50px] w-2/3 font-serif">
        <h2 className="text-xl font-bold font-sans">{name}</h2>
        <p className="mt-2 text-sm whitespace-pre-wrap">{description}</p>
      </div>

      {/* Image Section */}
      <div className="ml-2 flex items-center">
        <PresPic src={image} alt={`${name}'s photo`} />
      </div>
    </div>
  );
}
