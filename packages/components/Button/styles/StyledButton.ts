import styled, { css } from "styled-components";
import { theme } from "@dolphin-ui/theme";
import { buttonExcludeProps, StyledButtonProps } from "./types";
import { ButtonShape, ButtonSize, ButtonType } from "../types";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !buttonExcludeProps.includes(prop),
})<StyledButtonProps>`
  outline: none;
  transition: all ease 0.1s;
  cursor: pointer;
  &:active {
    transform: translateY(1px) scale(1.05);
  }

  ${({ size = "middle" }) => getButtonSize(size)}
  ${({ type = "default" }) => getButtonType(type)}
  ${({ shape = "default", size = "middle" }) => getButtonShape(shape, size)}
`;
export default StyledButton;

// 按钮尺寸
function getButtonSize(size: ButtonSize) {
  switch (size) {
    case "large":
      return css`
        padding: 0.9rem 2.2rem;
      `;
    case "middle":
      return css`
        padding: 0.6rem 1.6rem;
      `;
    case "small":
      return css`
        padding: 0.3rem 1.4rem;
      `;
  }
}

// 按钮主题色
function getButtonType(type: ButtonType) {
  switch (type) {
    case "primary":
    case "warning":
    case "danger":
      return css`
        border: 0.1rem solid ${theme.colors[type]._500};
        background-color: ${theme.colors[type]._500};
        color: #fff;
        &:hover {
          border: 0.1rem solid ${theme.colors[type]._400};
        }
        &:active {
          background-color: ${theme.colors[type]._600};
        }
      `;

    case "default":
      return css`
        border: 0.1rem solid ${theme.colors[type]._200};
        background-color: #fff;
        &:hover {
          border: 0.1rem solid ${theme.colors[type]._400};
        }
      `;

    case "link":
      return css`
        border: none;
        color: ${theme.colors.primary._500};
        background-color: #fff;
        &:active {
          color: ${theme.colors.primary._700};
        }
      `;
    case "dash":
      return css`
        border: 0.1rem dashed ${theme.colors.default._200};
        background-color: #fff;
        &:hover {
          border: 0.1rem dashed ${theme.colors.default._400};
        }
      `;
    case "text":
      return css``;
  }
}

// 按钮形状
function getButtonShape(shape: ButtonShape, size: ButtonSize) {
  switch (shape) {
    case "default":
      return css`
        border-radius: 0.5rem;
      `;
    case "round":
      return css`
        border-radius: 1rem;
      `;
    case "circle":
      return css`
        padding: 3px;
        border-radius: 50%;
        ${getCircleButtonSize(size)}
      `;
  }
}

// 圆形按钮的尺寸
function getCircleButtonSize(size: ButtonSize) {
  switch (size) {
    case "large":
      return css`
        width: 4rem;
        height: 4rem;
      `;
    case "middle":
      return css`
        width: 3.2rem;
        height: 3.2rem;
      `;
    case "small":
      return css`
        width: 2.4rem;
        height: 2.4rem;
      `;
  }
}
