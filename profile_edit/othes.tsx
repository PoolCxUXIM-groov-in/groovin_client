'use client'

import React, { useState } from 'react'
import Youtube from '@/public/icons/sns-youtube.svg'
import Instagram from '@/public/icons/sns-instagram.svg'
import Facebook from '@/public/icons/sns-facebook.svg'
import Linkedin from '@/public/icons/sns-linkedin.svg'
import Discord from '@/public/icons/sns-discord.svg'
import Behance from '@/public/icons/sns-behance.svg'
import Github from '@/public/icons/sns-github.svg'
import InputBox from '../form/inputbox'
import { inter } from '@/app/ui/font/font'
import Image from 'next/image'

import ToggleButton from '../form/toggle'


const snsIcons=[Youtube, Instagram, Facebook, Linkedin, Discord, Behance, Github]


export default function OthersForm() {

    return (
        <div>
            <div className='w-full h-[300px] flew flex-col space-y-10 text-[13px]'>
                <div className='flex flex-row items-start w-full gap-1 h-43.97'>
                    <div  className='h-[30px] flex justify-center items-center'>
                        <h1>SNS</h1>
                    </div>
                    <div>
                        <ul className='flex flex-row justify-start gap-3'>
                            {snsIcons.map(sns=><li  key="sns"><Image className='w-[48] h-[48]' src={sns} width="30" height="30" alt="sns"/></li>)}
                        </ul>
                    </div>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                        

                </div>
                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        MBTI
                    </h1>
                    <h1>
                        ENFP
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>
                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        관심사
                    </h1>
                    <h1>
                        운동
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                    
                </div>
                <div className='flex flex-row items-start w-full gap-1'>
                    <h1>
                        자유로운 소개
                    </h1>
                    <p className='pl-3 pr-1'>공개</p>
                    <ToggleButton/>
                </div>
                <p>
                    안녕하세요! 최그룹입니다 :&#41; 제가 이런 팀 프로젝트는 처음이라 많이 부족하겠지만, 그래도 많이 배워갈 수 있도록 열심히 참여하겠습니다. 잘 부탁드립니다!!
                </p>
  
            </div>
        </div>

    )
    }
