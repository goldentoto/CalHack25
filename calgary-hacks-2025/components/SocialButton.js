
function SocialButton({ provider, image }) {
  return (
    <button className="flex gap-3 justify-center items-center p-3.5 text-base text-black bg-white rounded-lg border border-gray-300 border-solid cursor-pointer">
      <img
        src={image}
        alt={`${provider} logo`}
        className="h-[18px] w-[18px]"
      />
      <span>Continue with {provider}</span>
    </button>
  );
}

export default SocialButton;