"use client";

import { AddSubBtn } from "@/components/button/add-sub-btn";
import Display from "@/components/button/display";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ButtonPage() {
  // a display: diplays our value
  // increment: increase the value
  // decrement: decrease the value
  // reset: reset value to 0.
  const [value, setValue] = useState(0);
  const [data, setData] = useState({});

  // setValue(function(currentValue) {
  //   return currentValue + 1;
  // });

  // function init() {
  //   setValue(10);
  //   setData({
  //     name: "Sofiyat",
  //   });
  // }
  // init();
  function reloadData() {
    // fetch('')
    // setNotification()
    // console.log("RELOADING....");
  }
  useEffect(() => {
    reloadData();
    const intervalId = setInterval(reloadData, 2000);
    // console.log("interval id", intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("VALUE CHANGED:", value);
    console.log("DATA CHANGED:", data);
  }, [value, data]);

  useEffect(function() {
    init();
    return () => {
      setValue(0);
    };
  }, []);

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
    <div id="buttonId" className="flex flex-1 justify-center items-center">
      <button
        onClick={function() {
          setData((data) => ({ ...data, name: "Abdus-Salam" }));
        }}
      >
        change name
      </button>
      <Link href="/">Go back</Link>
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
