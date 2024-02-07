import GoogleAcount from '../ui/google-acount'

export default function Signin() {
  return (
    <>
      <div className=" text-[#54545E] h-screen w-screen grid grid-rows-5 grid-col-1">
        <div className="row-span-1 row-start-2  flex flex-col items-center justify-end gap-8">
          <div className="flex flex-col items-center justify-between gap-5">
            <h1 className="  font-[NanumGothic]  font-extrabold text-4xl">
              로그인하기
            </h1>
            <p className="text-sm font-[NanumGothic]">
              소셜 계정으로 로그인해보세요
            </p>
          </div>

          <GoogleAcount type={'signin'} />
        </div>
        <div className="   row-span-1  grid-[]  row-start-3 row-end-4 flex flex-col items-center justify-center ">
          <div className=" font-[NanumGothic] text-xs text-center w-[228px] h-[1px] bg-[#C5C5CB]">
            계정이 없으신가요?
          </div>
        </div>
        <div className="  row-span-1 row-start-4 flex felx-col items-start justify-center">
          <GoogleAcount type={'signup'} />
        </div>
      </div>
    </>
  )
}
