
import './auth.css'
function Login() {
    return (
        <div className='Login'>
            <h2>Waptech Agri-connect Login</h2>
            <form className='loginDetails'>
                
                    <legend><b>User Login</b></legend>
                    <label>username</label>
                    <input type="text" placeholder='username' /><br /><br />
                    <label>Password</label>
                    <input type="text" placeholder='password' /><br /><br />
                    <div className='loginButtons'>
                    <button style={{backgroundColor:"lightblue",width:"50px",height:"50px"}}>Log in</button>
                    <button style={{backgroundColor:"lightblue",height:"50px",width:"50px"}}>back</button>
                    </div>
              
            </form> 
        </div>
    );
}

export default Login;