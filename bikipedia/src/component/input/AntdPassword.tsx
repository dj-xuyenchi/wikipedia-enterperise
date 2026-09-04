import { Input } from "antd";
import type { InputProps } from "antd";

export interface AntdPasswordProps extends InputProps {
  style?: React.CSSProperties;
}

const defaultCss: React.CSSProperties = {
  borderRadius: "0px !important",
};

const AntdPassword = ({ style, ...props }: AntdPasswordProps) => {
  return (
    <Input.Password
      {...props}
      style={{
        ...defaultCss,
        ...style,
      }}
    />
  );
};

export default AntdPassword;
