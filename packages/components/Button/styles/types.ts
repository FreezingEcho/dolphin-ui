import type { ButtonSize, ButtonType, ButtonShape } from "../types";

export interface StyledButtonProps {
  shape?: ButtonShape;
  size?: ButtonSize;
  type?: ButtonType;
}

export const buttonExcludeProps = ["shape", "size", "type"];
