'use client';

import CheckIcon from '@/public/icons/Check.svg';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
export default function Toast({ text }: { text: string }) {
  // const [visible, setVisible] = useState<string>('visible');
  // const toastDiv = useRef(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible('hidden');
  //     console.log('style: ', toastDiv.current?.style); // transition등 하면 될 듯?
  //   }, 2000);
  // }, [toastDiv.current]);

  return (
    <div
      // ref={toastDiv}
      // className={` ${visible}   right-5 bottom-5   absolute flex grow-0 w-[392px] h-14 pb-4 pt-4 pl-6 pr-6 items-center gap-2 rounded-lg border-solid border-[1px] border-[#28b070] bg-white shadow-lg shadow-[rgba(171,190,209,0.4)]  `}

      className={` bottom-10 right-10 fixed flex grow-0 w-[392px] h-14 pb-4 pt-4 pl-6 pr-6 items-center gap-2 rounded-lg border-solid border-[1px] border-[#28b070] bg-white shadow-lg shadow-[rgba(171,190,209,0.4)]  `}
    >
      <Image width={24} height={24} alt={text} src={CheckIcon} />
      <p>{text}</p>
    </div>
  );
}
