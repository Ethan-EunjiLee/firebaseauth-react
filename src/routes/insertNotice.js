import React, { Component } from "react"
import firebase from 'firebase/app';
import "firebase/auth"
 
class insertNotice extends React.Component{ //eslint-disable-next-line
   
    componentDidMount(){
      
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log('yes user: ', user);
                console.log('user.email: ', user.email);
                console.log('user.displayName: ', user.displayName);
            } else {
                console.log('no user');
            }
        })
    }
    render(){
        return(
            <h1>토큰 정보 가져와서 게시판 글 작성하기</h1>
        )
    }}

export default insertNotice;