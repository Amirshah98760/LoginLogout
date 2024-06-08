
function HandlerLogOut({ setLogin }) {
    function handleLogout() {
      setLogin(false);
    }
  
    return (
      <div className='container'>
        <p>LogOut page is showing.....</p>
        <button onClick={handleLogout} className="btn">LogOut</button>
      </div>
    );
  }
  export default HandlerLogOut;
  