import Image from "next/image"
export default function SideTab({icon,text}:{icon:string,text:string}){
    return <>
        <button className=" gap-3  flex flex-row items-center w-[244px] h-[35px] pl-3 pr-3  rounded-md">
            <div className="flex flex-col justify-center items-center">
                <Image src={icon} width={24} height={24} alt={`${text} buttton`}/>
            </div>
            <div>
                <h4 className=" font-bold">
                    {text}
                </h4>
            </div>
        </button>
    </>
}