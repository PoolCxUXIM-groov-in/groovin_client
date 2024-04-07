'use client';

import SplitLine from '../form/splitline';
import Tab from '../tab/tab';
import { useState } from 'react';
import TitleInfo from './tileInfo';
import Image from 'next/image';
import defaultImage from '@/public/images/defaultProfile.jpg';
import VisibleProfileModal from '../modal/visibleProfileModal';
import SideMainButton from '../sidebar/sideMainButton';
import { dummyData } from '@/app/utils/dummy';

export default function Tile({
  userInfo,
  isLeader,
  empty,
}: {
  userInfo: {
    basic: object;
    skill?: object;
    career?: object[];
    others?: object;
  } | null;
  isLeader: boolean;
  empty: boolean;
}) {
  const [activeTab, setActiveTab] = useState<
    'basic' | 'skill' | 'career' | 'others'
  >('basic');
  const [visibleModal, setVisibleModal] = useState<'hidden' | ''>('hidden');
  return (
    <div className=" border-[#f0f0f0] border-2 rounded-lg  p-7 shadow-xl flex flex-col grow overflow-x-hidden  h-[440px] gap-5">
      {/*'min-'*/}
      {/*grid grid-rows-[2fr_1fr_6fr]*/}
      <div className="flex flex-raw justify-between h-[60px]">
        <div className=" rounded-full w-[60px] h-[60px] overflow-hidden">
          {/* <img src= alt="프로필 이미지"/> */}
          <Image
            src={defaultImage} //profileImage?.toString()}
            alt="profile image"
            width="60"
            height="60"
            unoptimized
            className=" object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-start text-sm">
          <p
            onClick={() => {
              setVisibleModal('');
            }}
            className=" underline cursor-pointer"
          >
            수정하기
          </p>
          <div className={`${visibleModal}`}>
            <VisibleProfileModal onModalExist={setVisibleModal} />
          </div>
        </div>
      </div>
      <div>
        <h3 className=" text-lg font-semibold">김그룹</h3>
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          {/* <Tab size="sm"/> */}
          <Tab activeTab={activeTab} onTab={setActiveTab} size="sm" />
          <SplitLine />
        </div>

        <div className=" overflow-y-scroll">
          {!empty ? (
            <TitleInfo activeTab={activeTab} edit={false} />
          ) : (
            <div>
              <section>
                <p>아직 입장한 다른 팀원이 없어요</p>
                <p>초대 링크를 복사하여 팀원들을 초대해보세요!</p>
              </section>
              {/* <SideMainButton text="초대하기" /> */}
              <button
                onClick={(e) => {
                  e.clipboardData.setData('url', 'www.google.com');
                }}
                className=" text-sm  rounded-md w-[107px] h-[32px] bg-white text-[#54D99B] border-[#54D99B] border-2"
              >
                초대하기
              </button>
            </div>
          )}

          {/* <ul className="flex flex-col">
                    <li className="flex flex-row">
                        <h4>종류종류</h4> <p>내용내용</p>
                    </li> */}

          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}
