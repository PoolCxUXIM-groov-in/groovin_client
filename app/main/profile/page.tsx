'use client';

import MainButton from '@/app/ui/form/mainButton';
import SplitLine from '@/app/ui/form/splitline';
import BasicForm from '@/app/ui/signup/basic';
import SkillForm from '@/app/ui/signup/skill';
import CareerForm from '@/app/ui/signup/career';
import OthersForm from '@/app/ui/signup/othes';
import Tab from '@/app/ui/tab/tab';
import { useState } from 'react';
import {
  handleBasicData,
  handleCareerData,
  handleOthersData,
  handleSkillData,
} from '@/app/utils/handleProfile';
export default function Profile() {
  const [activeTab, setActiveTab] = useState<
    'basic' | 'skill' | 'career' | 'others'
  >('basic');

  return (
    <div className="flex flex-col p-10 gap-7 w-full]">
      <section className="h-[10%] flex flex-col gap-7 w-full">
        <h2 className="text-xl font-bold">나의 프로필</h2>
        <p className=" text-sm text-[#9999A2] font-medium">
          그루빙에서 사용할 기본 프로필이에요. 입력한 나의 프로필 정보는 각 팀
          스페이스마다 개별적으로 공개/비공개 여부를 설정할 수 있어요.
        </p>
      </section>
      <main className="flex flex-col gap-5 w-full">
        <div className="w-full flex flex-col ">
          <Tab activeTab={activeTab} onTab={setActiveTab} size="lg" />
          <SplitLine />
        </div>

        <div
          className="h-full flex flex-col justify-start overflow-scroll" /*' pt-7 pb-7'*/
        >
          {activeTab === 'basic' && <BasicForm action={handleBasicData} />}
          {activeTab === 'skill' && <SkillForm action={handleSkillData} />}
          {activeTab === 'career' && <CareerForm action={handleCareerData} />}
          {activeTab === 'others' && <OthersForm action={handleOthersData} />}
        </div>
        <div className="flex flex-col gap-5">
          <SplitLine />
          <div className="flex flex-row gap-5">
            <MainButton
              action={() => {
                /*첫 get상태로 돌려놓기*/
              }}
              light={true}
              text={'취소하기'}
              width="md"
            />
            <MainButton
              action={() => {
                handleBasicData.post();
                handleCareerData.post();
                handleOthersData.post();
                handleSkillData.post();
              }}
              light={false}
              text={'저장하기'}
              width="md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
