// @flow

import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS
} from "../constants/action-types";
import detailsjson from "../data/detail.json";

initialState = {
  info: {},
  lang: "ta",
  isLoading: false,
  error: false,
  details: detailsjson.details
};

const getSection = sectionId => {
  // get specific section
  return initialState.details.section.detail[
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

const getChapterNames = state => {
  key = state.lang == "en" ? "translation" : "name";
  let chapters = [];
  getChapterGroup(
    state.sectionId,
    state.chapterGroupNumber
  ).chapters.detail.forEach(chapter => {
    chapters.push({ name: chapter[key], number: chapter.number });
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
      console.log("on get chapters");
      console.log(clonedState.sectionId);
      console.log(clonedState.chapterGroupNumber);
      return {
        ...clonedState,
        chapters: getChapterNames(clonedState)
      };
    }
    case "UPDATE_SECTION_ID": {
      return {
        ...clonedState,
        sectionId: action.payload.sectionId
      };
    }
    case "UPDATE_CHAPTER_GROUP_NO": {
      return {
        ...clonedState,
        chapterGroupNumber: action.payload.chapterGroupNumber
      };
    }
    case "UPDATE_CHAPTER_NO": {
      return {
        ...clonedState,
        chapterNumber: action.payload.chapterNumber
      };
    }
    default: {
      return state;
    }
  }
};

export default detailReducer;
