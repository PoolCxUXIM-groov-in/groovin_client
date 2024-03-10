'use client';
import { useState } from 'react';
export default function Toggle({ activated }: { activated: boolean }) {
  //878787
  const [active, setActive] = useState<boolean>(true); // 부모로 빼야 함.
  const stateCss = {
    active: { container: `bg-[#2095df]  justify-start`, ball: `bg-white` },
    deactive: {
      container: ` bg-white border-[1px] border-[#878787] justify-end`,
      ball: `bg-[#878787]`,
    },
  };
  return (
    <div
      className="flex flex-row gap-3 items-center"
      onClick={() => {
        setActive(!active);
      }}
    >
      <p className="text-[#878787] text-xs">공개</p>
      <div
        className={`w-[48px] h-[24px] rounded-full ${active ? stateCss.active.container : stateCss.deactive.container}  flex flex-row items-center pr-1 pl-1 `}
      >
        <div
          className={` rounded-full w-[16px] h-[16px]  ${active ? stateCss.active.ball : stateCss.deactive.ball}`}
        ></div>
      </div>
    </div>
  );
}
