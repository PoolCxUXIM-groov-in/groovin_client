'use client'

import React, { useState } from 'react'

import ToggleButton from '../form/toggle'




export default function CareerForm() {

    return (
        <div>
            <div className='w-full h-[300px] flew flex-col space-y-10 text-[13px]'>

                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        프로젝트
                    </h1>    
                </div>

                <div className='flex flex-row justify-between'>
                    <h1>
                        통합디자인개론 팀플
                    </h1>
                    <ToggleButton/>
                    
                </div>

                <div className='flex flex-row justify-between'>
                    <h1>
                        디자인리서치 팀플
                    </h1>
                    <ToggleButton/>
                    
                </div>
            </div>
        </div>

    )
    }
