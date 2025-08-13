import React, { useState } from 'react';
import useReservations from '../../hooks/useReservations';

export default function Reservation(){
  const { createReservation, loading } = useReservations();
  const [form, setForm] = useState({name:'',email:'',date:'',time:'',guests:2});
  const [msg, setMsg] = useState('');

  async function onSubmit(e:React.FormEvent){
    e.preventDefault();
    setMsg('');
    const { success } = await createReservation(form as any);
    if(success) setMsg('Thanks — reservation submitted');
    else setMsg('Failed to submit reservation');
  }

  return (
    <section id="reservation" className="section">
      <div className="container card">
        <h2>Reserve a Table</h2>
        <form onSubmit={onSubmit} style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
          <input required placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <input required type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} />
          <input required type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})} />
          <input type="number" min={1} value={form.guests} onChange={e=>setForm({...form,guests: Number(e.target.value)})} />
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <button className="btn-primary" type="submit" disabled={loading}>{loading?'Submitting...':'Reserve'}</button>
            <small style={{color:'var(--muted)'}}>{msg}</small>
          </div>
        </form>
      </div>
    </section>
  );
}