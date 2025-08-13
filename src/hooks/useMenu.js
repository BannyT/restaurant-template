import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Initial demo menu items
const initialMenu = [
  {
    id: uuidv4(),
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with mozzarella and basil',
    price: 12.99,
    category: 'mains',
    photoUrl: 'https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: uuidv4(),
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing',
    price: 8.5,
    category: 'starters',
    photoUrl: 'https://images.unsplash.com/photo-1669283714145-f97867f6c238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: uuidv4(),
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with cream',
    price: 6.0,
    category: 'desserts',
    photoUrl: 'https://images.unsplash.com/photo-1626196874981-40349a369168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmljaCUyMGNob2NvbGF0ZSUyMGNha2UlMjB3aXRoJTIwY3JlYW18ZW58MHx8MHx8fDA%3D',
  },
];

export default function useMenu() {
  const [menuItems, setMenuItems] = useState(initialMenu);

  const addMenuItem = (item) => {
    setMenuItems([...menuItems, { id: uuidv4(), ...item }]);
  };

  const updateMenuItem = (id, updatedItem) => {
    setMenuItems(menuItems.map(item => item.id === id ? { ...item, ...updatedItem } : item));
  };

  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return { menuItems, addMenuItem, updateMenuItem, deleteMenuItem };
}
