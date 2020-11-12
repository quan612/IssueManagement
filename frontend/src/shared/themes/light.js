import { css } from "styled-components";

export default {
  colors: {
    primary: "#0052cc",
    danger: "#E13C3C",
    background: "#fff",
    backgroundMedium: "#dfe1e6",
    backgroundLight: "#e5e5f1",
    borderNotFocused: "#264a54",
    borderSecondary: "#162B31",

    textMedium: "#5E6C84",
    textLight: "#8993a4",
    textLink: "#0052cc",
    textPrimary: "#172b4d",
    textSecondary: "#6e6e6e",
    textWhite: "#FFF",

    backgroundDarkPrimary: "#0747A6",

    backgroundLightest: "#F4F5F7",
    backgroundLightPrimary: "#D2E5FE",
    backgroundLightSuccess: "#E4FCEF",

    borderLightest: "#dfe1e6",
    borderLight: "#C1C7D0",
    borderInputFocus: "#4c9aff",
  },

  card: {
    background: "#fff",
    title: "#5E6C84",
    description: "#547784",
  },

  list: {
    background: "#f4f4f4",
    title: "#42526E", //#0AC6E0
    subtitle: "#8993a4",
  },

  input: {
    background: "#fff", //F4F5F7
    textColor: "#303030",
    placeholder: "#aba6c3",
    borderColor: "#d2d6dc",
  },

  mixin: {
    boxShadowMedium: css`
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    `,
    boxShadowDropdown: css`
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
    `,
    truncateText: css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `,
    clickable: css`
      cursor: pointer;
      user-select: none;
    `,
    hardwareAccelerate: css`
      transform: translateZ(0);
    `,
    cover: css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    `,
    placeholderColor: (colorValue) => css`
      ::-webkit-input-placeholder {
        color: ${colorValue} !important;
        opacity: 1 !important;
      }
      :-moz-placeholder {
        color: ${colorValue} !important;
        opacity: 1 !important;
      }
      ::-moz-placeholder {
        color: ${colorValue} !important;
        opacity: 1 !important;
      }
      :-ms-input-placeholder {
        color: ${colorValue} !important;
        opacity: 1 !important;
      }
    `,
    scrollableY: css`
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    `,
  },
};
