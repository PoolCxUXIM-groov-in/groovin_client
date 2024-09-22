'use client';

import React, { useState } from 'react';
import defaultImage from '@/public/images/defaultProfile.jpg';
import Image, { StaticImageData } from 'next/image';
import InputBox from '../form/inputbox';

import MainButton from '../form/mainButton';
import CareerModal from '../modal/newCareer';

export default function CareerForm({
  action,
}: {
  action: { get: any; post: any };
}) {
  // table 공부해서 바꾸면 좋긴 할 듯.
  const [visibleModal, setVisibleModal] = useState<'hidden' | ''>('hidden');
  const [totalCareerInfos, setTotalCareerInfos] = useState<
    Array<{
      projectName: string;
      period: string;
      role: string;
      fileInfo: { name: string; file: string };
    }>
  >([]);
  return (
    <div className={` flex flex-col gap-5`}>
      <div className={`${visibleModal}`}>
        <CareerModal
          onModalExist={() => {
            setVisibleModal('hidden');
          }}
          totalCareerInfos={totalCareerInfos}
          addCareerInfos={setTotalCareerInfos}
        />
      </div>
      <ul className="grid grid-cols-10">
        <li className=" col-span-3" key="project">
          <h3 className=" text-md bold">프로젝트</h3>
        </li>
        <li className="col-span-2" key="period">
          <h3>기간</h3>
        </li>
        <li className=" col-span-2" key="role">
          <h3>역할</h3>
        </li>
        <li className="col-span-3" key="file">
          <h3>파일</h3>
        </li>
      </ul>
      <div>
        {totalCareerInfos.map((careerInfo) => (
          <ul className="grid grid-cols-10">
            <li className=" col-span-3" key="projectName">
              <p className=" text-md bold">{careerInfo.projectName}</p>
            </li>
            <li className="col-span-2" key="period">
              <p>{careerInfo.period}</p>
            </li>
            <li className=" col-span-2" key="role">
              <p>{careerInfo.role}</p>
            </li>
            <li className="col-span-3" key="file">
              <p>
                <a href={careerInfo.fileInfo.file}>
                  {careerInfo.fileInfo.name}
                </a>
              </p>
            </li>
          </ul>
        ))}
      </div>
      {/* <button className=''>+ 이력 추가하기</button> */}
      <MainButton
        action={() => {
          setVisibleModal('');
        }}
        light={true}
        text="+ 이력 추가하기"
        width="lg"
      />
    </div>
  );
}
