'use client';
import InputBox, { inputBoxType } from '../ui/form/inputbox';
import MainButton from '../ui/form/mainButton';
import SplitLine from '../ui/form/splitline';
import ModalBase from '../ui/modal/modalBase';
import PictureModal from '../ui/modal/pictureModal';
import BasicForm from '../ui/signup/basic';
import CareerForm from '../ui/signup/career';
import OthersForm from '../ui/signup/othes';
import SkillForm from '../ui/signup/skill';
import Tab from '../ui/tab/tab';
import ArrowIcon from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import defaultImage from '@/public/images/defaultProfile.jpg';
import { snsIcons } from '../ui/common/sns';
import {
  handleBasicData,
  handleCareerData,
  handleOthersData,
  handleSkillData,
} from '../utils/handleProfile';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
interface basicFormInterface {
  profileImage: string | StaticImageData | null;
  name: string;
  birth: Date;
  phone: string;
  email: string;
  department: string;
  stduentNum: number;
}
interface skillFormInterface {
  softSkill: string;
  hardSkill: string;
}
interface careerFormInterface {
  careerList: Array<{
    projectName: string;
    period: string;
    role: string;
    file: string;
  }>;
}
interface othersFormInterface {
  sns: {
    youtube: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    discord: string;
    behance: string;
    github: string;
  };
  mbti: string;
  interests: string;
  introduction: string;
}
interface formInterface {
  basic: basicFormInterface;
  skill: skillFormInterface;
  career: careerFormInterface;
  others: othersFormInterface;
}
const defaultFormContent: formInterface = {
  basic: {
    profileImage: defaultImage,
    name: '',
    birth: new Date(Date.now()),
    phone: '',
    email: '',
    department: '',
    stduentNum: 0,
  },
  skill: { softSkill: '', hardSkill: '' },
  career: { careerList: [] },
  others: {
    sns: {
      youtube: '',
      instagram: '',
      facebook: '',
      linkedin: '',
      discord: '',
      behance: '',
      github: '',
    },
    mbti: '',
    interests: '',
    introduction: '',
  },
};
const snsList = Object.keys(snsIcons);
const tabSeq: ('basic' | 'skill' | 'career' | 'others')[] = [
  'basic',
  'skill',
  'career',
  'others',
];

export default function SignUp() {
  const { push } = useRouter();
  const [activeTab, setActiveTab] = useState<
    'basic' | 'skill' | 'career' | 'others'
  >('basic');
  const [formContent, setFormContent] =
    useState<formInterface>(defaultFormContent);
  // const submitForm = async (formData: FormData) => {
  //   const sendingData = {};
  //   const sns = {};
  //   for (const p of formData.entries()) {
  //     if (snsList.includes(p[0])) {
  //       sns[p[0]] = p[1];
  //     } else {
  //       sendingData[p[0]] = p[1];
  //     }
  //   }
  //   sendingData['sns'] = sns;
  //   console.log('total: ', sendingData);
  // };
  return (
    <div className="  w-full h-screen flex flex-col justify-center items-center ">
      <main className=" grid grid-rows-[1fr_0.5fr_4.7fr] bg-white shadow-md w-[808px] p-[48px] h-[864px]    gap-5">
        <section className=" w-full flex flex-col items-start gap-6">
          <h1 className=" text-2xl font-bold text-[#454545]">
            프로필 생성하기
          </h1>
          <div className="text-[#9999A2]">
            <p className="">그루빙에서 사용할 기본 프로필을 생성해주세요!</p>
            <p>
              생성한 프로필은 메인 페이지 &gt; 나의 프로필에서 언제든지 수정할
              수 있어요.
            </p>
          </div>
        </section>
        <div className="flex flex-col justify-start">
          <Tab activeTab={activeTab} onTab={setActiveTab} size="lg" />
          <SplitLine />
        </div>
        <form
          // action={submitForm}
          className="grid grid-rows-[4fr_0.7fr] overflow-scroll"
        >
          <div
            className="h-full flex flex-col justify-start overflow-scroll" /*' pt-7 pb-7'*/
          >
            <div className={`${activeTab !== 'basic' && 'hidden'}`}>
              <BasicForm action={handleBasicData} />
            </div>
            <div className={`${activeTab !== 'skill' && 'hidden'}`}>
              <SkillForm action={handleSkillData} />
            </div>
            {/* {activeTab === 'basic' && <BasicForm />} */}
            {/* {activeTab === 'skill' && <SkillForm />} */}
            <div className={`${activeTab !== 'career' && 'hidden'}`}>
              <CareerForm action={handleCareerData} />
            </div>
            <div className={`${activeTab !== 'others' && 'hidden'}`}>
              <OthersForm action={handleOthersData} />
            </div>
            {/* {activeTab === 'career' && <CareerForm />} */}
            {/* {activeTab === 'others' && <OthersForm />} */}
          </div>

          <div className="flex flex-col items-start w-full gap-5">
            <SplitLine />
            {/* <button type="submit">testtest</button> */}

            <MainButton
              action={() => {
                tabSeq.forEach((tab, idx) => {
                  if (tab === activeTab) {
                    setActiveTab(tabSeq[idx + 1]);
                  }
                });
                console.log(activeTab === 'basic', activeTab);
                if (activeTab === 'others') {
                  handleBasicData.post();
                  handleSkillData.post();
                  handleCareerData.post();
                  handleOthersData.post();
                  push('/main/profile');
                }
              }}
              light={false}
              text={activeTab !== 'others' ? `다음  →` : `회원가입 완료하기 ✓`}
              width={activeTab !== 'others' ? 'md' : 'lg'}
            />
          </div>
        </form>
      </main>
    </div>
  );
}
