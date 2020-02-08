import React,{Component,useState} from 'react';

const Info = () => {
  const [value,setValue] = useState(0);
  return (
    <div>
      <input type="button" value="+" onClick={()=>setValue(value+1)} />
      <input type="button" value="-" onClick={()=>setValue(value-1)} />
      카운터는 {value}입니다.
    </div>
  )
}

export default Info;
