import './auth.css'
function Register() {
    return (
        <div className='register'>
        <form className='registrationDetails'>
            <h2>Waptech User Registration</h2>
            <fieldset>
                
                <legend><b>Personal Details</b></legend>
                <div>
                <label>Enter the First Name</label>
                <input type="text" placeholder='First Name' /><br />
                <label>Enter the Last Name</label>
                <input type="text" placeholder='Last Name' /><br />
                <label>Enter your Email</label>
                <input type="email" placeholder='name@gmail.com' /><br />
                <label>Enter the Password</label>
                <input type="password" placeholder='password' /><br />
                <label>Confirm your password</label>
                <input type="password" placeholder='confirm'/><br />
                </div>
                <div className='registrationButtons'>
                    <button>Register</button>
                    <button>Back</button>
                </div>
            </fieldset>
            </form>
        </div>
    );
}

export default Register;