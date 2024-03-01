'use client'

import React, { useState } from 'react'
import defaultImage from '@/public/images/defaultProfile.jpg'
import Image, { StaticImageData } from 'next/image'
import InputBox from '../form/inputbox'
const description="콤마(',')로 구분해서 작성해주세요."

// const userInfo:{}={{title:"하드 스킬", description:description},{title:"소프트 스킬", description:description}}
export default function SkillForm() {



  return (
    <div>
      <ul className="flex flex-col gap-5 w-1/2">
        <li key="hardSkill" className=" col-start-1 row-start-1 col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="hardSkill"
            title="하드 스킬"
            description={description}
          />
        </li>
        <li key="softSkill" className=" col-start-1 row-start-2  col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="softSkill"
            title="소프트 스킬"
            description={description}
          />
        </li>
      {/* <ul className="grid grid-cols-2 grid-rows-2 gap-10">
        <li key="hardSkill" className=" col-start-1 row-start-1 col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="hardSkill"
            title="하드 스킬"
            description={description}
          />
        </li>
        <li key="softSkill" className=" col-start-1 row-start-2  col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="softSkill"
            title="소프트 스킬"
            description={description}
          />
        </li> */}
       
      </ul>
    </div>
  )
}
