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
  getSection(sectionId).chapterGroup.detail.forEach((chapterGroup, idx) => {
    if (chapterGroup.number === chapterGroupNo) {
      return chapterGroup;
    }
  });
};

const getChapterGroupNames = state => {
  key = state.lang == "en" ? "translation" : "name";
  let groups = [];
  getSection(state.sectionId).chapterGroup.detail.forEach((val, idx) => {
    groups.push({ name: val[key], number: val.number });
  });
  return groups;
};

const getChapterNames = (state, sectionId, chapterGroupNo) => {
  key = state.lang == "en" ? "translation" : "name";
  let chapters = [];
  // getSection(sectionId).chapterGroup.detail.forEach((chapterGroup, idx) => {
  //   if (chapterGroup.number === chapterGroupNo) {
  //     chapterGroup.chapters.detial.forEach(chapter => {
  //       chapters.push(chapter[key]);
  //     });
  //   }
  // });
  getChapterGroup(sectionId, chapterGroupNo).chapters.forEach.forEach(
    chapter => {
      chapters.push({ name: chapter[key], number: chapter.number });
    }
  );
  return chapters;
};

const detailReducer = (state = initialState, action) => {
  let clonedState = { ...state };
  // clonedState.lang = state.lang;
  switch (action.type) {
    case "GET_CHAPTER_GROUPS": {
      // action.payload.sectionId
      return {
        ...clonedState,
        chapterGroups: getChapterGroupNames(
          clonedState
          // action.payload.sectionId
        )
      };
    }
    case "GET_CHAPTERS": {
      return {
        ...clonedState,
        chapters: getChapterNames(
          clonedState,
          action.payload.sectionId,
          action.payload.chapterGroupNo
        )
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
