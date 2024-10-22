import React, { FC } from "react";
import { Icon, IconProps } from "@iconify/react";

interface PropsType extends IconProps {
  icon: string;
  className?: React.ComponentProps<"div">["className"];
  fontSize?: string;
}
const Iconify: FC<PropsType> = ({ icon, className, ...rest }) => {
  return (
    <Icon
      icon={icon}
      {...rest}
      className={`cursor-pointer opacity-90 hover:opacity-100  ${className} `}
    />
  );
};

export default Iconify;
