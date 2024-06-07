function LodgedIn ({onButtonClick}){
    return(
        <div className="login_page">
        <h1>Welcome to Login Page</h1>        
        <form>
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <input onClick={onButtonClick} id="loginBtn" type="button" value="Login" />
        </form>
        </div>
    )
}
export default LodgedIn;
