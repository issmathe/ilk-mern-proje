import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditForm from './EditForm'; // Düzenleme formunu içe aktarın

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null); // Düzenleme modunu takip etmek için

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL+'/api');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleDelete = async (categoryId) => {
    const confirmDelete = window.confirm('Bu kategoriyi silmek istediğinizden emin misiniz?');

    if (confirmDelete) {
      try {
        await axios.delete(process.env.REACT_APP_SERVER_URL+`/api/${categoryId}`);
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const handleEdit = (category) => {
    setEditCategory(category); // Düzenleme modunu etkinleştir
  };

  const handleCancelEdit = () => {
    setEditCategory(null); // Düzenlemeyi iptal et
  };

  const handleSaveEdit = async (editedCategory) => {
    try {
      await axios.put(process.env.REACT_APP_SERVER_URL+`/api/${editedCategory._id}`, editedCategory);
      setEditCategory(null); // Düzenlemeyi kapat
      fetchCategories(); // Kategoriyi güncellemek için listeyi yeniden yükle
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ürün Görüntüle</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Kategori</th>
            <th scope="col">İsim</th>
            <th scope="col">Fiyatı</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category._id}>
              <td>{category.title}</td>
              <td>{category.name}</td>
              <td>{category.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(category._id)}
                >
                  Sil
                </button>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => handleEdit(category)}
                >
                  Düzenle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editCategory && (
        <EditForm
          category={editCategory}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default CategoryList;
