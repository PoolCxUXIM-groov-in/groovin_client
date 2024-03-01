
import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return(
            <button className='border border-[#F0F0F0] rounded-full px-2 inlineBlock mx-1 my-1' style={{verticalAlign: 'middle'}}>{label}</button>
  ) ;
}

export default Button;