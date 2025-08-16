import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = async (e) => {
    e.preventDefault();
    await new Promise(r=>setTimeout(r,600));
    setSent(true);
    setForm({name:'',email:'',message:''});
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="grid grid-2">
          <div className="card">
            <span className="badge">Talk to us</span>
            <h2>Contact</h2>
            <p>Events, catering, or special requests? Send a message.</p>
            <form onSubmit={submit} style={{display:'grid',gap:12,marginTop:10}}>
              <input required name="name" placeholder="Full name" value={form.name} onChange={onChange} style={iStyle}/>
              <input required type="email" name="email" placeholder="Email address" value={form.email} onChange={onChange} style={iStyle}/>
              <textarea required name="message" rows="4" placeholder="Your message…" value={form.message} onChange={onChange} style={{...iStyle, resize:'vertical'}} />
              <button className="btn btn-primary">{sent ? 'Sent ✓' : 'Send message'}</button>
            </form>
          </div>
          <div className="card" style={{padding:0,overflow:'hidden'}}>
            <iframe
              title="map"
              width="100%" height="420" style={{border:0, filter:'grayscale(20%) contrast(95%)'}}
              loading="lazy" allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8389233280264!2d144.95565177616417!3d-37.81732793458012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjQiUyAxNDTCsDU3JzI0LjQiRQ!5e0!3m2!1sen!2s!4v1700000000000"
            />
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
