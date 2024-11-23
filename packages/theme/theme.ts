import colors from "./colors";

export type ColorThemeType = "primary" | "default" | "warning" | "danger";

const theme = {
  colors: {
    // colors.ts的key
    primary: colors.blue,
    default: colors.grey,
    warning: colors.yellow,
    danger: colors.red,
  },
};

export default theme;
