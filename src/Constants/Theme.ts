export const Theme = {
  colors: {
    blue: {
      blue100: "#007aff",
    },
  },
};

export type ThemeType = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
