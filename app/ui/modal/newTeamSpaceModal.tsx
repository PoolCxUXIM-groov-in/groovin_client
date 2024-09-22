import MainButton from '../form/mainButton';
import ModalBase from './modalBase';
import { Dispatch, SetStateAction } from 'react';

export default function NewTeamSpaceModal({
  onModalExist,
}: {
  onModalExist: Dispatch<SetStateAction<'hidden' | ''>>;
}) {
  return (
    <ModalBase
      onModalExist={() => {
        onModalExist('hidden');
      }}
    >
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold text-lg">새로운 팀 스페이스</h3>
        <div className="flex flex-col gap-2">
          <label>팀 스페이스 이름</label>
          <input
            className=" appearance-none rounded-md text-[$454545]  bg-[#F5FFFA]  h-[56px] max-w-[510px] pl-6 pr-6 focus:bg-[#FFFFFF]  outline-[#28b070]"
            type="text"
          />
        </div>
        <div className="flex flex-row gap-7">
          <MainButton
            light={true}
            text="취소하기"
            width="md"
            action={() => {
              onModalExist('hidden');
            }}
          />
          <MainButton
            light={false}
            text="생성하기"
            width="md"
            action={() => {}}
          />
        </div>
      </div>
    </ModalBase>
  );
}
