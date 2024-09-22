import MainButton from '../form/mainButton';
import Image, { StaticImageData } from 'next/image';
import defaultImage from '@/public/images/defaultProfile.jpg';
import { useState } from 'react';
import ModalBase from './modalBase';
import { Dispatch, SetStateAction } from 'react';
import InputBox from '../form/inputbox';
import UploadImage from '@/public/icons/Upload.svg';
const defaultCareerInfo = {
  projectName: '',
  period: '',
  role: '',
  fileInfo: { name: '', file: '' },
};
export default function CareerModal({
  onModalExist,
  totalCareerInfos,
  addCareerInfos,
}: {
  onModalExist: () => void;
  totalCareerInfos: object[];
  addCareerInfos: any;
}) {
  const [visible, setVisible] = useState<'visible' | 'invisible'>('invisible');
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    file: string;
  }>({ name: '', file: '' });
  const [careerInfo, setCareerInfo] = useState<{
    projectName: string;
    period: string;
    role: string;
    fileInfo: { name: string; file: string };
  }>(defaultCareerInfo);

  const handleFile = (e: any) => {
    //React.ChangeEvent<HTMLInputElement>
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log('읽음.');
      reader.onload = () => {
        console.log('로드됨');
        // setUploadedFile({ name: file.name, file: reader.result!.toString() });
        setCareerInfo({
          ...careerInfo,
          fileInfo: { name: file.name, file: reader.result!.toString() },
        });
        e.target.value = ''; // 선택된 파일 초기화
      };
    }
  };
  return (
    <ModalBase onModalExist={onModalExist}>
      <div className="flex flex-col items-center gap-7">
        <div className="flex flex-row justify-start w-full">
          <h3 className=" font-semibold text-lg">프로필 사진</h3>
        </div>
        <div className="pb-5 w-full">
          <ul className="flex flex-col items-start gap-10">
            <li className="w-full">
              <InputBox
                type="text"
                placeholder=""
                defaultValue=""
                dataName="projectName"
                title="프로젝트 이름"
                value={careerInfo.projectName}
                setValue={(e) =>
                  setCareerInfo({ ...careerInfo, projectName: e.target.value })
                }
              />
            </li>
            <li className="w-full">
              <InputBox
                type="text"
                placeholder=""
                defaultValue=""
                dataName="period"
                title="기간"
                value={careerInfo.period}
                setValue={(e) =>
                  setCareerInfo({ ...careerInfo, period: e.target.value })
                }
              />
            </li>
            <li className="w-full">
              <InputBox
                type="text"
                placeholder=""
                defaultValue=""
                dataName="role"
                title="역할"
                value={careerInfo.role}
                setValue={(e) =>
                  setCareerInfo({ ...careerInfo, role: e.target.value })
                }
              />
            </li>
            <li className="w-full">
              <div className="flex flex-col gap-2  ">
                <div>
                  <label htmlFor="file" className={` flex flex-col gap-5 `}>
                    <h3>파일</h3>
                    <div className="flex flex-row items-center justify-between rounded-md text-[$454545] bg-[#F5FFFA] font-bold h-[56px] w-full pl-6 pr-6 focus:bg-[#FFFFFF]  outline-[#28b070]">
                      <p className="font-normal">
                        {/* {uploadedFile.name !== ''
                          ? uploadedFile.name
                          : `10MB 이하 파일만 업로드 가능`} */}
                        {careerInfo.fileInfo.name !== ''
                          ? careerInfo.fileInfo.name
                          : `10MB 이하 파일만 업로드 가능`}
                      </p>
                      <Image
                        src={UploadImage}
                        width={24}
                        height={24}
                        alt="upload"
                      />
                    </div>
                  </label>
                </div>

                <input
                  id="file"
                  name="file"
                  className="hidden"
                  onChange={handleFile}
                  type="file"
                  accept="*"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className=" w-full flex flex-row gap-7 justify-start">
          <MainButton
            action={() => {
              onModalExist();
              // setUploadedFile({ name: '', file: '' });
              setCareerInfo(defaultCareerInfo);
            }}
            light={true}
            text="취소하기"
            width="md"
          />
          <MainButton
            light={false}
            text="추가하기"
            width="md"
            action={() => {
              // onEditImage(profileImage);
              addCareerInfos([...totalCareerInfos, careerInfo]);
              setCareerInfo(defaultCareerInfo);
              onModalExist();
            }}
          />
        </div>
      </div>
    </ModalBase>
  );
}
