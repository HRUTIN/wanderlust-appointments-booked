
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, MessageSquare, Send, Plane } from 'lucide-react';
import { format } from 'date-fns';

interface BookingFormProps {
  selectedDate: Date | undefined;
  selectedTime: string | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedDate, selectedTime }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time for your adventure.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Adventure Booked! 🌍",
      description: `Your journey is confirmed for ${format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}. We'll contact you soon with details!`,
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const isFormValid = selectedDate && selectedTime && formData.name && formData.email;

  return (
    <Card className="bg-white border-sky-200 shadow-lg hover:bg-[#F4EBD0] transition-colors duration-300">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-sky-800 font-serif text-2xl">
          <Plane className="w-6 h-6" />
          Book Your Adventure
        </CardTitle>
        {selectedDate && selectedTime && (
          <div className="mt-4 p-4 bg-gradient-to-r from-sky-100 to-sky-200 rounded-lg">
            <p className="text-sky-800 font-medium">
              📅 {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTime}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-sky-700">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="border-sky-200 focus:border-sky-500 focus:ring-sky-500 bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-sky-700">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="border-sky-200 focus:border-sky-500 focus:ring-sky-500 bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-sky-700">
              <MessageSquare className="w-4 h-4" />
              Special Requests (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your dream adventure or any special requirements..."
              className="border-sky-200 focus:border-sky-500 focus:ring-sky-500 min-h-[100px] bg-white"
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium py-3 rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Booking Your Adventure...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Confirm Booking
              </div>
            )}
          </Button>

          <p className="text-sm text-sky-600 text-center mt-4">
            🌟 We'll confirm your booking within 24 hours and send you a detailed itinerary!
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
