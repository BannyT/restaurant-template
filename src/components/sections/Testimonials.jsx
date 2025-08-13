import React from 'react';

const data = [
  {name:'Amina', quote:'Amazing food and vibes!', rating:5},
  {name:'Jon', quote:'Best brunch in town.', rating:4},
  {name:'Lee', quote:'Cozy place and great service.', rating:5}
];

export default function Testimonials(){
  return (
    <section className="section">
      <div className="container">
        <h2>What People Say</h2>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {data.map((t,i)=> (
            <div key={i} className="card" style={{flex:'1 1 200px'}}>
              <p style={{marginTop:0}}>{t.quote}</p>
              <small style={{color:'var(--muted)'}}>— {t.name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}