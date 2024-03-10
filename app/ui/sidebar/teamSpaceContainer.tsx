'use client';

import { useState } from 'react';

import SideMainButton from './sideMainButton';
import PlusIcon from '@/public/icons/plus.svg';
import NewTeamSpaceModal from '../modal/newTeamSpaceModal';
import Image from 'next/image';

export default function TeamSpaceContainer() {
  const [visibleModal, setVisibleModal] = useState<'hidden' | ''>('hidden');

  return (
    <>
      <div className={`${visibleModal}`}>
        <NewTeamSpaceModal onModalExist={setVisibleModal} />
      </div>

      <div className=" row-start-2 flex flex-col justify-start items-center">
        <div className="  flex flex-col items-center gap-5 ">
          <div className="  w-full flex flex-row justify-between items-center ">
            <h3 className=" font-bold text-lg">나의 팀 스페이스</h3>

            <button
              onClick={() => {
                setVisibleModal('');
              }}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={PlusIcon}
                height={24}
                width={24}
                alt="add team space"
              />
            </button>
          </div>
          <div>
            {
              <section className=" font-light text-xs text-[#9999a2]">
                <p>아직 입장한 팀 스페이스가 없어요</p>
                <p>
                  링크를 통해 기존 팀 스페이스에 입장하거나, 추가하기를 눌러
                  새로운 팀 스페이스를 생성해주세요!
                </p>
              </section>
            }
          </div>
          <SideMainButton
            onTeamSpaceClick={() => {
              setVisibleModal('');
            }}
            text="+ 추가하기"
          />
        </div>
      </div>
    </>
  );
}
