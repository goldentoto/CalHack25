
const ComparisonTable = () => {
  const features = [
    { name: 'Live Classes', starter: '5/month', pro: 'Unlimited', master: 'Unlimited + Private' },
    { name: 'Recipe Library', starter: 'Basic', pro: 'Full Access', master: 'Full + Exclusive' },
    { name: 'Coaching Sessions', starter: false, pro: 'Monthly', master: 'Weekly' },
    { name: 'Equipment Discounts', starter: false, pro: '10%', master: '25%' },
  ];

  return (
    <div className="flex flex-col justify-center px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
          <h2 className="self-center text-3xl font-bold leading-none text-center text-black">
            Compare Plan Features
          </h2>
          <div className="flex overflow-hidden flex-col mt-14 bg-black bg-opacity-0 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col bg-black bg-opacity-0 max-md:max-w-full">
              <div className="flex flex-col w-full text-base font-bold text-black whitespace-nowrap bg-black bg-opacity-0 max-md:max-w-full">
                <div className="flex flex-wrap border border-b-2 bg-black bg-opacity-0 max-md:max-w-full">
                  <div className="px-6 pt-4 pb-6 bg-black bg-opacity-0 max-md:px-5">Features</div>
                  <div className="px-16 pt-4 pb-6 text-center bg-black bg-opacity-0 max-md:px-5">Starter</div>
                  <div className="px-16 pt-4 pb-6 text-center bg-black bg-opacity-0 max-md:px-5">Pro</div>
                  <div className="px-16 pt-4 pb-6 text-center bg-black bg-opacity-0 max-md:px-5">Master</div>
                </div>
              </div>
              <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-wrap text-base text-black border-b border-gray-100 bg-black bg-opacity-0 max-md:max-w-full">
                    <div className="px-6 py-5 bg-black bg-opacity-0 max-md:px-5">{feature.name}</div>
                    <div className="px-16 py-5 text-center whitespace-nowrap bg-black bg-opacity-0 max-md:px-5">
                      {feature.starter === false ? (
                        <div className="flex flex-col justify-center items-center">
                          <div className="flex overflow-hidden justify-center items-center w-3 min-h-[16px]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97ffca986d6ef48f3c4f4132677277514e6c4b9d038c7f01d24875482c1a8cf5?placeholderIfAbsent=true&apiKey=b1f199f6c1e049649af563ee72ea1823"
                              className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        feature.starter
                      )}
                    </div>
                    <div className="px-16 py-5 text-center bg-black bg-opacity-0 max-md:px-5">{feature.pro}</div>
                    <div className="px-16 py-5 text-center bg-black bg-opacity-0 max-md:px-5">{feature.master}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;