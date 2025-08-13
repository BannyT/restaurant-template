import { useState } from 'react';
import { submitReservation } from '../firebase/firestore';
import { Reservation } from '../types/reservations';

export default function useReservations(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string| null>(null);

  async function createReservation(payload: Reservation){
    setLoading(true);
    setError(null);
    try{
      const id = await submitReservation(payload);
      setLoading(false);
      return { success:true, id };
    }catch(err:any){
      setError(err.message || 'Failed');
      setLoading(false);
      return { success:false };
    }
  }

  return { createReservation, loading, error };
}