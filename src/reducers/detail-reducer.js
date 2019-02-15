// @flow

import detailsjson from "../data/detail.json";
import kuraljson from "../data/thirukkural.json";

initialState = {
  lang: "ta"
};

const getSection = sectionId => {
  // get specific section
  return detailsjson.details.section.detail[
    sectionId - 1 // since array index starts from 0
  ];
};

const getChapterGroup = (sectionId, chapterGroupNo) => {
  let cg;
  getSection(sectionId).chapterGroup.detail.forEach((chapterGroup, idx) => {
    if (chapterGroup.number === chapterGroupNo) {
      cg = chapterGroup;
    }
  });
  return cg;
};

const getChapterGroupNames = state => {
  key = state.lang == "en" ? "translation" : "name";
  let groups = [];
  getSection(state.sectionId).chapterGroup.detail.forEach((val, idx) => {
    groups.push({ name: val[key], number: val.number });
  });
  return groups;
};

const getKurals = state => {
  if (state.chapterNumber) {
    let range = state.chapterNumber.split("-");
    return kuraljson.kural.slice(range[0] - 1, range[1]);
  }
  return [];
};

const getChapterNames = state => {
  key = state.lang == "en" ? "translation" : "name";
  let chapters = [];
  console.log("on get chap names", state.chapterGroupName);
  getChapterGroup(
    state.sectionId,
    state.chapterGroupNumber
  ).chapters.detail.forEach(chapter => {
    chapters.push({
      name: chapter[key],
      number: chapter.number,
      kuralRange: chapter.start + "-" + chapter.end
    });
  });
  return chapters;
};

const detailReducer = (state = initialState, action) => {
  let clonedState = { ...state };
  switch (action.type) {
    case "GET_CHAPTER_GROUPS": {
      return {
        ...clonedState,
        chapterGroups: getChapterGroupNames(clonedState)
      };
    }
    case "GET_CHAPTERS": {
      return {
        ...clonedState,
        chapters: getChapterNames(clonedState)
      };
    }
    case "GET_KURALS": {
      return {
        ...clonedState,
        kurals: getKurals(clonedState)
      };
    }
    case "UPDATE_LANGUAGE": {
      return {
        lang: action.payload.language
      };
    }
    case "UPDATE_SECTION_ID": {
      return {
        ...clonedState,
        sectionId: action.payload.sectionId
      };
    }
    case "UPDATE_CHAPTER_GROUP_NO_NAME": {
      return {
        ...clonedState,
        chapterGroupNumber: action.payload.chapterGroupNumber,
        chapterGroupName: action.payload.chapterGroupName
      };
    }
    case "UPDATE_CHAPTER_NO_NAME": {
      return {
        ...clonedState,
        chapterNumber: action.payload.chapterNumber, // gets kural range 1-10
        chapterName: action.payload.chapterName
      };
    }
    default: {
      return state;
    }
  }
};

export default detailReducer;
