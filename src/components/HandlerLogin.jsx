function HandlerLogin({ setLogin }) {
    function handleLogin() {
      setLogin(true);
    }
  
    return (
    
      <div className="container">
        <p>Login page is showing.....</p>
        <button onClick={handleLogin} className="btn">Logged In </button>
        </div>
    
    );
  }
  export default HandlerLogin;
  