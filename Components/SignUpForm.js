import React from 'react'
import '../App.css'


function SignUpComponent() {
    
  return (
    <div className="login-wrapper" >
        <div className="login-form">
    <form>
        <h2 className="text-center">Sign up</h2>  
        <br/>     
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Full Name" required="required"/>
        </div>
        <br/>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required="required"/>
        </div>
        <br/>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <br/>
        <div className="form-group">
            <input type="confirmpassword" className="form-control" placeholder="Confirm Password" required="required"/>
        </div>
        <br/>
        <div className="form-group">
            <button className="btn btn-primary btn-block"><a href = '/app'>Sign Up</a></button>
        </div>
              
    </form>
    <p className="text-center">Already have an account?<a href='/login'><button>Log In</button> </a></p>
</div>
    </div>
  );
}

export default SignUpComponent;
