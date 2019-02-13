// @flow

// import config from '../lib/config';

// export const fetchWeatherData = () => (
//   fetch(config.API_URL)
//     .then((res) => res.json())
//     .then((data) => data.currently)
//     .catch((err) => err)
// );
// import json
export const fetchChapterGroups = sectionId => {
  switch (sectionId) {
    case 1:
      return ["chapterg 1", "chapg 1"];
    case 2:
      return ["chapterg 2", "chapg 2"];
    case 3:
      return ["chapterg 3", "chapg 3"];
  }
  // return { chapterGroups: ["how r u"] };
};
