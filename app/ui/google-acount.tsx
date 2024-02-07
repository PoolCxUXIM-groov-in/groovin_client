import GoogleLogo from '../../public/icons/Google.svg'

import Image from 'next/image'
export default function GoogleAcount({ type }: { type: string }) {
  return (
    <>
      <button className=" gap-4 p-3 flex flex-row items-center h-[40px] bg-white shadow-sm shadow-[#BCC1C8]">
        <div>
          <Image
            src={GoogleLogo}
            alt="google logo"
            className="w-[18px] h-[18px]"
          />
        </div>
        <div>
          <p className={`text-sm `}>
            Google 계정으로 {type === 'signin' ? '로그인' : '가입'}
          </p>
        </div>
      </button>
    </>
  )
}
