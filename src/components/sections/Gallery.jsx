import React, { useState } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
  ' https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  ' https://images.unsplash.com/photo-1490645935967-10de6ba17061'
];

export default function Gallery(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openLightbox = (src) => { setActive(src); setOpen(true); };
  const close = () => setOpen(false);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <p>A glimpse into the ambiance and our craft.</p>

        <div className="grid grid-3" style={{marginTop:16}}>
          {IMAGES.map((src, i)=>(
            <div key={i} className="card" style={{padding:10,cursor:'zoom-in'}} onClick={()=>openLightbox(src)}>
              <img src={src} alt={`gallery-${i}`} style={{width:'100%',height:220,objectFit:'cover',borderRadius:14}} />
            </div>
          ))}
        </div>

        {open && (
          <div className="lightbox-backdrop" onClick={close}>
            <img className="lightbox-img" src={active} alt="preview" />
          </div>
        )}
      </div>
    </section>
  );
}
