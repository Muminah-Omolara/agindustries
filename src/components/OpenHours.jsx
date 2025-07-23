import React from "react";
import Marquee from "react-fast-marquee";
import { Clock, Calendar } from "lucide-react";

const OpenHoursMarquee = () => {
  return (
    <div className="bg-white text-green-950 py-8 mb-8">
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center gap-4 text-lg font-medium">
          <Calendar className="w-5 h-5" />
          <span>Open Hours:</span>
          <span className="mx-2">Mon - Sat: 8:00 AM - 5:00 PM</span> |
          <span className="mx-2 text-red-300">
            Closed on Sundays & Public Holidays
          </span>
          <Clock className="w-5 h-5 mr-6" />
        </div>
      </Marquee>
    </div>
  );
};

export default OpenHoursMarquee;
