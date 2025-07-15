import React, { useState } from 'react';
import { galleryData } from '../../Data/Data';
import TitleTypeOne from '../../Ui/TitleTypeOne/TitleTypeOne';
import './PopularBooks.css';

export default function PopularBooks() {
  const [activeButton, setActiveButton] = useState('all');

  // Hàm xử lý khi click nút lọc
  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  // Lọc dữ liệu theo danh mục
  const filterItems = activeButton === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeButton);

  return (
    <section>
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop="Some quality items"
          Title="Popular Books"
          className="popularbooks-title"
        />

        {/* Nút lọc thủ công */}
        <div className="filter-buttons">
          <button
            className={activeButton === 'all' ? 'active' : ''}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>

          <button
            className={activeButton === 'Business' ? 'active' : ''}
            onClick={() => handleFilterChange('Business')}
          >
            Business
          </button>

          <button
            className={activeButton === 'Technology' ? 'active' : ''}
            onClick={() => handleFilterChange('Technology')}
          >
            Technology
          </button>

          <button
            className={activeButton === 'Adventure' ? 'active' : ''}
            onClick={() => handleFilterChange('Adventure')}
          >
            Adventure
          </button>

          <button
            className={activeButton === 'Romantic' ? 'active' : ''}
            onClick={() => handleFilterChange('Romantic')}
          >
            Romantic
          </button>

          <button
            className={activeButton === 'Fictional' ? 'active' : ''}
            onClick={() => handleFilterChange('Fictional')}
          >
            Fictional
          </button>
        </div>

        {/* Hiển thị sách sau khi lọc */}
        <div className="gallery">
          {filterItems.map(({ title, author, price, image,name, writer, }, index) => (
            <div className="gallery-item" key={index}>
              <div className="popularbook-image">
                <img src={image} alt={title} />
              </div>
              <div className="popularbook-info">
                <h4>{name}</h4>
                <div><small>{writer}</small></div>
                <h5><span>{price}</span></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
