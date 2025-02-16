import Footer from '@/components/Footer';
import FeaturedClass from '../components/FeaturedClasses';
import Header from '../components/Header';
import NearbyClasses from '../components/NearbyClasses';
import SearchFilters from '../components/SearchFilters';

function CookClassApp() {
  return (
    <div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col pb-96 w-full bg-gray-50 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 w-full bg-black bg-opacity-0 max-md:mb-2.5 max-md:max-w-full">
            <Header />
            <SearchFilters />
            <FeaturedClass />
            <NearbyClasses />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookClassApp;