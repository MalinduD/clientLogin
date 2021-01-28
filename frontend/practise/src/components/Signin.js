import React, {Component} from 'react';
import Signup from './Signup';
import Mainpage from './Mainpage'
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

class Signin extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
     
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        
    }
    setEmail(event){
        this.setState({
            email: event.target.value
        });
    }
    setPassword(event){
        this.setState({
            password: event.target.value
        });
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/Signup" component={Signup}></Route>
                    <Route exact path="/Mainpage/:accessToken" component={Mainpage}></Route>
                    <div className="Signin" style={{width:"600px", marginLeft:"400px", marginTop:"50px"}}>
                        <form className="form-signin bg-warning" action="/Signin/SigninUsers" method="POST">
                        <h1 className="h3 mb-3 font-weight-normal text-center" >Sign In</h1>
                        <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text">Email</div>
                            </div>
                            <input type="email" id="inputEmail" name="lemail" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                            </div>
                            <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text">Password</div>
                            </div>
                            <input type="password" id="inputPassword" name="lpassword" onChange={this.setPassword} value={this.state.password} className="form-control" placeholder="Password" required></input>
                            </div>
                        
                            <div className="text-center">
                            <button className="btn btn-md btn-primary mb-3" type="submit" style={{width:"100px"}}>Sign in</button>
                            
                            </div>

                            <div className="text-center">
                                <p>Don't have an account ?</p>
                                <a className="nav-link mb-3" href="/Signup">Signup</a>
                            </div>

                        </form>
                    
                    </div>



                </Switch>
            </Router>
                        
        )
    }
}

export default Signin;