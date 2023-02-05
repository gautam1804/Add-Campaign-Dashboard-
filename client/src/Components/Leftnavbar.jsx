import React from 'react'
import Nav from 'react-bootstrap/Nav'
import home from '../images/home.png'
import campaign from '../images/campaign.png'
import product from '../images/product.png'
import customers from '../images/customers.png'
import {useNavigate} from "react-router-dom";

const cssStyle = {
  color: 'white',
  fontSize: '12px',
  marginLeft: '5px'
};
const Leftnavbar = () => {
  let navigate=useNavigate();
  return (
    <div className='left'>

      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link ><img src={home} ></img></Nav.Link> <span style={cssStyle}>Home</span>
        <Nav.Link eventKey="disabled"><img src={campaign}onClick={()=>navigate('/')} /> </Nav.Link><span style={cssStyle} >Campaign</span>
        <Nav.Link eventKey="link-2"> <img src={product} /></Nav.Link><span style={cssStyle}>Products</span>
        <Nav.Link eventKey="link-1"><img src={customers} /></Nav.Link><span style={cssStyle} >Customer</span>

      </Nav>

    </div>
  )
}

export default Leftnavbar