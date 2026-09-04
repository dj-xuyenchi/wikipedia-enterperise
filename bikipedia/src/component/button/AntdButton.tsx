import { Button, ButtonProps } from "antd";

export interface AntdButtonProps extends ButtonProps {
  style?: React.CSSProperties;
}

const defaultCss: React.CSSProperties = {
  borderRadius: "0px !important",
};

const AntdButton = ({ style, ...props }: AntdButtonProps) => {
  return (
    <Button
      {...props}
      style={{
        ...defaultCss,
        ...style,
      }}
    />
  );
};

export default AntdButton;
