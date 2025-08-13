import { useState } from 'react';

export default function useReservations() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (r) => setReservations([...reservations, {...r, id:Date.now()}]);

  return { reservations, addReservation };
}
