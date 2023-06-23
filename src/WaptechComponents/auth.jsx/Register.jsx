import './auth.css'
function Register() {
    return (
        <div className='register'>
        <form className='registrationDetails'>
            <h2>Waptech User Registration</h2>
                <legend><b>Personal Details</b></legend>
                <div>
                <label>Enter the Username</label>
                <input type="text" placeholder='username' /><br />
                <label>Enter the Email</label>
                <input type="email" placeholder='email' /><br />
                <label>Enter your Password</label>
                <input type="password" placeholder='password' /><br />
                <label>Enter Your Role</label>
                <input type="text" placeholder='password' /><br />
                <label>Registration Date</label>
                <input type="text" placeholder='date'/><br />
                </div>
                <div className='registrationButtons'>
                    <button style={{backgroundColor:"lightblue"}}>Register</button>
                    <button style={{backgroundColor:"lightblue"}}>Back</button>
                </div>
            </form>
        </div>
    );
}

export default Register;