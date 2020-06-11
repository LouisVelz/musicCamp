import React from 'react'

function Dummy (props) {
  if(props.currentUser){
    return <div className='logged-in'></div>
  }else{
    return <div className='not-logged-in'></div>
  }

}

export default Dummy;