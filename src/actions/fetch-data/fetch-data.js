// @flow
import { fetchChapterGroups } from "../../services/http-requests";
import { fetchDataError } from "./fetch-data-error";
import { fetchDataRequest } from "./fetch-data-request";
import { fetchDataSuccess } from "./fetch-data-success";

export const getChapters = () => {
  return { type: "GET_CHAPTERS", payload: {} };
};

export const getChapterGroups = () => {
  return { type: "GET_CHAPTER_GROUPS", payload: {} };
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
