import ComparisonTable from './ComparisonTable';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import PlanCard from './PlanCard';
import PointsRedemption from './PointsRedemption';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for beginners',
      features: [
        '5 Live Classes/Month',
        'Basic Recipe Library',
        'Community Access',
        'Weekly Meal Plans'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-orange-100'
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'For dedicated home chefs',
      features: [
        'Unlimited Live Classes',
        'Full Recipe Library',
        '1-on-1 Coaching Session',
        'Custom Meal Plans',
        'Priority Support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-orange-500',
      popular: true
    },
    {
      name: 'Master',
      price: '$99',
      description: 'Professional level access',
      features: [
        'All Pro Features',
        'Private Classes',
        'Restaurant Techniques',
        'Business Training',
        'Equipment Discounts'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-orange-100'
    }
  ];

  return (
    <div className="flex flex-col bg-black bg-opacity-0">
      <div className="flex flex-col w-full bg-gray-50 max-md:max-w-full">
        <Header />
        <div className="flex flex-col -mt-16 w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-col px-20 pt-16 pb-24 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <div className="flex flex-col items-center px-4 mb-0 bg-black bg-opacity-0 max-md:mb-2.5 max-md:max-w-full">
              <h1 className="z-10 -mt-1 text-5xl font-bold leading-none text-center text-black max-md:max-w-full max-md:text-4xl">
                Choose Your Perfect Plan
              </h1>
              <p className="mt-10 text-lg leading-5 text-center text-black max-md:max-w-full">
                Join thousands of home chefs who have transformed their cooking journey with our tailored membership plans.
              </p>
              <div className="flex flex-col justify-center items-center self-stretch px-16 py-px mt-12 w-full bg-black bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-4 items-start max-w-full w-[203px]">
                  <span className="grow text-base leading-none text-center text-black">Monthly</span>
                  <div className="flex flex-col bg-black bg-opacity-0">
                    <div className="flex shrink-0 h-6 bg-orange-200 rounded-full" />
                  </div>
                  <span className="self-stretch text-xs leading-4 text-center text-black">
                    <span className="text-base text-gray-600">Yearly</span>
                    <span className="text-sm text-orange-600"> Save 20%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-20 py-3.5 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col px-12 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
              <div className="px-4 py-6 bg-black bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ComparisonTable />
          <PointsRedemption />
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PricingPlans;