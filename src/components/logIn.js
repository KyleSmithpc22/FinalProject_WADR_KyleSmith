import React from 'react';

let e = React.createElement;

export default class LogIn extends React.Component {
    render() {

        return (

            <div className="container">
                <form class="cssAS">

                    <h3>Log In</h3>
            
                    <div class="form-outline mb-4">
                        <input type="Username" id="form1Example1" class="form-control" />
                        <label class="form-label" for="form1Example1">Username</label>
                    </div>
        
                    <div class="form-outline mb-4">
                        <input type="password" id="form1Example2" class="form-control" />
                        <label class="form-label" for="form1Example2">Password</label>
                    </div>
        
                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                </form>
            </div>
        )
    }
}