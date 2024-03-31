'use client';

const tabMenu = [
  { title: '기본 정보', key: 'basic' },
  { title: '스킬', key: 'skill' },
  { title: '이력', key: 'career' },
  { title: '기타 정보', key: 'others' },
];

export default function Tab({
  size,
  onTab,
  activeTab,
}: {
  size: 'sm' | 'lg';
  onTab: any;
  activeTab: 'basic' | 'skill' | 'career' | 'others';
}) {
  const sizeStyle = size === 'lg' ? 'text-lg h-[43px]' : 'text-sm h-9';

  // h-[43px]
  return (
    <div className="">
      <ul
        className={` cursor-pointer h-11  w-full flex flex-row justify-around   text-[#454545] font-bold ${sizeStyle}  `}
      >
        {tabMenu.map((tab) => {
          const activeTextColor = tab.key === activeTab ? 'text-[#28b070]' : '';
          return (
            <li
              key={tab.key}
              className={`  w-[25%] ${activeTextColor} flex flex-col`}
              onClick={() => {
                onTab(tab.key);
              }}
            >
              <div className=" h-full w-full flex flex-col items-center">
                <h2>{tab.title}</h2>
              </div>
              {tab.key === activeTab && (
                <div className="  bg-[#28b070] h-1"></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
