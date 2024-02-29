'use client'

import React, { useState } from 'react'
import Youtube from '@/public/icons/sns-youtube.svg'
import Instagram from '@/public/icons/sns-instagram.svg'
import Facebook from '@/public/icons/sns-facebook.svg'
import Linkedin from '@/public/icons/sns-linkedin.svg'
import Discord from '@/public/icons/sns-discord.svg'
import Behance from '@/public/icons/sns-behance.svg'
import Github from '@/public/icons/sns-github.svg'
import InputBox from '../form/inputbox'

import Image from 'next/image'

const description="콤마(',')로 구분해서 작성해주세요."


// const userInfo:{}={{title:"하드 스킬", description:description},{title:"소프트 스킬", description:description}}


const mbti=["ISTJ","ISTP","ISFJ","ISFP",
            "INTJ","INTP","INFJ","INFP",
            "ESTJ","ESTP","ESFJ","ESFP",
            "ENTJ","ENTP","ENFJ","ENFP",];

const snsIcons=[Youtube, Instagram, Facebook, Linkedin, Discord, Behance, Github]

export default function OthersForm() {



  return (
    <div>
        <ul className={`flex flex-row justify-between `}>
            <ul className='flex flex-col gap-5  '>
                <li key="sns" className=" col-start-1 row-start-1 col-span-1 row-span-1  flex flex-col gap-5">
                
                    <section className='flex flex-col gap-5'>
                        <h3>SNS</h3>
                        <p className=' text-sm   text-[#9999A2]'>연결할 SNS 주소를 입력하고 Enter키를 눌러주세요.</p>
                    </section>
                    
                    <div>
                        <ul className='flex flex-row justify-start gap-3'>
                            {snsIcons.map(sns=><li  key="sns"><Image className='w-[48] h-[48]' src={sns} width="48" height="48" alt="sns"/></li>)}
                        </ul>
                    </div>
                
                </li>
                <li key="mbti" className=" col-start-1 row-start-2  col-span-1 row-span-1 flex flex-col gap-5">
                    <label htmlFor='mbti' className='' ><h3>MBTI</h3></label>
                    <select id="mbti" className='rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] max-w-[510px] pl-6 pr-6 focus:bg-[#FFFFFF]  outline-[#28b070]' >
                        <option selected className='font-bold' key="none">모름</option>
                        {mbti.map(mbti=><option key={mbti}>{mbti}</option>)}
                        
                    </select>
                </li>
                <li key="interests" className=" col-start-1 row-start-3  col-span-1 row-span-1">
                    <InputBox
                        type="text"
                        placeholder="wow"
                        dataName="interests"
                        title="관심사"
                        description={description}
                    />
                </li>
                <li key="introduction" className=" col-start-1 row-start-4  col-span-1 row-span-1 flex flex-col gap-5">
                    <label htmlFor='introduction' className='' ><h3>자유로운 자기소개</h3></label>
                    <textarea id="introduction" className='rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] max-w-[510px] pl-6 pr-6 pt-2 pb-2 focus:bg-[#FFFFFF]  outline-[#28b070]'>안녕하세여 어쩌구 저쩌구</textarea>
                </li>
            </ul>
            {/* <ul className='flex flex-col w-1/2'></ul> */}
        </ul>
      
      {/* <ul className={`grid grid-cols-2 grid-rows-4 gap-5 `}> 
        <li key="sns" className=" col-start-1 row-start-1 col-span-1 row-span-1  flex flex-col gap-5">
            
            <section className='flex flex-col gap-5'>
                <h3>SNS</h3>
                <p className=' text-sm   text-[#9999A2]'>연결할 SNS 주소를 입력하고 Enter키를 눌러주세요.</p>
            </section>
            
            <div>
                <ul className='flex flex-row justify-start gap-3'>
                    {snsIcons.map(sns=><li  key="sns"><Image className='w-[48] h-[48]' src={sns} width="48" height="48" alt="sns"/></li>)}
                </ul>
            </div>
            
        </li>

        <li key="mbti" className=" col-start-1 row-start-2  col-span-1 row-span-1 flex flex-col gap-5">
            <label htmlFor='mbti' className='' ><h3>MBTI</h3></label>
          <select id="mbti" className='rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] w-[340px] pl-6 pr-6 focus:bg-[#FFFFFF]  outline-[#28b070]' >
            <option selected className='font-bold' key="none">모름</option>
            {mbti.map(mbti=><option key={mbti}>{mbti}</option>)}
            
          </select>
        </li>
        <li key="interests" className=" col-start-1 row-start-3  col-span-1 row-span-1">
          <InputBox
            type="text"
            placeholder="wow"
            dataName="interests"
            title="관심사"
            description={description}
          />
        </li>
        <li key="introduction" className=" col-start-1 row-start-4  col-span-1 row-span-1 flex flex-col gap-5">
        <label htmlFor='introduction' className='' ><h3>자유로운 자기소개</h3></label>
          <textarea id="introduction" className='rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] w-[340px] pl-6 pr-6 pt-2 pb-2 focus:bg-[#FFFFFF]  outline-[#28b070]'>안녕하세여 어쩌구 저쩌구</textarea>
        </li>
       
      </ul> */}
    </div>
  )
}
