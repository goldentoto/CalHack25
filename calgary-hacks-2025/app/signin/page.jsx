import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import SocialButton from '../components/SocialButton';

const socialButtons = [
  { provider: 'Google', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7de37a022fac1dc37386cefcb731575aa63f035d50d63d3aa3e2728ec94126fa?apiKey=b1f199f6c1e049649af563ee72ea1823&' },
  { provider: 'Facebook', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c67272f4a0d72ba1761f06ca8426be071e8e3697e7d09de110a71805e54ce37c?apiKey=b1f199f6c1e049649af563ee72ea1823&' }
];

function PrepPalSignIn() {
  return (
    <div className="flex min-h-screen bg-gray-50 max-md:flex-col">
      <div className="flex justify-center items-center px-20 py-20 w-6/12 max-md:px-5 max-md:py-10 max-md:w-full">
        <div className="p-5 w-full bg-white rounded-2xl max-w-[500px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] max-md:mx-auto max-md:my-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a494de2b494062424cc9a1c316cb2ff4c2af07e7fb8356d8dd34ec4af54c2f4?apiKey=b1f199f6c1e049649af563ee72ea1823&"
            alt="Meal prep illustration"
            className="w-full h-auto"
          />
          <div className="mt-8 text-3xl font-bold leading-tight text-black">
            Discover the Joy of Meal Prepping
          </div>
          <div className="mt-4 text-lg leading-normal text-gray-600">
            Join thousands of food enthusiasts who have transformed their
            cooking journey with our smart meal prep platform.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-20 py-12 w-6/12 max-md:px-5 max-md:py-10 max-md:w-full">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <Logo />
          </div>
          <div className="flex p-1 mb-8 bg-gray-100 rounded-lg">
            <div className="flex-1 px-0 py-2 text-sm font-medium text-center text-gray-600 rounded-md cursor-pointer">
              User
            </div>
            <div className="flex-1 px-0 py-2 text-sm font-medium text-center text-gray-600 rounded-md cursor-pointer">
              Business
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            {socialButtons.map((button) => (
              <SocialButton
                key={button.provider}
                provider={button.provider}
                image={button.image}
              />
            ))}
          </div>
          <div className="relative mx-0 my-8 text-center">
            <span className="relative px-4 py-0 text-sm text-gray-600 bg-white z-[1]">
              Or continue with
            </span>
          </div>
          <form className="flex flex-col gap-6">
            <FormInput
              label="Email address"
              type="email"
              placeholder="your@email.com"
              id="email"
            />
            <FormInput
              label="Password"
              type="password"
              value="••••••••"
              id="password"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border border-black border-solid"
                />
                <label htmlFor="remember" className="text-sm font-medium text-black">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-orange-500 no-underline"
              >
                Forgot password?
              </a>
            </div>
            <button className="p-3 text-base font-medium text-center text-white bg-orange-500 rounded-lg cursor-pointer border-[none]">
              Sign in
            </button>
          </form>
          <div className="mt-6 text-sm text-center">
            <span>Don't have an account?</span>
            <a href="#" className="font-medium text-orange-500 no-underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrepPalSignIn;