import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, } from 'antd';

class App extends Component {

constructor(props){
  super(props)

  this.state = {
    data:[],
    loadiing:true
  }
}

componentDidMount(){


  var that = this;

  fetch("https://cors-anywhere.herokuapp.com/https://www.parsehub.com/api/v2/projects/ttszF02mHuy8/last_ready_run/data?api_key=t329v-TauNsh")
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
      className:'font',
      align:'center',



    }, {
      title: 'Transaction',
      dataIndex: 'id',
      key: 'id',
      className:'font1',
      align:'center',
        render: text => <a href={'http://blockchain.info/tx/'+text}>{text}</a>,
    }, {
      title: 'Amount',
      dataIndex: 'amt',
      key: 'amt',
      className:'font',
      align:'center',
      render:t => <div><strong>BTC</strong> {t}</div>
    }];



    return (
      <div >
        <Table columns={columns} dataSource={this.state.data} pagination={false} loading={this.state.loadiing}/>
      </div>
    );
  }
}

export default App;
