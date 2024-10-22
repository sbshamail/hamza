import { ClassNameTypes } from "@/utils/interfaces/commonTypes";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

interface Props extends ClassNameTypes {
  checked?: boolean;
  onChange?: (e: boolean) => void;
}
const Checkbox: FC<Props> = ({ checked = false, onChange, className }) => {
  const [check, setChecked] = useState<boolean>();
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <div>
      <input
        className={`cursor-pointer checkbox ${className} `}
        type="checkbox"
        checked={checked}
        onChange={() => {
          onChange && onChange(!checked);
        }}
      />
    </div>
  );
};

export default Checkbox;
