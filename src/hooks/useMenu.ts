import { useEffect, useState } from 'react';
import { listenMenu } from '../firebase/firestore';
import { MenuItem } from '../types/menu';

export default function useMenu(){
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsub = listenMenu((data)=>{
      setItems(data as MenuItem[]);
      setLoading(false);
    });
    return () => unsub();
  },[]);

  return { items, loading };
}