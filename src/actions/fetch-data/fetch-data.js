// @flow
import { fetchChapterGroups } from "../../services/http-requests";
import { fetchDataError } from "./fetch-data-error";
import { fetchDataRequest } from "./fetch-data-request";
import { fetchDataSuccess } from "./fetch-data-success";

export const getChapters = (chapterGroupId, dispatch) => {
  return { type: "GET_CHAPTERS", payload: fetchData() };
};

export const getChapterGroups = (sectionId, dispatch) => {
  return { type: "GET_CHAPTER_GROUPS", payload: { sectionId: sectionId } };
};
