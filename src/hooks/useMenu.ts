import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { MenuItem } from '../types/menu';

const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'menu'));
        const items: MenuItem[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() } as MenuItem);
        });
        setMenuItems(items);
      } catch (err) {
        setError('Failed to fetch menu items');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const addMenuItem = async (item: Omit<MenuItem, 'id'>) => {
    try {
      const docRef = await addDoc(collection(db, 'menu'), item);
      setMenuItems([...menuItems, { id: docRef.id, ...item }]);
    } catch (err) {
      setError('Failed to add menu item');
      console.error(err);
    }
  };

  const updateMenuItem = async (id: string, updatedItem: Partial<MenuItem>) => {
    try {
      await updateDoc(doc(db, 'menu', id), updatedItem);
      setMenuItems(menuItems.map(item => 
        item.id === id ? { ...item, ...updatedItem } : item
      ));
    } catch (err) {
      setError('Failed to update menu item');
      console.error(err);
    }
  };

  const deleteMenuItem = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'menu', id));
      setMenuItems(menuItems.filter(item => item.id !== id));
    } catch (err) {
      setError('Failed to delete menu item');
      console.error(err);
    }
  };

  return { menuItems, loading, error, addMenuItem, updateMenuItem, deleteMenuItem };
};

export default useMenu;