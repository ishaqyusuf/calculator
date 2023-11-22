import { cn } from "@/utils/cn";
import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

interface AddSubBtnInterface {
  onClick?: () => void;
  className?: string;
  children: any;
  disabled?: boolean;
  setValue: Dispatch<SetStateAction<number>>;
}
export function AddSubBtn({
  className,
  children,
  disabled,
  setValue,
}: AddSubBtnInterface) {
  function __onClick(isMinus: boolean) {
    setValue(function(currentValue) {
      let addition = 1;
      if (isMinus) {
        if (currentValue == 0) addition = 0;
        else addition = -1;
      }
      return currentValue + addition;
    });
  }
  return (
    <button
      disabled={disabled}
      onClick={function(e) {
        __onClick(children == "-");
      }}
      className={cn("p-2 px-4 border shadow rounded-lg text-white", className)}
    >
      {children}
    </button>
  );
}
