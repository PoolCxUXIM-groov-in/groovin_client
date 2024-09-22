import MainButton from '../form/mainButton';
import ModalBase from './modalBase';
import { Dispatch, SetStateAction, useState } from 'react';
import Tab from '../tab/tab';
import SplitLine from '../form/splitline';
import TitleInfo from '../workspace/tileInfo';

export default function VisibleProfileModal({
  onModalExist,
}: {
  onModalExist: Dispatch<SetStateAction<'hidden' | ''>>;
}) {
  const [activeTab, setActiveTab] = useState<
    'basic' | 'skill' | 'career' | 'others'
  >('basic');
  return (
    <ModalBase onModalExist={() => onModalExist('hidden')}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <p className=" font-bold text-[#54d99b]">PoolC</p>
          <h3 className="font-semibold text-lg">나의 프로필 수정하기</h3>
        </div>

        <p className="text-[#9999A2]">
          기본 프로필은 메인 페이지 &lg; 나의 프로필에서 수정할 수 있어요.
        </p>
        <div className=" flex flex-col gap-4">
          <div>
            {/* <Tab size="sm"/> */}
            <Tab activeTab={activeTab} onTab={setActiveTab} size="sm" />
            <SplitLine />
          </div>

          <div className=" overflow-scroll">
            <TitleInfo activeTab={activeTab} edit={true} />
            {/* <ul className="flex flex-col">
                    <li className="flex flex-row">
                        <h4>종류종류</h4> <p>내용내용</p>
                    </li> */}

            {/* </ul> */}
          </div>
          <SplitLine />
          <div className="flex flex-row gap-5">
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
              text=" 저장하기"
              width="md"
              action={() => {
                // visiblity설정
                onModalExist('hidden');
              }}
            />
          </div>
        </div>
      </div>
    </ModalBase>
  );
}
