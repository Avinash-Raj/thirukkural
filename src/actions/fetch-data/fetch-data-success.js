// @flow

import { FETCH_DATA_SUCCESS } from "../../constants/action-types";

export const fetchDataSuccess = (info: Object) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { info }
});
