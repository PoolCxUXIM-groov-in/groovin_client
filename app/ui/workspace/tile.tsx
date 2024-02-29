import SplitLine from "../form/splitline";
import Tab from "../tab/tab";

export default function Tile(){
    //
    return (
    <div className=" grow p-7 shadow-xl grid grid-rows-[2fr_1fr_6fr] w-80 h-[440px] ">
        <div className="flex flex-raw justify-between">
            <div>
                <img alt="프로필 이미지"/>
            </div>
            <div className="flex flex-col justify-start text-sm">
                <p>수정하기</p>
            </div>
        </div>
        <div>
            <h3>
                김그룹
            </h3>
        </div>
        <div className="">
            <Tab size="sm"/>
            <SplitLine/>
            <div>
                <ul className="flex flex-col">
                    <li className="flex flex-row">
                        <h4>종류종류</h4> <p>내용내용</p>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
        
    </div>);
}