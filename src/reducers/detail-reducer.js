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

const getChapterGroups = (state, sectionId) => {
  key = state.lang == "en" ? "translation" : "name";
  let groups = [];
  initialState.details.section.detail[
    sectionId - 1 // since array index starts from 0
  ].chapterGroup.detail.forEach((val, idx) => {
    groups.push(val[key]);
  });
  return groups;
};

const detailReducer = (state = initialState, action) => {
  let clonedState = { ...state };
  // clonedState.lang = state.lang;
  switch (action.type) {
    case "GET_CHAPTER_GROUPS": {
      // action.payload.sectionId
      return {
        lang: clonedState.lang,
        chapterGroups: getChapterGroups(clonedState, action.payload.sectionId)
      };
    }
    default: {
      return state;
    }
  }
};

export default detailReducer;
