import React from 'react'
import '../App.css'


function LogInComponent() {
        

  return (
    <div className="login-wrapper" >
        <div className="login-form">
    <form>
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <p className='par'>Enter your email</p>
            <input type="email" className="form-control" placeholder="e.g rebeccaadengbono2017@gmail.com" required="required" name="email"/>
        </div>
        &nbsp; 
        <div className="form-group">
        <p className='par'>Enter your password</p>
            <input type="password" className="form-control" placeholder="*********" required="required" name="password"/>
        </div>
        <div className="form-group">
        </div>
        &nbsp;
        <div className="form-group">
            <button className="btn btn-primary btn-block"><a href = '/app'>Log in</a></button>
        </div>
              
    </form>
    <p className="text-center">New Here?<a href = '/signup'>Create an Account</a></p>
</div>
    </div>
  );
}


export default LogInComponent;