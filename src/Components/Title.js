import React from 'react';
import {H1} from './ComStyle'

const Title = (props) =>{
  return(
      <H1 className='text-center'>{props.name} <span className='text-info'>{props.title}</span></H1>
  )
}

export default Title;
