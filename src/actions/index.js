// @flow
// actions
// An action is a plain object describing what happened

export const getChapters = () => {
  return { type: "GET_CHAPTERS", payload: {} };
};

export const getChapterGroups = () => {
  return { type: "GET_CHAPTER_GROUPS", payload: {} };
};

export const getKurals = () => {
  return { type: "GET_KURALS", payload: {} };
};

export const updateSectionId = sectionId => {
  return {
    type: "UPDATE_SECTION_ID",
    payload: { sectionId: sectionId }
  };
};

export const updateChapterGroupNoAndName = (gno, gname) => {
  return {
    type: "UPDATE_CHAPTER_GROUP_NO_NAME",
    payload: { chapterGroupNumber: gno, chapterGroupName: gname }
  };
};

export const updateChapterNoAndName = (cno, cname) => {
  return {
    type: "UPDATE_CHAPTER_NO_NAME",
    payload: { chapterNumber: cno, chapterName: cname }
  };
};

export const updateLanguage = lang => ({
  type: "UPDATE_LANGUAGE",
  payload: { language: lang }
});
