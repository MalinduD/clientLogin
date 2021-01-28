import React, {Component} from 'react';
import cleanup from '../images/cleanup2.jpg'
import cleanupb from '../images/cleanup3.jpg'

class Mainpage extends Component{
    render(){
        return(
            <div className="mainpage">
                <div className="card-deck">
                  <div className="card" style={{width:"300px", marginLeft:"50px", marginTop:"50px"}}>
                    <img className="card-img-top" src={cleanupb} alt="Card image" style={{width:"100%", height:"200px"}}/>
                    <div className="card-body">
                    <h4 className="card-title" style={{textAlign:"left"}}>Beach Cleanup with friends organized by Habitat Friends</h4>
                    <p className="card-text" style={{textAlign:"left", color:"gray"}}><i className="fa fa-calendar"></i>13th August<br/><i className="fa fa-clock-o"></i>4.00pm - 6PM <br/><i className="fa fa-users"></i>12 seats</p>
                    <h4 className="card-text" style={{textAlign:"left"}}>LKR 2,000</h4>
                    </div>
                  </div> 
                  <div className="card" style={{width:"300px", marginLeft:"50px", marginTop:"50px"}}>
                    <img className="card-img-top" src={cleanup} alt="Card image" style={{width:"100%", height:"200px"}}/>
                    <div className="card-body">
                    <h4 className="card-title" style={{textAlign:"left"}}>Beach Cleanup with friends organized by Habitat Friends</h4>
                    <p className="card-text" style={{textAlign:"left", color:"gray"}}><i className="fa fa-calendar"></i>13th August<br/><i className="fa fa-clock-o"></i>4.00pm - 6PM <br/><i className="fa fa-users"></i>12 seats</p>
                    <h4 className="card-text" style={{textAlign:"left"}}>FREE</h4>
                    </div>
                  </div>
                  <div className="card" style={{width:"300px", marginLeft:"50px", marginTop:"50px"}}>
                    <img className="card-img-top" src={cleanupb} alt="Card image" style={{width:"100%", height:"200px"}}/>
                    <div className="card-body">
                    <h4 className="card-title" style={{textAlign:"left"}}>Beach Cleanup with friends organized by Habitat Friends</h4>
                    <p className="card-text" style={{textAlign:"left", color:"gray"}}><i className="fa fa-calendar"></i>13th August<br/><i className="fa fa-clock-o"></i>4.00pm - 6PM <br/><i className="fa fa-users"></i>12 seats</p>
                    <h4 className="card-text" style={{textAlign:"left"}}>LKR 2,000</h4>
                    </div>
                  </div>
                  <div className="card" style={{width:"300px", marginLeft:"50px", marginTop:"50px"}}>
                    <img className="card-img-top" src={cleanup} alt="Card image" style={{width:"100%", height:"200px"}}/>
                    <div className="card-body">
                    <h4 className="card-title" style={{textAlign:"left"}}>Beach Cleanup with friends organized by Habitat Friends</h4>
                    <p className="card-text" style={{textAlign:"left", color:"gray"}}><i className="fa fa-calendar"></i>13th August<br/><i className="fa fa-clock-o"></i>4.00pm - 6PM <br/><i className="fa fa-users"></i>12 seats</p>
                    <h4 className="card-text" style={{textAlign:"left"}}>FREE</h4>
                    </div>
                  </div> 
                  </div>
            </div>
        )
    }
}

export default Mainpage;