
import './auth.css'
function Login() {
    return (
        <div className='Login'>
            <h2>Waptech Agri-connect Login</h2>
            <form className='loginDetails'>
                <fieldset>
                    <legend><b>User Login</b></legend>
                    <label>username</label>
                    <input type="text" placeholder='username' /><br /><br />
                    <label>Password</label>
                    <input type="text" placeholder='password' /><br /><br />
                    <div className='loginButtons'>
                    <button>Log in</button>
                    <button>back</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;