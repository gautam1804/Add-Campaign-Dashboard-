import React from 'react'
import Leftnavbar from './Leftnavbar'
import Top from './Top'
import Body from './Body'
import Button from 'react-bootstrap/Button';
import frame from '../images/Frame.png'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div style={{ background: "#E7EAF0", width: "100% ,height:800px" }} className='d-flex flex-row '>
      <div className='d-flex flex-column' style={{height:"610px"}}>
        <div style={{ backgroundColor: "#001738", display: "inline", width: "64px", paddingBottom: "35px", paddingTop: "20px" }}>
          <img src={frame}></img>
        </div>
        <Leftnavbar />
      </div>
      <div className='d-flex flex-column flex-grow-1' style={{marginBottom: "59px"}} >
        <Top />
        <div >
          <h2 style={{ marginLeft: "20px" }}>Your Campaigns</h2>
          <span style={{ marginLeft: "20px" }}>Check the list of campaigns you created</span>

          <Link to="/Todo" >
            <Button component={Link} to="/Todo" style={{ float: "right" ,marginRight:"34px",marginTop:"-40px"}} variant="primary" size="lg">
              ⊕ Create new campaign
            </Button>
          </Link>
        </div>

 <div style={{ backgroundColor: "white", marginLeft:"34px",marginRight:"23px",marginTop:"15px" }}>

 <div  >
          <div class="d-flex bd-highlight">
            <div class=" flex-grow-1 bd-highlight fomr">
              <i class="fa fa-search"></i>
              <input type="text" class="fomr-control fomr-input" placeholder="Search for the campaign" /></div>
            <div class="p-2 bd-highlight">
              <span>Platform:</span>{''}
              <button class="btn btn-outline-secondary dropdown-toggle" style={{ width: "100px", height: "30px", paddingTop: "5px", fontSize: "12px",fontWeight:"bolder" }}
                type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All platform
              </button>
            </div>
            <div class="p-2 bd-highlight">
              <span>Status:</span>{''}
              <button class="btn btn-outline-secondary dropdown-toggle" style={{ width: "100px", height: "30px", paddingTop: "5px", fontSize: "12px" ,fontWeight:"bold"}}
                type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Status
              </button>
            </div>
            <div class="p-2 bd-highlight"> <button class="btn btn-outline-secondary dropdown-toggle" style={{ width: "100px", height: "30px", paddingTop: "5px", fontSize: "12px", marginRight: "20px" ,fontWeight:"bold"}}
              type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Last 30 days
            </button></div>
          </div>
        </div>
        <Body />


 </div>

        
      </div>
    </div>
  )
}

export default Dashboard