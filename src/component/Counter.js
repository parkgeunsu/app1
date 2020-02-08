import React,{useState} from 'react';

const Counter = ({name,age}) => {
  const [value,setValue] = useState(age);
  return (
    <div>
      <input type="button" value="+" onClick={()=>setValue(value+1)} />
      <input type="button" value="-" onClick={()=>setValue(value-1)} />
      {name} 나이 {value}입니다.
    </div>
  )
}
Counter.defaultProps = {name:''}
export default Counter;
