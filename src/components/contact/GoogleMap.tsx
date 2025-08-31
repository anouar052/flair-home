"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../ui/theme';

declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ center, zoom = 15, className = '' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();

  // Copenhagen coordinates (approximate location for the design district)
  const copenhagenCenter = { lat: 55.6761, lng: 12.5683 };

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      // Check if script is already loading
      if (window.google) {
        setIsLoaded(true);
        return;
      }

      // Check if script tag already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        // Script is already loading, wait for it
        const checkGoogle = () => {
          if (window.google) {
            setIsLoaded(true);
          } else {
            setTimeout(checkGoogle, 100);
          }
        };
        checkGoogle();
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
        console.warn('Google Maps API key is not configured. Map will not load.');
        // Set loaded to true to show fallback content
        setIsLoaded(true);
        return;
      }

      // Set the callback function BEFORE creating the script
      window.initMap = () => {
        setIsLoaded(true);
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Handle script load error
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
      };

      document.head.appendChild(script);
    };

    loadGoogleMaps();

    // Cleanup function
    return () => {
      // Clean up the global callback
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.google || !window.google.maps) return;

    try {
      // Initialize map
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: center || copenhagenCenter,
        zoom: zoom,
        styles: isDark ? darkMapStyle : lightMapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: true,
      });

      // Add marker
      const marker = new window.google.maps.Marker({
        position: center || copenhagenCenter,
        map: mapInstance,
        title: 'Flair Design Studio - Copenhagen',
        animation: window.google.maps.Animation.DROP,
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: 600; color: #1a1a1a;">Flair Design Studio</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
              123 Design District<br>
              2100 Copenhagen, Denmark
            </p>
            <p style="margin: 0; font-size: 12px; color: #999;">
              Click to get directions
            </p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });

      setMap(mapInstance);

      // Cleanup function
      return () => {
        if (mapInstance) {
          // Clean up map instance
        }
      };
    } catch (error) {
      console.error('Error initializing Google Map:', error);
    }
  }, [isLoaded, center, zoom, isDark]);

  // Update map style when theme changes
  useEffect(() => {
    if (map && window.google && window.google.maps) {
      try {
        map.setOptions({
          styles: isDark ? darkMapStyle : lightMapStyle,
        });
      } catch (error) {
        console.error('Error updating map style:', error);
      }
    }
  }, [isDark, map]);

  if (!isLoaded) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current mx-auto mb-2"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Loading map...</p>
        </div>
      </div>
    );
  }

  // Fallback when Google Maps is not available
  if (!window.google || !window.google.maps) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-lg font-medium mb-2">Flair Design Studio</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            123 Design District<br />
            2100 Copenhagen, Denmark
          </p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=123+Design+District,+2100+Copenhagen,+Denmark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapRef} className={`w-full h-full ${className}`} />
  );
}

// Light map style
const lightMapStyle = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#dadada' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#c9c9c9' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
];

// Dark map style
const darkMapStyle = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [{ color: '#212121' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#212121' }],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#424242' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#424242' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#424242' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#424242' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#424242' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#424242' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
];
