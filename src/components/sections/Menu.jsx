import React, { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import { MenuItem } from '../../types/menu';

function MenuCard({ item }:{item: MenuItem}){
  return (
    <div className="card">
      <img src={item.photoUrl || '/images/placeholder.jpg'} alt={item.name} style={{width:'100%',height:160,objectFit:'cover',borderRadius:8}} />
      <h3>{item.name}</h3>
      <p style={{color:'var(--muted)'}}>{item.description}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
        <strong>${item.price.toFixed(2)}</strong>
        <button className="btn-ghost">Order</button>
      </div>
    </div>
  );
}

export default function Menu(){
  const { items, loading } = useMenu();
  const [category, setCategory] = useState<'all'|'starters'|'mains'|'desserts'|'drinks'>('all');

  const categories = ['all','starters','mains','desserts','drinks'];
  const filtered = items.filter(it=> category==='all' ? true : it.category===category);

  return (
    <section className="section">
      <div className="container">
        <h2>Our Menu</h2>
        <div style={{margin:'12px 0',display:'flex',gap:8,flexWrap:'wrap'}}>
          {categories.map(c=> (
            <button key={c} className={`btn-ghost`} onClick={()=>setCategory(c as any)}>{c}</button>
          ))}
        </div>

        {loading ? <p>Loading...</p> : (
          <div className="menu-grid">
            {filtered.map((it: any)=> <MenuCard key={it.id} item={it} />)}
          </div>
        )}
      </div>
    </section>
  );
}