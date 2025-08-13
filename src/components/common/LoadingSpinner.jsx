import React from 'react';

export default function LoadingSpinner(){
  return (
    <div style={{display:'flex',justifyContent:'center',padding:20}}>
      <div style={{width:36,height:36,borderRadius:18,background:'linear-gradient(90deg,#d97706,#f59e0b)'}} />
    </div>
  );
}