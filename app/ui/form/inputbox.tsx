import { inter } from '@/app/ui/font/font'

export interface inputBoxType {
  type: 'text' | 'number' | 'email' | 'url' | 'tel' | 'date'
  placeholder: string
  defaultValue?: string | ''
  dataName: string
  title: string
  description?:string
}

export default function InputBox({
  // 다른 조건도 받아야 함. 학번이나 폰번호 자리수같은거, 스킬은 ","로 구분하는거(regexp), MBTI자리수, sns주소 형식, pattern속성 등 사용.
  type,
  placeholder,
  defaultValue,
  dataName,
  title,
  description
}: inputBoxType) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className={`${inter.className} flex flex-col gap-5 `} htmlFor={dataName}>
          <h3>{title}</h3>
          {description&&<p className=' text-sm   text-[#9999A2]'>{description}</p>}
        </label>
      </div>
      <input
        id={dataName}
        name={dataName}
        className=" rounded-md text-[$454545] bg-[#F5FFFA] font-bold h-[56px] w-[340px] p-6 focus:bg-[#FFFFFF]  outline-[#28b070]"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue || ''}
      />
    </div>
  )
}
