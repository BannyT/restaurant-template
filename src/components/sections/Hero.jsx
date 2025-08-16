import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="section">
      <div className="container hero">
        <div className="hero-media" />
        <div className="hero-content">
          <motion.span
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            transition={{duration:.6, delay:.05}}
            className="badge"
          >
            Fine dining • Modern cuisine
          </motion.span>

          <motion.h1
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            transition={{duration:.7, delay:.15}}
          >
            Crafting moments that<br/>taste like luxury
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:.7, delay:.25}}
            style={{maxWidth:760, margin:'10px auto 24px'}}
          >
            A premium React template with motion, elegant UI, and ready-to-sell quality.
            Features category menu, gallery lightbox, reservations, and styled contact.
          </motion.p>

          <motion.div
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            transition={{duration:.7, delay:.35}}
            style={{display:'flex', gap:10, justifyContent:'center'}}
          >
            <a className="btn btn-primary" href="#reservation">Reserve a table</a>
            <a className="btn btn-ghost" href="/menu">Explore menu</a>
          </motion.div>
        </div>

        <div className="floating" aria-hidden="true" />
      </div>
    </section>
  );
}
