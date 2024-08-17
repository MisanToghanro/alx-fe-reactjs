
function UserProfile(props) {

    return(
        <div style={{border: " 1px solid red" , color: "gold", margin:"10px", padding : "1.0rem", maxWidth:"20%"}}>
            <h2  style={{ color: 'blue' }}> Name:{props.name}</h2> 
            <p> Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p> Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;