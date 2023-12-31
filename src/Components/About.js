// import React, { useState } from 'react'

export default function About(props) {

    //for DARK MODE button in about section

//   const handleMode=()=>{
//     if(myStyle.color==="#282828"){
//         setMyStyle({
//             backgroundColor:"#282828",
//             color:"#f8f8ff"
//         })
//         setMyBtnStyle({
//             backgroundColor:"#f8f8ff",
//             color:"#282828"
//         })
//         setToggleBtn("Light Mode")
//     }
//     else{
//         setMyStyle({
//             backgroundColor:"#f8f8ff",
//             color:"#282828"
//         })
//         setMyBtnStyle({
//             backgroundColor:"#282828",
//             color:"#f8f8ff"
//         })
//         setToggleBtn("Dark Mode")
//     }
//   }
//   const[myStyle,setMyStyle]=useState({
//     backgroundColor:"#f8f8ff",
//     color:"#282828"
//   })

//   const[myBtnStyle,setMyBtnStyle]=useState({
//     backgroundColor:"#282828",
//     color:"#f8f8ff"
//   })

//   const[toggleBtn,setToggleBtn]=useState("Dark Mode")

  return (
    <div className="container" style={props.myStyle}>
        <h1>About Us</h1>
        <div className="accordion my-4" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div>
            <button type="button" className="btn primary my-3" style={myBtnStyle} onClick={handleMode}>{toggleBtn}</button>
        </div> */}
    </div>
  )
}
