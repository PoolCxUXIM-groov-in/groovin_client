import Image from 'next/image';
import AuthContext from './ui/signin/authcontext';
import GoogleAcount from './ui/signin/google-acount';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-24 gap-3">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-amber-300 lg:p-4 font-bold font-Pretendard ">
          로그인 관련 api가 나오면 변경될 페이지입니다
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="rounded-md bg-emerald-200 p-4">
          <Link className="font-bold font-Pretendard" href={'/main/profile'}>
            프로필 페이지로
          </Link>
        </div>
        <div className="rounded-md bg-emerald-200 p-4">
          <Link className="font-bold font-Pretendard" href={'/main/123'}>
            임의 팀 페이지로
          </Link>
        </div>
        <div className="rounded-md bg-emerald-200 p-4">
          <Link className="font-bold font-Pretendard" href={'/signin'}>
            로그인 페이지로
          </Link>
        </div>
        <div className="rounded-md bg-emerald-200 p-4">
          <Link className="font-bold font-Pretendard" href={'/signup'}>
            회원가입 페이지로
          </Link>
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
    </main>
  );
}
