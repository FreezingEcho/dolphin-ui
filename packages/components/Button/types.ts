import { CSSProperties, MouseEvent, ReactNode } from "react";

/**
 * - default 默认按钮
 * - primary 主按钮
 * - warning 警告按钮
 * - danger 危险按钮
 * - dash 虚线按钮
 * - text 文本按钮
 * - link 链接按钮
 */
export type ButtonType =
  | "default"
  | "primary"
  | "dash"
  | "warning"
  | "danger"
  | "text"
  | "link";
/**
 * - default 默认
 * - circle 圆形按钮
 * - round 椭圆形按钮
 *
 */
export type ButtonShape = "default" | "circle" | "round";

/**
 * - 按钮的尺寸
 */
export type ButtonSize = "large" | "middle" | "small";

export interface ButtonProps {
  children?: ReactNode;
  /**
   * - 按钮形状
   */
  shape?: ButtonShape;
  /**
   * - 按钮尺寸
   */
  size?: ButtonSize;

  /**
   * - 按钮类型
   */
  type?: ButtonType;

  /**
   * - 是否为禁用状态
   */
  disabled?: boolean;

  /**
   * - 点击后触发的回调
   * @param e 事件对象
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => unknown;

  /**
   * - 自定义样式
   */
  style?: CSSProperties;
}
