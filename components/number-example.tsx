"use client";

export default function NumberExample({}) {
  let numbs = [1, 2, 3, 4, 5, 6];
  numbs = numbs.map((num) => num * 2);
  // [2,4,6,8,10,12]
  // <NumArray numbers={[1,2,3]} />
  function NumArray({ numbers }) {
    return numbers.map((num) => (
      <Potatoes onClick={() => numpad(num)}>{num}</Potatoes>
    ));
  }
  return (
    <div>
      <div>
        <NumArray numbers={[7, 8, 9]} />
        {/* <Num number={7}/>
        <Num number={8}/>
        <Num number={9}/> */}
      </div>
      <div>
        <NumArray numbers={[4, 5, 6]} />
        {/* <Potatoes onClick={() => numpad(7)}>7</Potatoes>
        <Potatoes onClick={() => numpad(7)}>7</Potatoes>
        <Potatoes onClick={() => numpad(7)}>7</Potatoes>
        <Potatoes onClick={() => numpad(7)}>7</Potatoes> */}
      </div>
      <div>
        <NumArray numbers={[1, 2, 3]} />
        {/* <Potatoes onClick={() => numpad(7)}>7</Potatoes>
        <Potatoes onClick={() => numpad(7)}>7</Potatoes>
        <Potatoes onClick={() => numpad(7)}>7</Potatoes>
        <Potatoes onClick={() => numpad(7)}>7</Potatoes> */}
      </div>
    </div>
  );
}
