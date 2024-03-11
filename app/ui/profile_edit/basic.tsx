'use client'

import React, { useState } from 'react'

import ToggleButton from '../form/toggle'




export default function BasicForm() {

    return (
        <div>
            <div className='w-full h-[300px] flew flex-col space-y-10 text-[13px]'>

                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        생년월일
                    </h1>
                    <h1>
                        2000.01.01
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    

                </div>

                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        휴대폰
                    </h1>
                    <h1>
                        010-1234-5678
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>

                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        이메일
                    </h1>
                    <h1>
                        abcd@yonsei.ac.kr
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>

                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        소속 대학 및 전공
                    </h1>
                    <h1>
                        연세대학교 문과대학 심리학과
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>

                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        학번
                    </h1>
                    <h1>
                        2020111001
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>
                
            </div>
        </div>

    )
    }
