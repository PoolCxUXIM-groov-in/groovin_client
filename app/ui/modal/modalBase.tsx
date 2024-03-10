import React from "react";
import PictureModal from "./pictureModal";
import { Dispatch, SetStateAction } from "react";

export default function ModalBase({children, onModalClick}:{children:React.ReactElement, onModalClick:Dispatch<SetStateAction<"hidden" | "">>}){
    return <div id="modalBack" onClick={(e)=>{ onModalClick("hidden")}}   className=" left-0 top-0  bg-[rgba(0,0,0,0.5)] backdrop-blur-lg  flex flex-col justify-center items-center absolute   w-full h-full ">
        <div onClick={(e)=>{e.stopPropagation()}} className="  rounded-lg backdrop-opacity-20 bg-white w-[600px] h-fit p-10  ">
            {children}
        </div>
    </div>
}