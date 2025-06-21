
import { MapPin, Compass } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[40vh] bg-gradient-to-br from-earth-100 via-earth-200 to-earth-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-world-map opacity-20"></div>
      
      {/* Floating destination pins */}
      <div className="destination-pin top-16 left-[15%]" style={{ animationDelay: '0s' }}></div>
      <div className="destination-pin top-32 right-[20%]" style={{ animationDelay: '2s' }}></div>
      <div className="destination-pin bottom-20 left-[25%]" style={{ animationDelay: '4s' }}></div>
      <div className="destination-pin top-24 left-[60%]" style={{ animationDelay: '1s' }}></div>
      <div className="destination-pin bottom-32 right-[30%]" style={{ animationDelay: '3s' }}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] px-4 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Compass className="w-12 h-12 text-earth-700 mr-4 animate-pulse-soft" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-earth-900">
              Wanderlust Bookings
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-earth-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            "Adventure awaits – book your journey"
          </p>
          
          <div className="flex items-center justify-center text-earth-600">
            <MapPin className="w-5 h-5 mr-2" />
            <p className="text-lg">Discover. Explore. Experience.</p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path 
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
            fill="rgb(245, 245, 240)" 
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
