'use client'

import React, { useState } from 'react'
import defaultImage from '@/public/images/defaultProfile.jpg'
import Image, { StaticImageData } from 'next/image'
import InputBox from '../form/inputbox'

import { inter } from '@/app/ui/font/font'

export default function CareerForm() {

// table 공부해서 바꾸면 좋긴 할 듯.

  return (
    <div className={inter.className}>
      
     <ul className='grid grid-cols-10' >
        <li className=' col-span-3' key="project"><h3 className=' text-md bold'>프로젝트</h3></li>
        <li className='col-span-2'  key="period"><h3>기간</h3></li>
        <li className=' col-span-2' key="role" ><h3>역할</h3></li>
        <li className='col-span-3' key="file" ><h3>파일</h3></li>
     </ul>
       
      <button className=''>+ 이력 추가하기</button>
    </div>
  )
}
