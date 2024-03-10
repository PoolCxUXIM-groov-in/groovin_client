export default function SideMainButton({text, onTeamSpaceClick}:{text:string, onTeamSpaceClick:()=>void}){
    return <button onClick={onTeamSpaceClick} className=" text-sm  rounded-md w-[107px] h-[32px] bg-white text-[#54D99B] border-[#54D99B] border-2">{text}</button>
}