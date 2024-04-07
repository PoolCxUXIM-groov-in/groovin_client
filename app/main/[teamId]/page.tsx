import Tile from '@/app/ui/workspace/tile';
import SearchIcon from '@/public/icons/Search.svg';
import Image from 'next/image';
import { dummyData } from '@/app/utils/dummy';
import MenuButton from '@/app/ui/pop-up-menu/Menu';

export default function Page({ params }: { params: { teamId: number } }) {
  return (
    <div className="p-10 w-full h-screen flex flex-col gap-7">
      <section className="flex flex-row gap-5 items-center">
        <div className=" font-bold flex flex-row gap-3 items-center">
          <h2 className="  text-2xl">
            params.teamId를 get으로 해서 팀 정보 가져오기
          </h2>
          <p>팀원</p>
          <p className="text-[#2095DF]">12명</p>
        </div>
        <div className="z-10 ">
          <MenuButton />
        </div>
      </section>
      <div className="flex flex-row items-center relative ">
        <label htmlFor="search" className=" pl-5 absolute ">
          <Image
            src={SearchIcon}
            width={24}
            height={24}
            alt="search team mates"
          />
        </label>
        <input
          className=" pl-14 bg-[#F5FFFA]  h-[56px] w-[300px] p-6 focus:bg-[#FFFFFF]  outline-[#28b070]"
          type="search"
          id="search"
          placeholder="팀원 이름으로 검색해보세요!"
        />
      </div>
      {/* <main> */}
      <div className=" w-full gap-[20px]  grid grid-cols-3  ">
        {/*gap-8*/}
        <Tile
          userInfo={dummyData.userData}
          isLeader={
            dummyData.teamData[params.teamId].leaderId ===
            dummyData.userData.userId
          }
          empty={false}
        />
        {dummyData.teamData[params.teamId].members.map((member) => (
          <Tile
            userInfo={member.userInfo}
            isLeader={
              member.userId === dummyData.teamData[params.teamId].leaderId
            }
            empty={false}
          />
        ))}
        <Tile userInfo={null} isLeader={false} empty={true} />
      </div>
      {/* </main> */}
    </div>
  );
}
