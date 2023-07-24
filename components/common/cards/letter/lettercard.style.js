import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

/*
   width: "42%",
    display: "flex",
    justifyContent: "center",

    margin: SIZES.small,
    backgroundColor: selectedWord === item.braille_id ? "#FFF" : COLORS.primary,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
*/

const styles = StyleSheet.create({
  container: (selectedWord, item) => ({
    paddingHorizontal: 8,
    paddingVertical: 10,

    borderRadius: SIZES.medium,
    backgroundColor: selectedWord === item.braille_id ? "#FFF" : COLORS.primary,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.word_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  brailleText: (selectedword, item) => ({
    fontSize: SIZES.xxxxLarge,
    textAlign: "center",
    backgroundColor: "green",
    paddingVertical: 0,
    color: selectedword === item.braille_id ? COLORS.primary : "#FFF",
  }),

  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
