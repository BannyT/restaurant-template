import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import AdminLayout from '../../components/common/AdminLayout';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

const MenuManager = () => {
  const { menuItems, loading, error, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: 'appetizer',
    image: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      await updateMenuItem(editingItem.id, formData);
      setEditingItem(null);
    } else {
      await addMenuItem(formData);
    }
    setFormData({
      name: '',
      description: '',
      price: 0,
      category: 'appetizer',
      image: ''
    });
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      image: item.image
    });
  };

  return (
    <AdminLayout>
      <div className="admin-container">
        <h1>Menu Management</h1>
        
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="appetizer">Appetizer</option>
                <option value="main">Main Course</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" className="admin-button">
            {editingItem ? 'Update Item' : 'Add Item'}
          </button>
        </form>
        
        {loading ? (
          <p>Loading menu items...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="admin-list">
            {menuItems.map(item => (
              <div key={item.id} className="admin-list-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price.toFixed(2)}</span>
                  <span className="category">{item.category}</span>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleEdit(item)} className="edit-button">
                    <FiEdit />
                  </button>
                  <button onClick={() => deleteMenuItem(item.id)} className="delete-button">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default MenuManager;