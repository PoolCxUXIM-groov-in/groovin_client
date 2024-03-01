'use client'

import { motion } from "framer-motion"
import React, { useState } from 'react'
import defaultImage from '@/public/images/defaultProfile.jpg'
import Image, { StaticImageData } from 'next/image'
import InputBox from '../form/inputbox'
const placeHolders = {
  name: '김그룹',
  phone: '하이픈(-) 없이 숫자만 입력',
  department: '그룹대학교 단과대학 전공학과',
  email: 'groovin@email.com',
  studentNumber: '숫자만 입력',
}
const inputContents = {} //////////////
export default function BasicForm() {
    
  return (
    <div>
        <p>생년월일</p><p> 2000.0101</p>
        <button></button>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    
  )
}
