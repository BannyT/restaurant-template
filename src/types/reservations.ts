export interface Reservation {
    id?: string;
    name: string;
    email: string;
    date: string; // YYYY-MM-DD
    time: string; // HH:mm
    guests: number;
    status?: 'pending'|'confirmed'|'cancelled';
  }