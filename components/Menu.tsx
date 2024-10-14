'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NullableType, TMenuItem } from '@/common';

const menuItems: TMenuItem[] = [
  { name: 'Search', icon: '/icons/search.png' },
  { name: 'Home', icon: '/icons/home.png' },
  { name: 'TV Shows', icon: '/icons/tvShows.png' },
  { name: 'Movies', icon: '/icons/movies.png' },
  { name: 'Genres', icon: '/icons/genres.png' },
  { name: 'Watch Later', icon: '/icons/watchLater.png' },
];

const additionalMenuItems = ['Language', 'Get Help', 'Exit'];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<NullableType<string>>(null);

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  return (
    <div
      className="sidebar relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`fixed left-0 top-0 z-10 h-full bg-background p-4 text-white transition-transform ${
          isOpen ? 'w-64 opacity-90' : 'w-[110px]'
        }`}
        style={{ transition: 'width 0.3s' }}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="my-2 flex h-16 w-[200px] items-center">
            {isOpen && (
              <>
                <Image
                  src="/icons/avatar.webp"
                  alt="avatar"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <span className="ml-2 text-lg">Daniel</span>
              </>
            )}
          </div>

          <div className="mt-4 flex flex-col">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`flex h-[70px] cursor-pointer items-center pl-6 ${
                  selectedItem === item.name ? 'bg-[#3B486D]' : ''
                } ${isOpen ? 'w-[200px] rounded-lg' : 'w-[70px] rounded-full'}`}
                onClick={() => handleItemClick(item.name)}
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                <span
                  className={`ml-2 text-lg transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          <div className="ml-8 mt-auto flex flex-col">
            {additionalMenuItems.map((item) => (
              <div
                key={item}
                className="flex h-10 cursor-pointer items-center py-2 font-semibold uppercase text-[grey]"
              >
                <span className={`transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 h-full w-full bg-black transition-opacity ${
          isOpen ? 'opacity-80' : 'pointer-events-none opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s' }}
      ></div>

      <div
        onMouseEnter={() => setIsOpen(false)}
        className={`fixed left-64 top-0 z-50 h-full w-full bg-black transition-opacity ${
          isOpen ? 'opacity-40' : 'pointer-events-none opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s' }}
      ></div>
    </div>
  );
};

export default Menu;
