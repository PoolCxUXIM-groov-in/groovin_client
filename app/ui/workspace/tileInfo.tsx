import { snsIcons } from '../common/sns';
import Image from 'next/image';
import Toggle from '../common/toggle';

const dummyInfo: {
  [key: string]: Array<{
    id: string;
    title?: string;
    content: string | string[];
  }>;
} = {
  basic: [
    { id: 'birth', title: '생년월일', content: '2000.01.01' },
    { id: 'phone', title: '휴대폰', content: '010-1234-5678' },
    { id: 'email', title: '이메일', content: 'abcd1234@yonsei.ac.kr' },
    {
      id: 'department',
      title: '소속 대학 및 전공',
      content: '연세대학교 문과대학 심리학과',
    },
    { id: 'studentNum', title: '학번', content: '2020111001' },
  ],
  skill: [
    {
      id: 'hardSkill',
      title: '하드 스킬',
      content: ['Figma', 'Photoshop', 'Illustrator', 'R', 'Indesign', 'SPSS'],
    },
    {
      id: 'softSkill',
      title: '소프트 스킬',
      content: [
        '리더십',
        '시간 관리',
        '커뮤니케이션',
        '성실함',
        '책임감',
        '추진력',
      ],
    },
  ],
  career: [
    { id: 'default', content: ['프로젝트', '기간', '역할'] },
    { id: '1', content: ['통합디자인개론 팀플', '2021-1', '팀장'] },
  ],
  others: [
    { id: 'sns', title: 'SNS', content: ['youtube', 'instagram'] },
    { id: 'mbti', title: 'MBTI', content: 'ENFP' },
    { id: 'interest', title: '관심사', content: ['운동'] },
    {
      id: 'introduction',
      title: '자유로운 소개',
      content: '안녕하세요! 기획자 정그룹입니다. 잘부탁드립니다:)',
    },
  ],
};

export default function TitleInfo({
  activeTab,
  edit,
}: {
  activeTab: any;
  edit: boolean;
}) {
  //   const editConfig = { toggle: { component: true }, gap: {} };
  return (
    <ul className="flex flex-col gap-4 ">
      {activeTab === 'basic' &&
        dummyInfo[activeTab].map((line) => (
          <li
            className="flex flex-row gap-2 text-sm items-center"
            key={line.id}
          >
            <h3 className="font-semibold">{line.title}</h3>
            <p>{line.content}</p>
            {edit && <Toggle activated={false} />}
          </li>
        ))}
      {activeTab === 'skill' &&
        dummyInfo[activeTab].map((line) => (
          <li className="flex flex-col gap-2 text-sm" key={line.id}>
            <div className="flex flex-row items-center gap-7">
              <h3 className="font-semibold">{line.title}</h3>
              {edit && <Toggle activated={false} />}
            </div>

            <div className="flex flex-row flex-wrap gap-2">
              {typeof line.content !== 'string' &&
                line.content.map((skill) => (
                  <div className=" pt-1 pb-1 pl-3 pr-3 rounded-2xl border-[#f0f0f0] border-2">
                    {skill}
                  </div>
                ))}
            </div>
          </li>
        ))}
      {activeTab === 'career' &&
        dummyInfo[activeTab].map((line) => (
          <li className="flex flex-col gap-2 text-sm " key={line.id}>
            <div className="grid grid-cols-3 w-full  ">
              {typeof line.content !== 'string' &&
                line.content.map((content) =>
                  line.id === 'default' ? (
                    <h3 className="font-semibold">{content}</h3>
                  ) : (
                    <p className="">{content}</p>
                  ),
                )}
            </div>
          </li>
        ))}
      {activeTab === 'others' &&
        dummyInfo[activeTab].map((line) => (
          <li className="flex flex-col gap-2 text-sm " key={line.id}>
            {line.id === 'sns' && (
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{line.title}</h3>
                <div>
                  <ul className="flex flex-row justify-start gap-2">
                    {Object.keys(snsIcons).map((sns) => (
                      <li key={sns}>
                        <Image
                          className="w-[48] h-[48]"
                          src={'sns'}
                          width="48"
                          height="48"
                          alt="sns"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {(line.id === 'mbti' || line.id === 'interest') && (
              <div className="flex flex-row gap-2">
                <h3 className="font-bold">{line.title}</h3>
                <p>
                  {typeof line.content !== 'string'
                    ? String(...line.content)
                    : ''}
                </p>
              </div>
            )}

            {line.id === 'introduction' && (
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{line.title}</h3>
                <p>{line.content}</p>
              </div>
            )}
          </li>
        ))}
    </ul>
  );
}
