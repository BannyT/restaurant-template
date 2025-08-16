import React, { useMemo, useState } from 'react';

const DUMMY_MENU = [
  {id:'1', name:'Truffle Tagliatelle', price:28, category:'mains', description:'House-made pasta, black truffle, parmesan', photo:' https://images.unsplash.com/photo-1490645935967-10de6ba17061'},
  {id:'2', name:'Sea Bass Ceviche', price:22, category:'starters', description:'Citrus, chili, coriander, red onion', photo:'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop'},
  {id:'3', name:'Chocolate Fondant', price:14, category:'desserts', description:'Warm center, vanilla ice cream', photo:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop'},
  {id:'4', name:'Aged Ribeye', price:36, category:'mains', description:'Grass-fed, herb butter, jus', photo:'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1200&auto=format&fit=crop'},
  {id:'5', name:'Signature Spritz', price:12, category:'drinks', description:'Citrus, prosecco, aromatic bitters', photo:'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop'},
  {id:'6', name:'Burrata & Heirloom', price:18, category:'starters', description:'Basil oil, aged balsamic', photo:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'}
];

export default function Menu(){
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const cats = ['all','starters','mains','desserts','drinks'];

  const filtered = useMemo(()=>{
    return DUMMY_MENU.filter(i => (cat==='all' || i.category===cat) && i.name.toLowerCase().includes(query.toLowerCase()));
  },[cat, query]);

  return (
    <section className="section" id="menu">
      <div className="container">
        <h2>Signature Menu</h2>
        <p>Curated dishes from our chef. Search & filter in real-time.</p>

        <div style={{display:'flex',gap:10,flexWrap:'wrap',margin:'16px 0 10px'}}>
          {cats.map(c=>(
            <button key={c} className={`btn ${c===cat ? 'btn-primary' : 'btn-ghost'}`} onClick={()=>setCat(c)}>{c}</button>
          ))}
          <input
            placeholder="Search dishes…"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            style={{flex:'1 1 220px',minWidth:220,background:'#0f0f14',border:'1px solid var(--border)',borderRadius:999,padding:'12px 14px',color:'var(--text)'}}
          />
        </div>

        <div className="menu-grid">
          {filtered.map(item=>(
            <article key={item.id} className="card menu-card">
              <img src={item.photo} alt={item.name} />
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                <h3 style={{margin:0}}>{item.name}</h3>
                <span className="badge">${item.price.toFixed(2)}</span>
              </div>
              <p>{item.description}</p>
              <div style={{display:'flex',gap:10,marginTop:10}}>
                <button className="btn btn-ghost">Details</button>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
