import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  courses: AngularFireList<[]>;
  user$: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private ruoter: Router,
    private afDB: AngularFireDatabase
  ) {
    // this.afDB.list('/courses').push('second');
    // this.courses = this.afDB.list('/courses');
    // console.warn(this.courses.query);

    this.user$ = this.afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.ruoter.navigate(['/shoping-card']);
  }
  logout() {
    this.afAuth.auth.signOut().then(res => console.warn('logout' + res));
  }

}
