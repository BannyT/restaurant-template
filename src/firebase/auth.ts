import { getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { firebaseApp } from './config';

export const auth = getAuth(firebaseApp);

export function loginAdmin(email:string, password:string){
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOut(){
  return firebaseSignOut(auth);
}