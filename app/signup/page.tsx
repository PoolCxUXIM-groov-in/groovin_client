import InputBox, { inputBoxType } from '../ui/form/inputbox'
import SplitLine from '../ui/form/splitline'
import BasicForm from '../ui/signup/basic'
import CareerForm from '../ui/signup/career'
import OthersForm from '../ui/signup/othes'
import SkillForm from '../ui/signup/skill'



const tabMenu = [
  { title: '기본 정보', key: 'basic' },
  { title: '스킬', key: 'skill' },
  { title: '이력', key: 'history' },
  { title: '기타 정보', key: 'etc' },
]

export default function SignUp() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <main style={{"grid-template-rows":"1fr 0.5fr 4fr 0.7fr"}} className="bg-white shadow-md w-[808px] p-[48px] h-[864px] flex flex-col grid justify-center items-center gap-7">
        <section className=" w-full flex flex-col items-start gap-6">
          <h1 className=" text-2xl font-bold text-[#454545]">
            프로필 생성하기
          </h1>
          <div className="text-[#9999A2]">
            <p>그루빙에서 사용할 기본 프로필을 생성해주세요!</p>
            <p>
              생성한 프로필은 메인 페이지 &gt; 나의 프로필에서 언제든지 수정할
              수 있어요.
            </p>
          </div>
        </section>
        <div>
          <ul className="  h-[43px] w-full flex flex-row gap-0 text-[#454545] font-bold text-lg ">
            {tabMenu.map((tab) => (
              <li key={tab.key}>
                <div className=" h-full w-[178px] flex flex-col items-center">
                  <h2>{tab.title}</h2>
                </div>
              </li>
            ))}
          </ul>
          <SplitLine />
        </div>
        
        <div className='h-full flex flex-col justify-start'/*' pt-7 pb-7'*/>
          {/* <BasicForm /> */}
          {/* <SkillForm/> */}
          {/* <CareerForm/> */}
          <OthersForm/>
        </div>
          
        

        <div className='flex flex-col items-start w-full gap-5'>
          <SplitLine />
          <button>다음 -&gt;</button>
        </div>
        
      </main>
    </div>
  )
}
