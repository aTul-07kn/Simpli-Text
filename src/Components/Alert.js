import React from 'react'

export default function Alert(props) {
  const capitalize=(text)=>{
    text=text.toLowerCase();
    const newText=text.charAt(0).toUpperCase()+text.slice(1);
    return(newText);
  }
  return (
    //is alert is not null then only the component will load, otherwise it will not load
    //if alert==true
    props.alert &&
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}: </strong>{props.alert.mesg}
    </div>
  )
}
