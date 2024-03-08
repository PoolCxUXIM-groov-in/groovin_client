'use client'
import InputBox, { inputBoxType } from '../ui/form/inputbox'
import MainButton from '../ui/form/mainButton'
import SplitLine from '../ui/form/splitline'
import ModalBase from '../ui/modal/modalBase'
import PictureModal from '../ui/modal/pictureModal'
import BasicForm from '../ui/signup/basic'
import CareerForm from '../ui/signup/career'
import OthersForm from '../ui/signup/othes'
import SkillForm from '../ui/signup/skill'
import Tab from '../ui/tab/tab'
import ArrowIcon from '@/public/icons/arrow.svg'
import { useState } from 'react'



export default function SignUp() {
  const [activeTab, setActiveTab] = useState<"basic"|"skill"|"career"|"others">("basic");
  return (
    <div className="  w-full h-screen flex flex-col justify-center items-center ">
      <main  className=" grid grid-rows-[1fr_0.5fr_4fr_0.7fr] bg-white shadow-md w-[808px] p-[48px] h-[864px]    gap-5">
        <section className=" w-full flex flex-col items-start gap-6">
          <h1 className=" text-2xl font-bold text-[#454545]">
            프로필 생성하기
          </h1>
          <div className="text-[#9999A2]">
            <p className=''>그루빙에서 사용할 기본 프로필을 생성해주세요!</p>
            <p>
              생성한 프로필은 메인 페이지 &gt; 나의 프로필에서 언제든지 수정할
              수 있어요.
            </p>
          </div>
        </section>
        <div className='flex flex-col justify-start'>
          <Tab activeTab={activeTab} onTab={setActiveTab} size='lg'/>
          <SplitLine />
        </div>
        
        <div className='h-full flex flex-col justify-start overflow-scroll'/*' pt-7 pb-7'*/>
          {activeTab==="basic" && <BasicForm />}
          {activeTab==="skill" && <SkillForm/>}
          
          {activeTab==="career"&& <CareerForm/>}
          {activeTab==="others" &&<OthersForm/>}
          
        </div>
          
        

        <div className='flex flex-col items-start w-full gap-5'>
          <SplitLine />
          
          <MainButton light={false} text={`다음  →`} width='md'/>
        </div>
        
      </main>
    </div>
  )
}
