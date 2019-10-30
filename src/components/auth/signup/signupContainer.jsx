import React from "react";
import { connect } from "react-redux";
import {SignUpUsers,Clean} from "../../../redux/registrationReducer"
import SignUp from "./signUp";


class SignUpBox extends React.Component{
  CleanUP=()=>{
    this.props.Clean()
  }
  NewUser=(formdata)=>{
      this.props.SignUpUsers(formdata)
    }
  render(){
    return<SignUp {...this.props} NewUser={this.NewUser} CleanUP={this.CleanUP}></SignUp>
  }
}


let mapStateToProps=(state)=>{
  return{
    loading:state.Regis.loading,
    error:state.Regis.error,
    
  }
}


export default connect(mapStateToProps,{SignUpUsers,Clean})(SignUpBox);
