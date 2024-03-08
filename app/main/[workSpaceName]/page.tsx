import Tile from "@/app/ui/workspace/tile";
import SearchIcon from '@/public/icons/Search.svg'
import Image from "next/image";

export default function Page({params}:{params:any}){
    return( 
    <div className="p-10 w-full h-screen flex flex-col gap-7">
        <section className="flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-3 items-center">
                <h2 className=" font-bold text-2xl">{params.workSpaceName}</h2>
                <p>팀원</p>
                <p>12명</p>
            </div>
            
            <button>ㅁㅁㅁ</button>
        </section>
        <div className="flex flex-row items-center">
            <label htmlFor="search" className=" pl-5 absolute "><Image src={SearchIcon} width={24} height={24} alt="search team mates"/></label>
            <input  
                className=" pl-14 bg-[#F5FFFA]  h-[56px] w-[300px] p-6 focus:bg-[#FFFFFF]  outline-[#28b070]" 
                type="search"
                id="search"
                placeholder="팀원 이름으로 검색해보세요!"
            />
        </div>
        <main>
            <div className="flex flex-row gap-8 ">
                <Tile/>
                <Tile/>
                <Tile/>
            </div>
            
        </main>
    </div>);
}