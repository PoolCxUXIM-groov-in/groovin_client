'use client'

import SplitLine from "../form/splitline";
import Tab from "../tab/tab";
import { useState } from "react";
import TitleInfo from "./tileInfo";
import Image from "next/image";
import defaultImage from '@/public/images/defaultProfile.jpg'

export default function Tile(){
    const [activeTab, setActiveTab] = useState<"basic"|"skill"|"career"|"others">("basic");
    return (
    <div className=" border-[#f0f0f0] border-2 rounded-lg grow p-7 shadow-xl flex flex-col   min-w-[330px] h-[440px] gap-5">{/*grid grid-rows-[2fr_1fr_6fr]*/ }
        <div className="flex flex-raw justify-between h-[60px]">
            <div className=" rounded-full w-[60px] h-[60px] overflow-hidden">
                {/* <img src= alt="프로필 이미지"/> */}
                <Image
                
                src={defaultImage} //profileImage?.toString()}
                alt="profile image"
                width="60"
                height="60"
                unoptimized
                className=" object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-start text-sm">
                <p className=" underline">수정하기</p>
            </div>
        </div>
        <div>
            <h3 className=" text-lg font-semibold">
                김그룹
            </h3>
        </div>
        <div className=" flex flex-col gap-4">
            <div>
                {/* <Tab size="sm"/> */}
            <Tab activeTab={activeTab} onTab={setActiveTab} size="sm"/>
            <SplitLine/>
            </div>
            
            <div className=" overflow-scroll">
                <TitleInfo activeTab={activeTab} />
                {/* <ul className="flex flex-col">
                    <li className="flex flex-row">
                        <h4>종류종류</h4> <p>내용내용</p>
                    </li> */}
                    
                    
                {/* </ul> */}
            </div>
        </div>
        
    </div>);
}