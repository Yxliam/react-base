import React, { Component } from 'react'
import {connect} from 'react-redux'
import { action  } from 'store/home'
import './index.scss'

class Home extends Component{
    render(){
        return(
            <div>
                <h1 class="title">{this.props.title}</h1>
            </div>
        );
    }
}

const mapState = (state)=>({
    title:state.getIn(['home','title'])
})

const mapDispatch = (state)=>{
    return{

    }
}

export default connect(mapState,mapDispatch)(Home);

