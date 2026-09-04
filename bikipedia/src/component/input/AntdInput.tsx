import { Input } from "antd";
import type { InputProps } from "antd";

export interface AntdInputProps extends InputProps {
  style?: React.CSSProperties;
}

const defaultCss: React.CSSProperties = {
  borderRadius: "0px !important",
};

const AntdInput = ({ style, ...props }: AntdInputProps) => {
  return (
    <Input
      {...props}
      style={{
        ...defaultCss,
        ...style,
      }}
    />
  );
};

export default AntdInput;
