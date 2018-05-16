import React, { Component } from 'react';
import App from './App'
import Recieve from './Recieve'
import Paid from './Paid'
import { Tabs } from 'antd';
import Box from './Box'
import Faq from './Faq'
import Footer from './Footer'


const TabPane = Tabs.TabPane;

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state={
      depo_first:'',
      depo_third:'',
      pay_first:'',
      pay_third:''
    }
  }

  componentDidMount(){

    var that = this;

    var url = "https://cors-anywhere.herokuapp.com/https://www.parsehub.com/api/v2/projects/t1A9MTvpbF8E/last_ready_run/data?api_key=t329v-TauNsh"

/*
    var request = this.createCORSRequest("get", url);
    if (request){
      console.log("dataa",);
        request.onload = function(){
            //do something with request.responseText
            console.log("new",request.responseText);
        };
        request.send()
    } */
    fetch(url)
    .then(function(data){
      return data.json()
    })
    .then(function(response){
      var data = response.data;
      that.setState({depo_first:data[1].first,depo_third:data[1].second,pay_first:data[2].first,pay_third:data[2].second})

    })
  }


createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}


  render(){


    return(
      <div className="Header">
        <div style={{backgroundColor:'#333'}}>
          <div className='Heading'>
            <h1 style={{color:'green'}}>Double</h1><h1 style={{color:'orange'}}>Bit</h1><h1 style={{color:'white'}}>Coin</h1>
          </div>
        </div>
        <br />

        <div className='Boxes'>

          <Box color="#0088cc" first="24 Hours" second="Instant payment to wallet after 24 hours" third="Min-0.001 | Max-&#8734;"/>
          <Box color="#e53935" first={this.state.depo_first} second="Total Deposits" third={this.state.depo_third}/>
          <Box color="#388e3c"first={this.state.pay_first} second="Total Paid" third={this.state.pay_third}/>


        </div>
        <br />

        <Recieve />
        <br />

      <div className='Transactions useable'>

        <h2>Current Transactions</h2>

        <Tabs defaultActiveKey="1" >
         <TabPane tab="Deposits" key="1"><App /></TabPane>
         <TabPane tab="Paybacks" key="2"><Paid /></TabPane>

       </Tabs>

      </div>


      <br />
<br />


      <div className="useable Faq">
        <h2>FAQ</h2>
        <br/>
          <Faq />
      </div>

<br />

  <div className="useable Contact ">
    <h2>Contact Us</h2>
    <br/>
    <Footer />
  </div>

<br />

      </div>
    )
  }
}
