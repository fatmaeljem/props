import React from 'react'
import  PropTypes  from 'prop-types'

const Profile = (props) => {
console.log (props)
    return (
        <div >
         <h3  style={{ color: "white",  padding: "80px" }} > hello it's {props.hey} </h3>
          <p style={{marginTop: "10 px" }}> <h5 style={{color:"aqua"}}  >bio</h5> {props.Bio}</p> 
           <p style={{color: "white",marginTop: "10px"}}> <h5 style={{color:"aqua"}} >Profession</h5>   {props.Profession}</p>
           <p style={{marginTop: "50px"}} > {props.children}</p>

        </div>
    )
}

Profile.defaultProps = {
    Bio: "Undefined",
    Profession: "Undefined" , 
    
}
Profile.propTypes = {
    Bio:  PropTypes.string,
    Profession: PropTypes.string,
    children: PropTypes.string,
}

export default Profile
