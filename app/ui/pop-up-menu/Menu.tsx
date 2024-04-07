'use client';
import MenuIcon from '@/public/icons/Feather Icon.svg';
import { useState } from 'react';
import Image from 'next/image';
import MenuBoard from './MenuBoard';
export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="pr-40">
      <button
        className=" w-[30px] h-[30px]"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <Image src={MenuIcon} alt="menu" width={30} height={30} />
      </button>
      {menuOpen && (
        <div className="absolute">
          <MenuBoard
            isLeader={true}
            info={{
              teamUrl: '팀 유알엘',
              teamName: '팀 이름',
              teamId: 0,
              userId: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
