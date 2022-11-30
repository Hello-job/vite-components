import React, { forwardRef } from "react";
import { Input as AntdInput, InputProps } from "antd";

import "./style/index.less";
import { prefixCls } from "../utils/config";

const ClassPrefix = `${prefixCls}-widget-input`;

interface Props extends InputProps {
  [index: string]: any;
}

const Comp: React.FC<Props> = forwardRef<AntdInput, Props>((props, ref) => (
  <AntdInput
    {...props}
    className={`${ClassPrefix} ${props.className}`}
    ref={ref}
  ></AntdInput>
));

Comp.defaultProps = {};

export default React.memo(Comp);
