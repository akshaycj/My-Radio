import React,{Component} from 'react';

export default class Box extends Component{

  render(){
    return(
      <div style={{borderRadius:5,backgroundColor:this.props.color,padding:20,margin:5,width:'350px',height:150}}>

        <div style={{margin:'auto',color:'#ffffff',width:'100%'}}>

          <h3 style={{color:'#ffffff',fontWeight:'bold'}}>{this.props.first}</h3>
          <h4 style={{color:'#ffffff'}}>{this.props.second}</h4>
          <h5 style={{color:'#ffffff',opacity:'.5'}}>{this.props.third}</h5>


        </div>

      </div>
    )
  }
}
