import React, {Component} from 'react';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            fName:"",
            lName:"",
            email:"",
            password:""
        };
        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
       
    }

    setFname(event){
        this.setState({
            fName: event.target.value
        });
    }
    setLname(event){
        this.setState({
            lName: event.target.value
        });
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
            <div className="Signup" style={{width:"600px", marginLeft:"400px", marginTop:"50px"}}>
                        <form className="form-signin bg-warning" action="/Signup/addSignupUsers" method="POST">
                        <h1 className="h3 mb-3 font-weight-normal text-center" >Sign Up</h1>
                            <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text">First Name</div>
                            </div>
                            <input type="text" id="inputFirstName" name="fname" onChange={this.setFname} value={this.state.fName} className="form-control" placeholder="First Name" required autoFocus></input>
                            </div>
                            <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text">Last Name</div>
                            </div>
                            <input type="text" id="inputLastName" name="lname" onChange={this.setLname} value={this.state.lName} className="form-control" placeholder="Last Name" required autoFocus></input>
                            </div>
                            <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text">Email</div>
                            </div>
                            <input type="email" id="inputEmail" name="email" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                            </div>
                            <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                            <div className="input-group-prepend">
                                <div className="input-group-text">Password</div>
                            </div>
                            <input type="password" id="inputPassword" name="password" onChange={this.setPassword} value={this.state.password} className="form-control" placeholder="Password" required></input>
                            </div>
                        
                            <div className="text-center">
                            <button className="btn btn-md btn-primary mb-3" type="submit" style={{width:"100px"}}>Sign up</button>
                            
                            </div>

                        </form>
                    
                    </div>

        )
    }
}

export default Signup;