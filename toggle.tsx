'use client';
import { useState } from 'react';
import {motion} from "framer-motion";

export default function ToggleButton() {
  // 토글 상태를 저장하는 state 변수 설정
  const [isToggled, setIsToggled] = useState(false);

  // 토글 상태를 변경하는 이벤트 처리 함수
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      {/* 토글 상태에 따라 다른 클래스를 적용하여 버튼 스타일 변경 */}
      <div
        className={`flex h-6 w-12 cursor-pointer rounded-full flex ${isToggled?"justify-start bg-[#FFFFFF] border border-[#8C8C8C]": "justify-end bg-[#2095DF] "} p-[1px]`}
        onClick={handleToggle}
      >
        <motion.div
                className={`h-5 w-5 rounded-full flex ${isToggled?"justify-start bg-[#8C8C8C]": "bg-white"}`}
                layout
                transition={{type:'spring', stiffness:700, damping:30}}
                />
      </div>

    </div>
  );
}
