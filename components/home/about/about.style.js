import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  mainWrapper: {
    height: "100%",
  },
  container: {
    width: "100%",
    marginTop: 15,
  },
  GroupName: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 2,
    paddingHorizontal: SIZES.medium,
  },
  AboutTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  name: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 2,
  },
  GroupContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  GroupWrapper: {
    backgroundColor: COLORS.gray2,
    marginTop: SIZES.large,
    padding: SIZES.medium,
    borderRadius: 10,
  },

  devContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  devWrapper: {
    backgroundColor: COLORS.primary,
    padding: 15,

    borderRadius: 10,
  },

  dev1: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: SIZES.medium,
  },
  dev2: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    color: COLORS.white,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
