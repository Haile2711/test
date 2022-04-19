import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <img className="logo" src="./assets/logo.png" alt="" />
            </div>
            <div className="right">
                <img  className="searchIcon"src="./assets/searchIcon.png" alt="" />
                <div className="language">
                    <span className="text">ENG</span>
                    <img className="icon" src="./assets/Icon.png" alt="" />
                </div>
                <button className="btnSignUp">Sign Up</button>
                <button className="btnSignIn">Sign Up</button>
            </div>
        </div>
    </div>
  )
}
