import SplitLine from "../ui/form/splitline";
import SideTab from "../ui/sidebar/sideTab";
import mainLogo from '@/public/images/main.svg'
import Image from "next/image";
import sideProfile from '@/public/icons/User.svg'
import sideBell from '@/public/icons/Bell.svg'
import sideInfo from '@/public/icons/Info square.svg'
import sideLogout from '@/public/icons/Logout.svg'

import SideMainButton from "../ui/sidebar/sideMainButton";
import PlusIcon from '@/public/icons/plus.svg'

export default function Layout({children}:{children:React.ReactNode}){
    
    return (
    <div className={` flex flex-row min-w-fit w-full  h-full  bg-white `}  >
        <div className={`  grid grid-rows-[164px_3fr_164px] gap-7 p-7 w-[292px]  shadow-xl`}>
            <div className="  flex flex-col   gap-5 row-start-1">
                <div>
                    
                    <Image src={mainLogo} width="150" height="32" alt="to main page" />
                </div>    
                <div className="flex flex-col gap-3">
                    <SideTab icon={sideProfile} text="나의 프로필"/>
                    <SideTab icon={sideBell} text="알림"/>
                </div>
                
                    
                <SplitLine />       
                
                
            </div>
            <div className=" row-start-2 flex flex-col justify-start items-center">
                <div  className="  flex flex-col items-center gap-5 ">
                    
                    <div className="  w-full flex flex-row justify-between items-center ">
                        
                        <h3 className=" font-bold text-lg">나의 팀 스페이스</h3>
                        
                        
                        <button className="flex flex-col justify-center items-center">
                            <Image src={PlusIcon} height={24} width={24} alt="add team space" />
                        </button>
                    </div>
                    <div>
                    {
                        <section className=" font-light text-xs text-[#9999a2]">
                            <p>아직 입장한 팀 스페이스가 없어요</p>
                            <p>링크를 통해 기존 팀 스페이스에 입장하거나, 추가하기를 눌러 새로운 팀 스페이스를 생성해주세요!</p>
                        </section>
                        
                    }    
                    </div>
                    <SideMainButton text="+ 추가하기"/>
                    
                </div>
            </div>
            
            
            <div className=" row-start-3 flex flex-col gap-5">
                
                <SplitLine />
                
                <SideTab icon={sideInfo} text="도움말"/>
                <SideTab icon={sideLogout} text="로그아웃"/>
                <div>
                <button className=" pl-3 pr-3 text-xs underline">회원탈퇴</button>
                </div>
            </div>

        </div>
        <div className="  w-full  ">
            
            {children}
            
            
        </div>
    </div>)
}