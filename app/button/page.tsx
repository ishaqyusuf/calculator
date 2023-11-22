"use client";

import { AddSubBtn } from "@/components/button/add-sub-btn";
import Display from "@/components/button/display";
import { useState } from "react";

export default function ButtonPage() {
  // a display: diplays our value
  // increment: increase the value
  // decrement: decrease the value
  // reset: reset value to 0.
  const [value, setValue] = useState(0);
  setValue(function(currentValue) {
    return currentValue + 1;
  });

  const [data, setData] = useState({});
  //   const [name,setName] = useState()
  // value = '';

  //   document.getElementById('')?.inn

  //   function subFn() {
  //     if (value == 0) return;
  //     setValue(function(currentValue) {
  //       return currentValue - 1;
  //     });
  //   }
  //   function addFn() {
  //     setValue(value + 1);
  //   }
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex items-center space-x-2">
        <AddSubBtn
          setValue={setValue}
          className="bg-orange-600"
          disabled={value == 0}
        >
          -
        </AddSubBtn>
        <Display>{value}</Display>
        <AddSubBtn
          setValue={setValue}
          className="bg-green-600"
          disabled={value == 100}
        >
          +
        </AddSubBtn>
      </div>
      <div className=""></div>
    </div>
  );
}
