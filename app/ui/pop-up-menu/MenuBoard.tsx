'use client';
import PlusIcon from '@/public/icons/plus.svg';
import ExitTeamIcon from '@/public/icons/Logout.svg';
import Edit from '@/public/icons/Edit.svg';
import Copy from '@/public/icons/Copy.svg';
import Delete from '@/public/icons/TrashBucket.svg';
import Image from 'next/image';
import Toast from '../toast-pop-up/toast';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const updateTeamName = () => {};
const deleteTeam = () => {};
const exitTeam = () => {};
let timeid: number | null;
export default function MenuBoard({
  isLeader,
  info,
}: {
  isLeader: boolean;
  info: { teamUrl: string; teamName: string; teamId: number; userId: number };
}) {
  const pathName = usePathname();
  const [clicked, setClicked] = useState<{
    active: boolean;
    content: string | null;
  }>({ active: false, content: null });
  const leaderList = [
    {
      img: PlusIcon,
      text: '초대하기',
      action: () => {
        window.navigator.clipboard.writeText(info.teamUrl);
      },
      popContent: '초대 링크가 클립보드에 복사되었습니다.',
    },
    {
      img: Copy,
      text: '링크 복사',
      action: () => {
        window.navigator.clipboard.writeText(`베이스url에다가${pathName}`);
      },
      popContent: '링크가 복사되었습니다. 노션에 임베드 해보세요.',
    },
    {
      img: Edit,
      text: '이름 변경',
      action: () => {
        updateTeamName();
      },
      popContent: '팀 스페이스 이름이 변경되었습니다.',
    },
    {
      img: Delete,
      text: '팀 삭제하기',
      action: () => {
        deleteTeam();
      },
      popContent: '팀 스페이스가 삭제되었습니다.',
    },
  ];
  const follwerList = [
    {
      img: Copy,
      text: '링크 복사',
      action: () => {
        window.navigator.clipboard.writeText(`베이스url에다가${pathName}`);
      },
      popContent: '링크가 복사되었습니다. 노션에 임베드 해보세요.',
    },
    {
      img: ExitTeamIcon,
      text: '팀 나가기',
      action: () => {
        exitTeam();
      },
      popContent: '팀을 나갑니다.',
    },
  ];
  const resultList = isLeader ? leaderList : follwerList;

  return (
    <ul className="w-[150px] shadow-lg rounded-xl  border-[#f0f0f0] bg-white flex flex-col gap-1 border-[1px] ">
      {resultList.map((menu) => (
        <li
          key={menu.text}
          className="hover:bg-[#f0f0f0] flex flex-row gap-5 w-full pl-4 pr-4 pt-1 pb-1 rounded-md "
          onClick={() => {
            if (timeid) window.clearTimeout(timeid);
            menu.action();
            setClicked({ active: true, content: menu.popContent });

            timeid = window.setTimeout(() => {
              setClicked({ active: false, content: null });
              timeid = null;
            }, 2000);
          }}
        >
          <Image src={menu.img} alt={menu.text} width={16} height={16} />
          <p>{menu.text}</p>
        </li>
      ))}
      {clicked.active && <Toast text={clicked.content ?? ''} />}
    </ul>
  );
}
