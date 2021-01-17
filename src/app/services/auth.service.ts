import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth) { }

  loginUser( 
    email:string,
    password:string
    ):Promise<firebase.default.auth.UserCredential>{
      return firebase.default.auth().signInWithEmailAndPassword(email,password);
    }

    signUpUser(
    email:string,
    password:string
    ):Promise<any>{
      return firebase.default.auth().createUserWithEmailAndPassword(email,password);
    }

    resetPassword(
      email:string,
    ):Promise<void>{
      return firebase.default.auth().sendPasswordResetEmail(email);
    }

    logOutUser()
    :Promise<void>
    {
      return firebase.default.auth().signOut();

    }

    userDetails() {
      return this.afAuth.user
    }
    
}
