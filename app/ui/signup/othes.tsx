'use client';

import React, { useState } from 'react';

import InputBox from '../form/inputbox';

import Image from 'next/image';
import { snsIcons } from '../common/sns';
const description = "콤마(',')로 구분해서 작성해주세요.";

// const userInfo:{}={{title:"하드 스킬", description:description},{title:"소프트 스킬", description:description}}

const mbti = [
  'ISTJ',
  'ISTP',
  'ISFJ',
  'ISFP',
  'INTJ',
  'INTP',
  'INFJ',
  'INFP',
  'ESTJ',
  'ESTP',
  'ESFJ',
  'ESFP',
  'ENTJ',
  'ENTP',
  'ENFJ',
  'ENFP',
];

// const snsIcons=[Youtube, Instagram, Facebook, Linkedin, Discord, Behance, Github]

const MAX_INTRODUCTION_LENGTH = 200;
const defaultOthersInfo = {
  sns: {
    youtube: { url: '', edit: false, name: '유튜브' },
    instagram: { url: '', edit: false, name: '인스타그램' },
    facebook: { url: '', edit: false, name: '페이스북' },
    linkedin: { url: '', edit: false, name: '링크드인' },
    discord: { url: '', edit: false, name: '디스코드' },
    behance: { url: '', edit: false, name: '비핸스' },
    github: { url: '', edit: false, name: '깃허브' },
  },
  mbti: '',
  interests: '',
  introduction: '',
};
interface dynamicSns {
  [id: string]: {
    [props: string]: string | boolean;
  };
}
interface snsInterface extends dynamicSns {
  youtube: { url: string; edit: boolean; name: string };
  instagram: { url: string; edit: boolean; name: string };
  facebook: { url: string; edit: boolean; name: string };
  linkedin: { url: string; edit: boolean; name: string };
  discord: { url: string; edit: boolean; name: string };
  behance: { url: string; edit: boolean; name: string };
  github: { url: string; edit: boolean; name: string };
}
export default function OthersForm({
  action,
}: {
  action: { get: any; post: any };
}) {
  // const [snsUrls, setSnsUrls]=useState<any>({youtube:'', instagram:'', facebook:'', linkedin:'', discord:'', behance:'', github:''})
  const [othersInfo, setOthersInfo] = useState<{
    sns: snsInterface;
    mbti: string;
    interests: string;
    introduction: string;
  }>(defaultOthersInfo);
  // const [snsInfos, setSnsInfos] = useState<any>({
  //   youtube: { url: '', edit: false, name: '유튜브' },
  //   instagram: { url: '', edit: false, name: '인스타그램' },
  //   facebook: { url: '', edit: false, name: '페이스북' },
  //   linkedin: { url: '', edit: false, name: '링크드인' },
  //   discord: { url: '', edit: false, name: '디스코드' },
  //   behance: { url: '', edit: false, name: '비핸스' },
  //   github: { url: '', edit: false, name: '깃허브' },
  // });
  const [introduction, setIntroduction] = useState<string>(``);
  const clickedSnsList = Object.keys(othersInfo.sns).filter(
    (sns) => othersInfo.sns[sns].edit,
  );
  const targetSns: string = clickedSnsList.length ? clickedSnsList[0] : ''; //.map(sns=>{if (snsState[sns].edit) return snsState[sns].name}));

  const getSnsIcon: any = (sns: string) => {
    const targetSnsIcons =
      snsIcons[sns][othersInfo.sns[sns].url !== '' ? 'on' : 'off'][
        othersInfo.sns[sns].edit ? 'clicked' : 'normal'
      ];
    return targetSnsIcons;
  }; //
  // console.log("targetSnsName: ",snsState[targetSns].name)
  // console.log('snsUrls: ', snsUrls[targetSns])
  // console.log("targetIcon: ", snsIcons['youtube'][snsState['youtube'].exist?"on":"off"][snsState['youtube'].edit?"clicked":"normal"])

  const handleClickSns = (targetSns: string) => {
    // console.log(targetSns)
    // setSnsState({...(Object.keys(snsState).map(sns=>({[sns]:{...(snsState[sns]), edit:false}}))), [sns]:{...snsState[sns] ,edit:!snsState[sns].edit}} )

    const nextSnsInfos = { ...othersInfo.sns };
    Object.keys(othersInfo.sns)
      .filter((sns) => othersInfo.sns[sns].edit)
      .forEach((editingSns) => {
        if (editingSns !== targetSns) {
          nextSnsInfos[editingSns].edit = false;
        }
      });
    nextSnsInfos[targetSns].edit = !othersInfo.sns[targetSns].edit;
    setOthersInfo({ ...othersInfo, sns: nextSnsInfos });
  };

  return (
    <div className="">
      <div className={`flex flex-row justify-between `}>
        <ul className="flex flex-col gap-5  ">
          <li
            key="sns"
            className=" col-start-1 row-start-1 col-span-1 row-span-1  flex flex-col gap-5"
          >
            <section className="flex flex-col gap-5">
              <h3>SNS</h3>
              <p className=" text-sm   text-[#9999A2]">
                연결할 SNS 주소를 입력하고 Enter키를 눌러주세요.
              </p>
            </section>

            <div className="flex flex-col gap-2">
              <ul className="flex flex-row justify-start gap-3">
                {Object.keys(snsIcons).map((sns) => {
                  const snsStateIcon = getSnsIcon(sns);

                  return (
                    <li key={sns}>
                      <Image
                        id={sns}
                        onClick={(e) => {
                          // handleClickSns(String(e.target?.id ?? ''));
                          // handleClickSns(String(e.target?.id ?? ''));
                        }}
                        className="w-[48] h-[48]"
                        src={snsStateIcon}
                        width="48"
                        height="48"
                        alt="sns"
                      />
                    </li>
                  );
                })}
              </ul>
              {targetSns !== '' && othersInfo.sns[targetSns].edit && (
                <div className={`flex flex-col`}>
                  <label className="text-xs" htmlFor={targetSns}>
                    {othersInfo.sns[targetSns]?.name}
                  </label>
                  <input
                    className="rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] max-w-[510px] pl-6 pr-6 focus:bg-[#FFFFFF]  outline-[#28b070] "
                    type="url"
                    name={targetSns}
                    id={targetSns}
                    onChange={(e) => {
                      setOthersInfo({
                        ...othersInfo,
                        sns: {
                          ...othersInfo.sns,
                          [targetSns]: {
                            ...othersInfo.sns[targetSns],
                            url: e.target.value,
                          },
                        },
                      });
                      // setSnsInfos({
                      //   ...snsInfos,
                      //   [targetSns]: {
                      //     ...snsInfos[targetSns],
                      //     url: e.target.value,
                      //   },
                      // });
                    }}
                    value={String(othersInfo.sns[targetSns].url)}
                  />
                </div>
              )}
            </div>
          </li>
          <li
            key="mbti"
            className=" col-start-1 row-start-2  col-span-1 row-span-1 flex flex-col gap-5"
          >
            <label htmlFor="mbti" className="">
              <h3>MBTI</h3>
            </label>
            <select
              id="mbti"
              name="mbti"
              className="rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] max-w-[510px] pl-6 pr-6 focus:bg-[#FFFFFF]  outline-[#28b070] "
            >
              <option selected className=" text-black font-bold" key="none">
                {'모름'}
              </option>
              {mbti.map((mbti) => (
                <option key={mbti} value={mbti}>
                  {mbti}
                </option>
              ))}
            </select>
          </li>
          <li
            key="interests"
            className=" col-start-1 row-start-3  col-span-1 row-span-1"
          >
            <InputBox
              type="text"
              placeholder="wow"
              dataName="interests"
              title="관심사"
              description={description}
              value={othersInfo.interests}
              setValue={(e) =>
                setOthersInfo({
                  ...othersInfo,
                  interests: e.target.value,
                })
              }
            />
          </li>
          <li
            key="introduction"
            className=" col-start-1 row-start-4  col-span-1 row-span-1 flex flex-col gap-5 "
          >
            <label htmlFor="introduction" className="">
              <h3>자유로운 자기소개</h3>
            </label>
            <div className="flex flex-col items-end">
              <textarea
                name="introduction"
                maxLength={MAX_INTRODUCTION_LENGTH}
                onChange={(e) => {
                  setOthersInfo({
                    ...othersInfo,
                    introduction: e.target.value,
                  });
                  // setIntroduction(e.target.value);
                }}
                value={introduction}
                id="introduction"
                className="rounded-md text-[$454545] resize-none  bg-[#F5FFFA]  h-[120px] w-full pl-6 pr-6 pt-2 pb-2 focus:bg-[#FFFFFF] max-w-[510px]  outline-[#28b070]"
              />
              <p className="text-xs">{`${introduction.length}/${MAX_INTRODUCTION_LENGTH}`}</p>
            </div>
          </li>
        </ul>
        {/* <ul className='flex flex-col w-1/2'></ul> */}
      </div>

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
  );
}
