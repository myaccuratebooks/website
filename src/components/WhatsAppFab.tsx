import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFab: React.FC = () => {
  const phoneNumber = '254116333000'; // Replace with your actual WhatsApp number
  const message = 'Hello! I would like to know more about MyAccurate Books.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline-block font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppFab; 