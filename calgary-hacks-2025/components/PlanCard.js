
const PlanCard = ({ name, price, description, features, buttonText, buttonClass, popular }) => {
  return (
    <div className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${popular ? 'grow' : ''}`}>
      <div className={`flex flex-col self-stretch px-9 pt-9 pb-20 my-auto w-full bg-white rounded-2xl border-2 border-solid ${popular ? 'border-orange-500' : 'border-black border-opacity-0'} shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10`}>
        {popular && (
          <div className="flex flex-col self-center max-w-full text-sm text-black bg-black bg-opacity-0 w-[126px]">
            <div className="z-10 px-3.5 pt-0 pb-2.5 bg-orange-500 rounded-full max-md:pr-5">
              Most Popular
            </div>
          </div>
        )}
        <div className="flex flex-col items-center py-1 w-full font-bold text-center bg-black bg-opacity-0">
          <div className="text-xl leading-none text-black">{name}</div>
          <div className="flex gap-px items-start self-stretch px-14 pb-2.5 mt-5 whitespace-nowrap bg-black bg-opacity-0 max-md:px-5">
            <div className="text-4xl text-black">{price}</div>
            <div className="mt-4 text-lg leading-none text-black">/mo</div>
          </div>
          <div className="mt-2.5 text-base leading-none text-black">{description}</div>
        </div>
        <div className="flex flex-col mt-6 w-full bg-black bg-opacity-0">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 py-1 mt-4 w-full bg-black bg-opacity-0">
              <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
                <img
                  loading="lazy"
                  src={`http://b.io/ext_${index + 2}-`}
                  className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
                  alt=""
                />
              </div>
              <div className="flex-auto text-base text-black w-[266px]">{feature}</div>
            </div>
          ))}
        </div>
        <button className={`px-16 pt-3.5 pb-6 mt-8 text-base font-semibold text-center text-black ${buttonClass} rounded-lg max-md:px-5`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;