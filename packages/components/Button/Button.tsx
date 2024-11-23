import StyledButton from "./styles/StyledButton";

import type { ButtonProps } from "./types";

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
