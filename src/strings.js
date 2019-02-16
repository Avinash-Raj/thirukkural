import LocalizedStrings from "react-native-localization";

let strings = new LocalizedStrings({
  ta: {
    appname: "திருக்குறள்",
    araththuppaal: "அறத்துப்பால்",
    porutpaal: "பொருட்பால்",
    Kaamaththuppaal: "காமத்துப்பால்",
    section: "பால்",
    chapters: "அதிகாரம்",
    tamil: "தமிழ்",
    writers: {
      mv: "மு.வரதராசனார்",
      sp: "சாலமன் பாப்பையா",
      mk: "மு.கருணாநிதி",
      pari: "பரிமேலழகர்",
      munu: "வீ.முனிசாமி",
      mani: "மணக்குடவர்"
    }
  },
  en: {
    appname: "Thirukkural",
    araththuppaal: "Virtue",
    section: "section",
    chapters: "chapters",
    porutpaal: "Wealth",
    Kaamaththuppaal: "Love",
    tamil: "tamil"
  }
});

export default strings;
