'use client'

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
  const [profileImage, setProfileImage] = useState<
    string | StaticImageData | null
  >(defaultImage)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setProfileImage(reader.result!.toString())
      }
    }
  }

  return (
    <div>
      <div className='pb-5'>
        <input
          id="profileImage"
          name="profileImage"
          className="hidden"
          onChange={handleFile}
          type="file"
          accept="image/*"
        />
        {profileImage && (
          <div className=" rounded-full w-[120px] h-[120px] overflow-hidden">
            <label htmlFor="profileImage" className=" bg-red-500">
              <Image
                src={profileImage} //profileImage?.toString()}
                alt="profile image"
                width="120"
                height="120"
                unoptimized
                className=" object-cover w-full h-full"
              />
            </label>
          </div>
        )}
      </div>
      <ul className="flex flex-row justify-between">
        <ul className="flex flex-col gap-5  items-between">
          <li>
            <InputBox
              type="text"
              placeholder="김그룹"
              dataName="name"
              title="이름"
            />
          </li>
          <li>
            <InputBox
              type="text"
              placeholder="wow"
              dataName="phone"
              title="휴대폰"
            />
          </li>
          <li>
            <InputBox
              type="text"
              placeholder="wow"
              dataName="department"
              title="소속 대학 및 전공"
            />
          </li>
        </ul>
        <ul className="flex flex-col gap-5 items-between">

          <li>
            <InputBox
              type="date"
              placeholder="wow"
              dataName="birth"
              title="생년월일"
            />
          </li>
          <li>
            <InputBox
              type="email"
              placeholder="wow"
              dataName="email"
              title="이메일"
            />
          </li>
          
          <li>
            <InputBox
              type="number"
              placeholder="wow"
              dataName="studentNum"
              title="학번"
            />
          </li>
        </ul>

      </ul>
{/*       
      <ul className="grid grid-cols-2 grid-rows-3 gap-10">
        <li key={"name"} className=" col-start-1 row-start-1 col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="name"
            title="이름"
          />
        </li>
        <li key="phone" className=" col-start-1 row-start-2  col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="phone"
            title="휴대폰"
          />
        </li>
        <li key="department" className=" col-start-1 row-start-3  col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="department"
            title="소속 대학 및 학과"
          />
        </li>
        <li key="birth" className=" col-start-2 row-start-1 col-span-1 row-span-1">
          <InputBox
            type="date"
            placeholder="wow"
            dataName="birth"
            title="생년월일"
          />
        </li>
        <li key="email" className=" col-start-2 row-start-2  col-span-1 row-span-1">
          <InputBox
            type="email"
            placeholder="wow"
            dataName="email"
            title="이메일"
          />
        </li>
        <li key="studentNum" className=" col-start-2 row-start-3 col-span-1 row-span-1">
          <InputBox
            type="number"
            placeholder="wow"
            dataName="studentNum"
            title="학번"
          />
        </li>
      </ul> */}
    </div>
  )
}
