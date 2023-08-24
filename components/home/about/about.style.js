import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
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
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
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
