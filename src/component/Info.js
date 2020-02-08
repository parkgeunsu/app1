import React,{useState} from 'react';

const Info = () => {
  const [value,setValue] = useState(30);
  return (
    <div>
      <input type="button" value="+" onClick={()=>setValue(value+1)} />
      <input type="button" value="-" onClick={()=>setValue(value-1)} />
      김세정 나이 {value}입니다.
    </div>
  )
}

export default Info;
