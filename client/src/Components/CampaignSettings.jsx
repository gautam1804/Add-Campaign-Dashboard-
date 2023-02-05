import React from 'react'
import './CampaignSettings.css';
import Axios from 'axios';
import Leftnavbar from './Leftnavbar'
import Top from './Top'
import frame from '../images/Frame.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Toggle from './Toggle';
import Toggle2 from './Toggle2';



export default function CampaignSettings() {
  const [campaignName, setCampaignName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState();
  const [createdOn, setCreatedOn] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [clicks, setClicks] = useState(300);
  const [campaignStatus, setCampaignStatus] = useState("Live now");

  const [data, setData] = useState(0);
  const [toggle, setToggle] = useState(true);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };
  const [toggle1, setToggle1] = useState(true);
  const handleToggleChange1 = () => {
    setToggle1(!toggle1);
  };

  const addCampaign = () => {
    console.log("here");
    Axios.post('http://localhost:3001/create', {
      campaignName: campaignName,
      createdOn: createdOn,
      dateRange: dateRange,
      clicks: clicks,
      budget: budget,
      location: location,
      compaignStatus: campaignStatus
    }).then(() => {
      console.log("Success");
    })
  }
  return (
    <div style={{ width: "100%" }} className='d-flex flex-row '>
      <div className='d-flex flex-column'>
        <div style={{ backgroundColor: "#001738", display: "inline", width: "64px", paddingBottom: "35px", paddingTop: "20px" }}>
          <img src={frame}></img>
        </div>
        <Leftnavbar />
      </div>

      <div className='d-flex flex-column flex-grow-1' style={{ marginBottom: "59px" }}>
        <Top />
        <div className='progressbar'>
          <div className='d-flex flex-column'>
            <div><h3 style={{ marginTop: "50px", marginLeft: "15px" }}>Your Ad campaign</h3></div>
            <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.5)", marginLeft: "20px", marginBottom: "30px" }}>Launch your app in just 3 easy Steps</div>
          </div>



          <div className='d-flex coloumn' >

            <div className="md-stepper-horizontal orange">
              <div className="md-step active done">
                <div className="md-step-circle"><span>1</span></div>
                <div className="md-step-title">What do you want to do</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step active editable">
                <div className="md-step-circle"><span></span></div>
                <div className="md-step-title">Choose product</div>
                <div className="md-step-optional"></div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step active ">
                <div className="md-step-circle"><span></span></div>
                <div className="md-step-title">Campaign settings</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step last">
                <div className="md-step-circle last"><span> </span></div>
                <div className="md-step-title">Ready to go</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
            </div>



          </div>

          {/*  content selection   ------------------------------- */}


          <div style={{ background: "white", marginLeft: "40px", marginRight: "40px" }}>
            <span style={{ fontSize: "20px", marginLeft: "20px" }}>Campaign Settings</span> <span style={{ fontSize: "12px", color: "grey" }}>(Step 3 of 4)</span>


            <div class="container">

              <div class="timeline-block timeline-block-right" style={{ marginBottom: "50px" }}>
                <div class="marker active"><i class=" active" aria-hidden="true"><h5 style={{ color: "white" }}>1</h5></i></div>
                <div class="timeline-content">
                  <h3 style={{ textDecorationLine: "underline" }}>Budget and dates info</h3>
                  <label>Budget Timeline</label>

                  <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />



                  <div className='d-flex flex-row starts'>
                    <div className='col' style={{ display: 'flex', flexDirection: "column" }}>
                      <label>Start date</label>

                      <input style={{ width: '365px', height: '48px', border: "0.5px solid grey", borderRadius: "10px" }} type="text" onChange={(event) => { setDateRange(event.target.value) }}></input>
                    </div>
                    <div className='col' style={{ display: 'flex', flexDirection: "column" }}>
                      <label>End date</label>

                      <input style={{ width: '365px', height: '48px', border: "0.5px solid grey", borderRadius: "10px" }} type="text" onChange={(event) => { setDateRange(event.target.value) }}></input>

                    </div>
                  </div>
                  <div className='row' style={{ marginTop: "34px" }}>
                    <label>Enter campaign budget</label>


                    <input type="range" min='100' max='100000' step='1000' value={data} onChange={(e) => setData(e.target.value)} style={{
                      marginBottom: "2px"
                    }} />

                    <div className='d-flex flex-row'>

                      <div className='col'>
                        <label >100</label>
                      </div>
                      <label style={{ background: "black", color: "white", borderRadius: "4px" }} >Rs. {data}</label>
                      <div className='col'>
                        <label style={{ float: 'right' }}>1,00,000</label>
                      </div>
                    </div>


                  </div>
                </div>
              </div>



              <div class="timeline-block timeline-block-right active">
                <div class="marker active"><i class=" active" aria-hidden="true"><h5 style={{ color: "white" }} >2</h5></i></div>
                <div class="timeline-content">
                  <h3 style={{ textDecorationLine: "underline" }}>Location info</h3>
                  <label>Location type</label>

                  <Toggle2 toggle1={toggle1} handleToggleChange1={handleToggleChange1} />

                  <div className='col' style={{ display: 'flex', flexDirection: "column" }}>

                    <label>Select Location </label>

                    <input style={{ border: "0.5px solid grey", borderRadius: "5px", marginTop: "7px", height: "50px" }} type="text" onChange={(event) => { setLocation(event.target.value) }} placeholder="Select a place name,address or coordinates"></input>
                  </div>
                  <div className='row' style={{ marginTop: "34px" }}>
                    <label>Select Target Radius</label>


                    <input type="range" min='1' max='30' step='1' value={data} onChange={(e) => setData(e.target.value)} style={{
                      marginBottom: "2px"
                    }} />

                    <div className='d-flex flex-row'>

                      <div className='col'>
                        <label >1</label>
                      </div>
                      <label style={{ background: "black", color: "white", borderRadius: "4px" }} >Rs. {data}</label>
                      <div className='col'>
                        <label style={{ float: 'right' }}>30</label>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div style={{ float: "right", marginRight: "40px" }}>
                <Link to="/Readytogo">  <button class="btn btn-primary" onClick={addCampaign}>Add Employee</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>

  )
}
