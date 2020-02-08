import React,{Component} from 'react';
import Counter from './Counter';

class Info extends Component{
  render(){
    return (
      <div>
        <Counter name="박근수" age="41"/>
        <Counter name="김세정" age="30"/>
      </div>
    )
  }
}

export default Info;
