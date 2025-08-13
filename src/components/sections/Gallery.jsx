import React from 'react';

const gallery = ['/images/gallery1.jpg','/images/gallery2.jpg','/images/gallery3.jpg','/images/gallery4.jpg'];

export default function Gallery(){
  return (
    <section className="section">
      <div className="container">
        <h2>Gallery</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12}}>
          {gallery.map((g,i)=>(
            <div key={i} style={{overflow:'hidden',borderRadius:8}}>
              <img src={g} alt={`gallery-${i}`} style={{width:'100%',height:140,objectFit:'cover'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}