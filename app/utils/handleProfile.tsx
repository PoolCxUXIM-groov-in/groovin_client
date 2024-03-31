// 여기에 basic~others까지 정보를 state사용해서 모으고,
// 여기를 사용하는 쪽에서, 이들을 따로 처리할지 한방에 처리할지  정하게 해서 처리하자.

const getBasic = () => {};
const postBasic = () => {
  console.log('베이직');
};
export const handleBasicData = { get: getBasic, post: postBasic };

const getCareer = () => {};
const postCareer = () => {};
export const handleCareerData = { get: getCareer, post: postCareer };

const getOthers = () => {};
const postOthers = () => {};
export const handleOthersData = { get: getOthers, post: postOthers };

const getSkill = () => {};
const postSkill = () => {};
export const handleSkillData = { get: getSkill, post: postSkill };
