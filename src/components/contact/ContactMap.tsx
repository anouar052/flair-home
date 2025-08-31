"use client";

import React from "react";
import { useTheme } from "../ui/theme";
import { Button } from "../ui/Button";
import GoogleMap from "./GoogleMap";

export default function ContactMap() {
  const { isDark } = useTheme();

  // Copenhagen Design District coordinates (approximate)
  const copenhagenCenter = { lat: 55.6761, lng: 12.5683 };

  return (
    <section className="relative">
      {/* Google Maps */}
      <div className="h-96 w-full">
        <GoogleMap
          center={copenhagenCenter}
          zoom={15}
          className="w-full h-full rounded-lg"
        />
      </div>

      {/* Overlay with contact info */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-sm shadow-lg">
        <h3 className="font-medium text-gray-900 mb-2">Copenhagen Headquarters</h3>
        <p className="text-sm text-gray-600 mb-3">123 Design District<br />2100 Copenhagen, Denmark</p>
        <Button
          as="button"
          variant="ghost"
          className="text-sm text-gray-900 border-gray-300 hover:border-gray-500"
          onClick={() => {
            // Open Google Maps directions in new tab
            const url = `https://www.google.com/maps/dir/?api=1&destination=123+Design+District,+2100+Copenhagen,+Denmark`;
            window.open(url, '_blank');
          }}
        >
          Get Directions
        </Button>
      </div>

      {/* Additional info for mobile */}
      <div className={`md:hidden mt-4 p-4 rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <h3 className="font-medium mb-2">Copenhagen Headquarters</h3>
        <p className="text-sm mb-3">123 Design District<br />2100 Copenhagen, Denmark</p>
        <Button
          as="button"
          variant="ghost"
          className="text-sm"
          onClick={() => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=123+Design+District,+2100+Copenhagen,+Denmark`;
            window.open(url, '_blank');
          }}
        >
          Open in Maps
        </Button>
      </div>
    </section>
  );
}

