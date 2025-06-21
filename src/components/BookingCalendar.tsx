
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';

interface BookingCalendarProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  selectedDate,
  onDateSelect,
  selectedTime,
  onTimeSelect
}) => {
  // Sample available time slots with IST format
  const timeSlots = [
    '9:00 AM IST',
    '10:30 AM IST', 
    '12:15 PM IST',
    '2:45 PM IST',
    '4:00 PM IST',
    '5:30 PM IST',
    '7:15 PM IST',
    '8:45 PM IST'
  ];

  const isDateDisabled = (date: Date) => {
    // Disable past dates and weekends for this demo
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    return date < today || dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <Card className="bg-white border-sky-200 shadow-lg hover:bg-[#F4EBD0] transition-colors duration-300">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-sky-800 font-serif">
            <MapPin className="w-5 h-5" />
            Select Your Adventure Date
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            disabled={isDateDisabled}
            className="rounded-lg border-0 p-3 pointer-events-auto"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center text-sky-800 font-medium",
              caption_label: "text-lg font-serif",
              nav: "space-x-1 flex items-center",
              nav_button: "h-8 w-8 bg-transparent p-0 hover:bg-sky-200 rounded-md transition-colors",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-sky-600 rounded-md w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal hover:bg-sky-200 rounded-md transition-colors",
              day_selected: "bg-gradient-to-br from-sky-600 to-sky-700 text-white hover:bg-sky-700 focus:bg-sky-700",
              day_today: "bg-sky-100 text-sky-800 font-semibold",
              day_outside: "text-sky-400",
              day_disabled: "text-sky-300 opacity-50 cursor-not-allowed",
              day_hidden: "invisible",
            }}
          />
        </CardContent>
      </Card>

      {/* Time Slots */}
      <Card className="bg-white border-sky-200 shadow-lg hover:bg-[#F4EBD0] transition-colors duration-300">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-sky-800 font-serif">
            <Clock className="w-5 h-5" />
            Choose Your Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => onTimeSelect(time)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                    selectedTime === time
                      ? 'border-sky-600 bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-lg'
                      : 'border-sky-200 bg-white hover:border-sky-400 hover:bg-sky-50'
                  }`}
                >
                  <div className="text-sm font-medium">{time}</div>
                  <div className="text-xs opacity-75">Available</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-sky-500">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Please select a date first</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingCalendar;
