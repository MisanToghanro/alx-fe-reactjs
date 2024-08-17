
function Header() {

const headerStyles = {

backgroundColor : "red",
color : "gold",
textAlign : "center",
justifyContent: "center",
margin : "2.5rem",
padding : "1.0rem",


}

    return(
<header>
  <h1 style={headerStyles}>My Favorite Cities</h1>
</header>
    );
}

export default Header;