'use client';

import React, { useState } from 'react';
import defaultImage from '@/public/images/defaultProfile.jpg';
import Image, { StaticImageData } from 'next/image';
import InputBox from '../form/inputbox';
import PictureModal from '../modal/pictureModal';
const placeHolders = {
  name: '김그룹',
  phone: '하이픈(-) 없이 숫자만 입력',
  department: '그룹대학교 단과대학 전공학과',
  email: 'groovin@email.com',
  studentNumber: '숫자만 입력',
};
interface basicInfosInterface {
  profileImage: string | StaticImageData | null;
  name: string;
  phone: string;
  department: string;
  birth: string;
  email: string;
  studentNumber: string;
}
const currentDate = new Date(Date.now());
const basicInfosDefault = {
  profileImage: defaultImage,
  name: '',
  phone: '',
  department: '',
  birth: `${currentDate.toISOString().split('T')[0]}`,
  email: '',
  studentNumber: '',
};
export default function BasicForm({
  action,
}: {
  action: { get: any; post: any };
}) {
  const [basicInfos, setBasicInfos] =
    useState<basicInfosInterface>(basicInfosDefault);

  const [profileImage, setProfileImage] = useState<
    string | StaticImageData | null
  >(defaultImage);
  const [visibleModal, setVisibleModal] = useState<'hidden' | ''>('hidden');

  console.log('basicInfo: ', basicInfos);
  // const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0]
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onload = () => {
  //       setProfileImage(reader.result!.toString())
  //     }
  //   }
  // }
  console.log('MODAL: ', visibleModal);

  return (
    <div>
      <div className={`${visibleModal}`}>
        <PictureModal
          onModalExit={() => {
            setVisibleModal('hidden');
          }}
          onEditImage={(newImage) => {
            setProfileImage(newImage);
            setBasicInfos({ ...basicInfos, profileImage: newImage });
          }}
          prevImage={basicInfos.profileImage}
        />
      </div>

      <div className="pb-5">
        {profileImage && (
          <div
            onClick={() => {
              setVisibleModal('');
            }}
            className=" rounded-full w-[120px] h-[120px] overflow-hidden"
          >
            <Image
              src={profileImage} //profileImage?.toString()}
              alt="profile image"
              width="120"
              height="120"
              unoptimized
              className=" object-cover w-full h-full"
            />
          </div>
        )}

        {/*
          여기서 클릭한 state를 밖에서 알 수 있도록 해야 함..
          */}
        {/* <PictureModal /> */}
      </div>
      <ul className="flex flex-row justify-start gap-5 ">
        <ul className="flex flex-col gap-5  items-between   w-[50%]">
          <li>
            <InputBox
              type="text"
              placeholder="김그룹"
              dataName="name"
              title="이름"
              value={basicInfos.name}
              setValue={(e) =>
                setBasicInfos({ ...basicInfos, name: e.target.value })
              }
            />
          </li>
          <li>
            <InputBox
              type="text"
              placeholder="하이픈(-) 없이 숫자만 입력"
              dataName="phone"
              title="휴대폰"
              value={basicInfos.phone}
              setValue={(e) =>
                setBasicInfos({ ...basicInfos, phone: e.target.value })
              }
            />
          </li>
          <li>
            <InputBox
              type="text"
              placeholder="그룹대학교 단과대학 전공학과"
              dataName="department"
              title="소속 대학 및 전공"
              value={basicInfos.department}
              setValue={(e) =>
                setBasicInfos({ ...basicInfos, department: e.target.value })
              }
            />
          </li>
        </ul>
        <ul className="flex flex-col gap-5 items-between w-[50%]">
          <li>
            <InputBox
              placeholder=""
              type="date"
              dataName="birth"
              title="생년월일"
              defaultValue={basicInfosDefault.birth}
              value={basicInfos.birth}
              setValue={(e) => {
                setBasicInfos({ ...basicInfos, birth: e.target.value });
              }}
            />
          </li>
          <li>
            <InputBox
              type="email"
              placeholder="groovin@gmail.com"
              dataName="email"
              title="이메일"
              value={basicInfos.email}
              setValue={(e) =>
                setBasicInfos({ ...basicInfos, email: e.target.value })
              }
            />
          </li>

          <li>
            <InputBox
              type="number"
              placeholder="숫자만 입력"
              dataName="studentNum"
              title="학번"
              value={basicInfos.studentNumber}
              setValue={(e) =>
                setBasicInfos({ ...basicInfos, studentNumber: e.target.value })
              }
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
  );
}
