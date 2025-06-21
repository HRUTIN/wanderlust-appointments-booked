
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import BookingCalendar from '@/components/BookingCalendar';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    // Reset time selection when date changes
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Calendar Section */}
        <div className="animate-fade-in">
          <BookingCalendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelect}
          />
        </div>

        {/* Booking Form Section */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <BookingForm
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-earth-800 to-earth-900 text-earth-100 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-serif mb-2">Wanderlust Travel Agency</p>
          <p className="text-earth-300">Creating unforgettable journeys since 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
