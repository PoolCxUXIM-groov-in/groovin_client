import SplitLine from '../ui/form/splitline';
import SideTab from '../ui/sidebar/sideTab';
import mainLogo from '@/public/images/main.svg';
import Image from 'next/image';
import Link from 'next/link';
import sideProfile from '@/public/icons/User.svg';
import sideBell from '@/public/icons/Bell.svg';
import sideInfo from '@/public/icons/Info square.svg';
import sideLogout from '@/public/icons/Logout.svg';
import TeamSpaceContainer from '../ui/sidebar/teamSpaceContainer';
import { dummyData } from '../utils/dummy';
import Toast from '../ui/toast-pop-up/toast';
export default function Layout({ children }: { children: React.ReactNode }) {
  const teamInfo = dummyData.teamData.map((team) => ({
    teamId: team.teamId,
    teamName: team.teamName,
    memNum: team.members.length,
  }));
  return (
    <div
      className={` flex flex-row min-w-fit w-full    h-full overflow-clip   bg-white `}
    >
      <div
        className={`  grid grid-rows-[164px_3fr_164px] gap-7 p-7 w-[292px]    shadow-xl`}
      >
        <div className="  flex flex-col   gap-5 row-start-1">
          <div>
            <Image src={mainLogo} width="150" height="32" alt="to main page" />
          </div>
          <div className="flex flex-col gap-3">
            <SideTab
              href={'/main/profile'}
              icon={sideProfile}
              text="나의 프로필"
            />
            <SideTab icon={sideBell} text="알림" />
          </div>

          <SplitLine />
        </div>
        <TeamSpaceContainer teamInfo={teamInfo} />

        <div className=" row-start-3 flex flex-col gap-5">
          <SplitLine />

          <SideTab icon={sideInfo} text="도움말" />
          <SideTab icon={sideLogout} text="로그아웃" />
          <div>
            <button className=" pl-3 pr-3 text-xs underline">회원탈퇴</button>
          </div>
        </div>
      </div>
      <div className="  w-full  overflow-y-scroll   ">{children}</div>
    </div>
  );
}
