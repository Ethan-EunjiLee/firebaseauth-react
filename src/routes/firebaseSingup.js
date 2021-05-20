import React from "react"
import firebase from 'firebase/app';
import "firebase/auth"

class firebaseSignup extends React.Component{ //eslint-disable-next-line

    //TODO constructor super 

    onClickButton(){
        console.log('버튼 클릭');

        const email = document.getElementById('email').value;
        const id = document.getElementById('id').value;
        const pw = document.getElementById('pw').value;

        console.log(email, id, pw);

        // TODO: 로그인 전 DB 유저 확인
        firebase.auth().createUserWithEmailAndPassword(email, pw)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log('user: ', user);
                // TODO: onAuthStateChanged 구현
            })
            .catch((err) => {
                console.log('err: ', err);
            })
            
        // TODO: 리다이렉트 simplogis
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