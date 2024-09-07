'use client';
import * as React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaSquarePhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

export default function ContactUs() {
  const [loading, isLoading] = React.useState(true);
  const [markerIcon, setMarkerIcon] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      const icon = L.divIcon({
        html: '<svg width="40" height="40" viewBox="0 0 121 193" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M52.799 1.08802C45 2.12602 34.212 5.95702 28.5 9.71602C22.547 13.635 13.443 22.635 9.99002 28.016C2.47702 39.723 -1.17498 55.748 0.789019 68.384C2.24702 77.762 4.39502 84.139 8.34902 90.833C13.073 98.829 15.767 104.322 21.186 117C23.89 123.325 26.708 129.85 27.449 131.5C28.19 133.15 33.583 145.525 39.434 159C52.75 189.668 53.04 190.235 56.166 191.743C60.682 193.921 64.397 191.777 67.529 185.182C69.83 180.338 87.756 141.476 95.752 124C102.209 109.887 108.274 97.943 111.995 92.015C133.257 58.137 114.501 12.19 75.5 2.61102C66.908 0.501017 60.461 0.0680161 52.799 1.08802ZM72.118 38.793C90.38 48.333 90.032 73.428 71.5 83.308C65.886 86.301 55.104 86.287 49.405 83.279C44.583 80.734 39.338 75.053 37.295 70.163C35.253 65.277 35.493 55.928 37.793 50.762C43.667 37.566 59.32 32.107 72.118 38.793Z" fill="black"/></svg>',
        iconSize: [64, 64],
        iconAnchor: [32, 64],
        className: 'marker-icon',
      });

      setMarkerIcon(icon);
    }
  }, []);

  const longitude = 106.75496557900212;
  const latitude = -6.196943697652882;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      isLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      {loading ? (
        <div className='flex items-center justify-center h-screen bg-white'>
          <span className='loading loading-spinner loading-lg bg-black'></span>
        </div>
      ) : (
        <>
          <div className='relative'>
            <Image
              src='/2.jpg'
              alt='Contact Us Background'
              width={10000}
              height={10000}
              loading='lazy'
              className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover'
            />
            <div className='absolute inset-0 flex flex-col justify-center items-start pl-4 sm:pl-8 lg:pl-10'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
                Contact Us
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row w-full h-full py-6 px-4 sm:px-8 lg:px-10'>
            <div className='flex flex-col gap-6 lg:w-1/2 px-5'>
              <span className='text-lg sm:text-xl md:text-2xl font-bold text-purple-500'>
                Ada yang ingin ditanyakan?
              </span>
              <p className='text-base sm:text-lg md:text-xl'>
                Tertarik dengan kami? ingin mengetahui lebih lanjut? Yuk, kontak
                kami dibawah ini atau kunjungi kami pada alamat yang tertera.
              </p>
              <div className='flex flex-col gap-6'>
                <Link href='https://maps.app.goo.gl/wqrC6M75AUsmcqLi8'>
                  <div className='flex items-start gap-4'>
                    <FaMapMarkerAlt className='text-black-500 text-3xl' />
                    <div>
                      <h1 className='text-lg sm:text-xl font-bold'>Office:</h1>
                      <div className='text-base sm:text-lg mobile:text-sm'>
                        <p>
                          JL. Meruya Ilir Raya 44 RT/RW 002/008,
                          Srengseng,Kembangan, West Jakarta City, Jakarta 11630.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className='flex items-start gap-4'>
                  <FaSquarePhone className='text-black-500 text-3xl' />
                  <div>
                    <h1 className='text-lg sm:text-xl font-bold'>No. Telp:</h1>
                    <div className='text-base sm:text-lg mobile:text-sm'>
                      <p>+62 21 5866080</p>
                      <p>+6287780000687</p>
                      <p>+6281294403156</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <MdEmail className='text-black-500 text-3xl' />
                  <div>
                    <h1 className='text-lg sm:text-xl font-bold'>Email:</h1>
                    <p className='text-base sm:text-lg mobile:text-sm'>
                      spotligth.jakarta@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 pt-10 lg:mt-0'>
              <div className='h-[300px] sm:h-[400px] lg:h-[500px] w-full'>
                <MapContainer
                  center={[latitude, longitude]}
                  zoom={16}
                  scrollWheelZoom={false}
                  className='h-full w-full rounded-lg shadow-md'
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                  <Marker position={[latitude, longitude]} icon={markerIcon}>
                    <Popup>Spotligth Jakarta</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
