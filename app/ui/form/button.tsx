'use client';
import { useState } from 'react';

import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);

  // 토글 상태를 변경하는 이벤트 처리 함수
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return(
            <button className={`border border-[#F0F0F0] rounded-full px-2 inlineBlock mx-1 my-1  ${
              isToggled ? 'bg-[#2095DF] text-white' : 'bg-white text-black'
            }`}
            onClick={handleToggle} style={{verticalAlign: 'middle'}}>{label}</button>
            
  ) ;
}

export default Button;

