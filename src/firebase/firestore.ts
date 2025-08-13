import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { firebaseApp } from './config';

export const db = getFirestore(firebaseApp);

// helpers (used by hooks)
export function listenMenu(callback: (data:any[])=>void){
  const q = query(collection(db,'menu'), orderBy('rank'));
  return onSnapshot(q, snap => {
    const items = snap.docs.map(d => ({ id:d.id, ...d.data() }));
    callback(items);
  });
}

export async function submitReservation(payload:any){
  const docRef = await addDoc(collection(db,'reservations'), {
    ...payload,
    createdAt: serverTimestamp(),
    status: 'pending'
  });
  return docRef.id;
}