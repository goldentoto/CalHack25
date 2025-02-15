
const FAQ = () => {
  const faqItems = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 7-day free trial for new members to try out our Pro plan features."
    },
    {
      question: "What's the cancellation policy?",
      answer: "You can cancel your subscription at any time. No long-term commitments required."
    }
  ];

  return (
    <div className="flex flex-col justify-center px-20 py-16 w-full text-black bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[768px]">
          <h2 className="self-center text-3xl font-bold leading-none text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col mt-14 bg-black bg-opacity-0 max-md:mt-10 max-md:max-w-full">
            {faqItems.map((item, index) => (
              <div key={index} className="flex flex-col py-8 pr-14 pl-6 mt-6 rounded-lg border border-solid bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
                <h3 className="self-start text-lg font-semibold leading-none">{item.question}</h3>
                <p className="mt-6 text-base leading-4 max-md:max-w-full">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;