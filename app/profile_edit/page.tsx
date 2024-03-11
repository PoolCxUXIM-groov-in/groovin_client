'use client'
import InputBox, { inputBoxType } from '../ui/form/inputbox'
import SplitLine from '../ui/form/splitline'
import BasicForm from '../ui/profile_edit/basic'
import CareerForm from '../ui/profile_edit/career'
import OthersForm from '../ui/profile_edit/othes'
import SkillForm from '../ui/profile_edit/skill'
import React,{useState} from 'react'

const tabMenu = [
  { title: '기본 정보', key: 'basic' },
  { title: '스킬', key: 'skill' },
  { title: '이력', key: 'history' },
  { title: '기타 정보', key: 'etc' },
]

export default function ProfileEdit() {

  const [number, setNumber]=useState('basic')
  const change=()=>{
    if (number=='basic'){
      
    }

  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <main className="bg-white shadow-md w-[600px] p-[48px] h-[698px] flex flex-col grid justify-center items-center gap-7 rounded-2xl">
        <section className='w-full flex flex-col items-start gap-6'>
          <div >
            <h1 className='text-[21px] font-bold text-[#54D99B]'>
            PoolC
            </h1>
            <h1 className=" text-[27px] font-bold text-[#454545]">
            나의 프로필 수정하기
          </h1>
          </div>

          <div className="text-[#9999A2]">
            <p>기본 프로필은 메인 페이지 &gt; 나의 프로필에서 수정할 수 있어요.</p>

          </div>

        </section>
        <div>
          <ul className="  h-[43px] w-full flex flex-row  text-[#454545] font-bold text-lg ">
            {tabMenu.map((tab) => (
              <li key={tab.key}>
                <div className=" h-full w-[125px] flex flex-col items-center" onClick={()=>{setNumber(tab.key),{change}}}>
                  <h2>{tab.title}</h2>
                </div>
              </li>
            ))}
          </ul>
          <SplitLine />
        </div>

        <div className='h-full flex flex-col justify-start'/*' pt-7 pb-7'*/>
          <BasicForm />
          {/* <SkillForm/>   */}
          {/* <CareerForm/> */}
          {/* <OthersForm/> */}
        </div>
          
        
        
        <div className='flex flex-col items-start w-full gap-5'>
          <SplitLine />
          <div className='h-[43px] w-full flex flex-row gap-8 text-[#454545] font-bold text-lg'>
            <button className='bg-[#F5FFFA] border border-[#54D99B] text-[#54D99B] text-[13px] px-6  font-bold py-2 px-4 rounded'>취소하기</button>
            <button className='bg-[#28B070] ] text-[#F5FBFF] text-[13px] px-6  font-bold py-2 px-4 rounded'>저장하기</button>
          </div>
          
        </div>
        
        
      </main>
    </div>
  )
}
