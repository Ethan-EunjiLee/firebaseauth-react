import React, { Component } from "react"
import firebase from 'firebase/app';
import "firebase/auth"
 
class updateUser extends React.Component{ //eslint-disable-next-line
   
    componentDidMount(){
      
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log('yes user: ', user);
                user.updateProfile({
                    displayName: 'ethan22'
                }).then(function() {
                    console.log('displayName update ok');
                }).catch(function(err) {
                    console.log('displayName update no');
                })
            } else {
                console.log('no user');
            }
        })
    }

    render(){
        return(
            <h1>정보 업데이트</h1>
        )
    }}

export default updateUser;