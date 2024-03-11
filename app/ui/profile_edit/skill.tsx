'use client'

import React, { useState } from 'react'

import ToggleButton from '../form/toggle'
import Button from '../form/button'

export default function OthersForm() {

    return (
        <div>
            <div className='w-full h-[300px] flew flex-col space-y-10 text-[13px]'>
                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        하드 스킬
                    </h1>

                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    

                </div>
                <div className='content-start'>
                    <Button label="Figma" />
                    <Button label="Photoshop" />
                    <Button label="Illustrator" />
                    <Button label="R" />
                    <Button label="Indesign" />
                    <Button label="SPSS" />
                </div>
                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        소프트 스킬
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>
                <div className='content-start'>
                    <Button label="리더십" />
                    <Button label="시간 관리" />
                    <Button label="커뮤니케이션" />
                    <Button label="성실함" />
                    <Button label="책임감" />
                    <Button label="추진력" />
                    <Button label="아이디어" />
                    <Button label="꼼꼼함" />
                    
                </div>

            </div>
        </div>

    )
    }
