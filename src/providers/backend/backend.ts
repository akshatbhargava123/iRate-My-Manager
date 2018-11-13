import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Feedback } from '../../app/app.model';

@Injectable()
export class BackendProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFirestore
  ) {
    this.afAuth.auth.setPersistence('local');
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser || {} as { email: string };
  }

  authState() {
    return this.afAuth.authState;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  addFeedback(feedback: Feedback) {
    return this.afDb.collection<Feedback>('feedbacks').add(feedback);
  }

  getFeedbacks() {
    return this.afDb.collection<Feedback>('feedbacks').valueChanges();
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
