import React from 'react'

const style = {
	width: "150px",
	margin: " auto",
	display: "grid",
	fontSize: "25px",
	fontWeight: "100",
    fontFamily: "bold",
    padding:"5px",
    borderRadius:'5px',
    border: "3px solid #fd0606",
   


};

const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh