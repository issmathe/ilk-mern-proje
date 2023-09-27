import React, { useState } from 'react';

function EditForm({ category, onSave, onCancel }) {
  const [editedCategory, setEditedCategory] = useState(category);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
    onSave(editedCategory);
  };

  return (
    <div>
      <h3>Düzenle Kategori</h3>
      <form onSubmit={handleSave}> {/* onSubmit eklenmiştir */}
        <div className="form-group">
          <label>Kategori</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={editedCategory.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>İsim</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={editedCategory.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Fiyatı</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={editedCategory.price}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" type="submit"> {/* type eklenmiştir */}
          Kaydet
        </button>
        <button className="btn btn-secondary ml-2" onClick={onCancel}>
          İptal
        </button>
      </form>
    </div>
  );
}

export default EditForm;
