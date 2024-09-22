import MainButton from '../form/mainButton';
import Image, { StaticImageData } from 'next/image';
import defaultImage from '@/public/images/defaultProfile.jpg';
import { useState } from 'react';
import ModalBase from './modalBase';
import { Dispatch, SetStateAction } from 'react';

export default function PictureModal({
  onModalExit,
  onEditImage,
  prevImage,
}: {
  onModalExit: () => void;
  onEditImage: (newImage: string | StaticImageData) => void;
  prevImage: any;
}) {
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    prevImage,
  );
  const [visible, setVisible] = useState<'visible' | 'invisible'>('invisible');
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImage(reader.result!.toString());
      };
    }
  };
  return (
    <ModalBase onModalExist={onModalExit}>
      <div className="flex flex-col items-center gap-7">
        <div className="flex flex-row justify-start w-full">
          <h3 className=" font-semibold">프로필 사진</h3>
        </div>
        <div className="pb-5">
          {/* {profileImage && (

        )} */}
          <div
            className="  rounded-full w-[392px] h-[392px] overflow-hidden grid grid-cols-1 grid-rows-1"
            onMouseEnter={() => {
              setVisible('visible');
            }}
            onMouseLeave={() => {
              setVisible('invisible');
            }}
          >
            <Image
              src={profileImage?.toString()} //profileImage?.toString()}
              alt="profile image"
              width="392"
              height="392"
              unoptimized
              className="  object-cover w-full h-full col-span-1 col-start-1"
            />

            <div
              className={` ${visible}  flex flex-row justify-center items-center rounded-full absolute bg-[rgba(0,0,0,0.5)]  col-span-1 col-start-1    w-[392px] h-[392px] text-white gap-7`}
            >
              <label htmlFor="profileImages" className=" cursor-pointer ">
                <button className=" pointer-events-none bg-[#4Db2f1] flex flex-col justify-center items-center w-[92px] h-[48px]">
                  변경
                </button>
              </label>

              <input
                id="profileImages"
                name="profileImage"
                className=" hidden"
                onChange={handleFile}
                type="file"
                accept="image/*"
              />

              <button
                onClick={() => {
                  setProfileImage(defaultImage);
                }}
                className="bg-[#4Db2f1] w-[92px] h-[48px]"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-row gap-7 justify-start">
          <MainButton
            action={() => {
              onModalExit();
              setProfileImage(prevImage);
            }}
            light={true}
            text="취소하기"
            width="md"
          />
          <MainButton
            light={false}
            text="저장하기"
            width="md"
            action={() => {
              onEditImage(profileImage);

              onModalExit();
            }}
          />
        </div>
      </div>
    </ModalBase>
  );
}
