import React, { useState } from 'react';

export default function Reservation(){
  const [form, setForm] = useState({ name:'', email:'', date:'', time:'', guests:2, notes:'' });
  const [status, setStatus] = useState({ loading:false, ok:null, msg:'' });

  const onChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({loading:true, ok:null, msg:''});

    // ✅ Hook point: integrate EmailJS / Firestore here
    // await emailjs.send(...) OR await addDoc(collection(db,'reservations'), form)

    await new Promise(r=>setTimeout(r, 900)); // simulate network
    setStatus({loading:false, ok:true, msg:'Reservation request sent. We will confirm via email shortly.'});
    setForm({ name:'', email:'', date:'', time:'', guests:2, notes:'' });
  };

  return (
    <section className="section" id="reservation">
      <div className="container">
        <div className="card" style={{overflow:'hidden', padding:0}}>
          <div className="grid grid-2" style={{alignItems:'stretch'}}>
            <div style={{padding:28}}>
              <span className="badge">Reserve a Table</span>
              <h2 style={{marginTop:8}}>An evening to remember</h2>
              <p>Secure your spot with our online reservation form. For same-day bookings, please call.</p>

              <form onSubmit={submit} style={{display:'grid',gap:12,marginTop:14}}>
                <input required name="name" placeholder="Full name" value={form.name} onChange={onChange}
                  style={iStyle} />
                <input required type="email" name="email" placeholder="Email address" value={form.email} onChange={onChange}
                  style={iStyle} />
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                  <input required type="date" name="date" value={form.date} onChange={onChange} style={iStyle}/>
                  <input required type="time" name="time" value={form.time} onChange={onChange} style={iStyle}/>
                </div>
                <select name="guests" value={form.guests} onChange={onChange} style={iStyle}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} guest{n>1?'s':''}</option>)}
                </select>
                <textarea name="notes" rows="3" placeholder="Occasion, preferences, allergies…" value={form.notes} onChange={onChange}
                  style={{...iStyle, resize:'vertical'}} />
                <button className="btn btn-primary" disabled={status.loading}>
                  {status.loading ? 'Sending…' : 'Request Reservation'}
                </button>
                {status.msg && <p style={{color: status.ok ? '#84f7b5' : '#ff8a8a'}}>{status.msg}</p>}
              </form>
            </div>

            <div style={{minHeight:420,position:'relative'}}>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
                alt="dining room"
                style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const iStyle = {
  background:'#0f0f14',
  border:'1px solid var(--border)',
  color:'var(--text)',
  borderRadius:12,
  padding:'12px 14px',
  width:'100%'
};
