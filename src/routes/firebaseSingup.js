import React, { Component } from "react"
import firebase from 'firebase/app';
import * as serviceAccount from "../config/firebaseServiceAccount.json"
import "firebase/auth"
 
class firebaseSignup extends React.Component{ //eslint-disable-next-line

    onClickButton(){
        console.log('버튼 클릭');

        const email = document.getElementById('email').value;
        const id = document.getElementById('id').value;
        const pw = document.getElementById('pw').value;

        console.log(email, id, pw);

        firebase.auth().createUserWithEmailAndPassword(email, pw)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log('user: ', user);
            })
            .catch((err) => {
                console.log('err: ', err);
            })
    }

    render(){
        return(
            <div>
                <h1>파이어베이스 회원가입</h1>
                <input id='email' type='text'></input>
                <input id='id' type='text'></input>
                <input id='pw' type='password'></input>
                <input type='button' onClick={this.onClickButton} value='제출'></input>
           </div>
        )
    }

}

export default firebaseSignup;