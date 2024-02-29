const tabMenu = [
    { title: '기본 정보', key: 'basic' },
    { title: '스킬', key: 'skill' },
    { title: '이력', key: 'history' },
    { title: '기타 정보', key: 'etc' },
  ]

export default function Tab({size}:{size:"sm"|"lg"}){
    const sizeStyle=size==='lg'?'text-lg h-[43px]' : 'text-sm h-9'
    // h-[43px]
    return <>
              <ul className={` h-11 w-full flex flex-row justify-around gap-0  text-[#454545] font-bold ${sizeStyle} `}>
            {tabMenu.map((tab) => (
              <li key={tab.key} className={`w-[25%]`}> {/*w-[178px]*/}
                <div className=" h-full w-full flex flex-col items-center">
                  <h2>{tab.title}</h2>
                </div>
              </li>
            ))}
          </ul>
    </>
}