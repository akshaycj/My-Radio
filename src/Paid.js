import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, } from 'antd';

class Paid extends Component {

constructor(props){
  super(props)

  this.state = {
    data:[],
    loadiing:true
  }
}

componentDidMount(){


  var that = this;

  fetch("https://cors-anywhere.herokuapp.com/https://www.parsehub.com/api/v2/projects/tsUVLT1V2T0C/last_ready_run/data?api_key=t329v-TauNsh")
  .then(function(data){
    return data.json()
  })
  .then(function(response){
    var data = response.data;
    that.setState({data:data,loadiing:false})
  })
}


  render() {

    const columns = [{
      title: 'Time',
      dataIndex: 'date',
      key: 'date',
      align:'center',
      className:'font',

    }, {
      title: 'Transaction',
      dataIndex: 'url',
      align:'center',
      className:'font1',
      key: 'url',
        render: text => <a href={text}>{text}</a>,
    }, {
      title: 'Amount',
      className:'font',
      align:'center',
      dataIndex: 'amt',
      key: 'amt',
      render:t => <div><strong>BTC</strong> {t}</div>
    }];



    return (
      <div >
        <Table columns={columns} dataSource={this.state.data} pagination={false} loading={this.state.loadiing}/>
      </div>
    );
  }
}

export default Paid;
