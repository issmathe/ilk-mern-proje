import React, { useState } from 'react';
import axios from 'axios';

function CategoryForm() {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    price: 0,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/api', formData);
      console.log('Category created:', response.data);
      setSuccessMessage('Kayıt başarılı');
      setFormData({ title: '', name: '', price: 0 }); // Form verilerini sıfırla
      window.location.reload(); // Sayfayı yeniden yükle
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className='background'>Ürün Ekleme</h2>
          {successMessage && <p className="alert alert-success">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Ürün Bilgisi:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Ürün İsmi:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ürün İsmi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Ürün Fiyatı:</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Ürün Fiyatı"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">Ekle</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryForm;
