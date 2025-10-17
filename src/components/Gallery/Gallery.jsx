import React, { useState } from "react";
import "./Gallery.css";
import gallery1 from "../../assets/gallery1.png";

const Gallery = () => {
  // Mock image data
  const images = [
    { id: 1, src: gallery1 },
    { id: 2, src: "/images/gallery2.jpg" },
    { id: 3, src: "/images/gallery3.jpg" },
    { id: 4, src: "/images/gallery4.jpg" },
    { id: 5, src: "/images/gallery5.jpg" },
    { id: 6, src: "/images/gallery6.jpg" },
    { id: 7, src: "/images/gallery7.jpg" },
    { id: 8, src: "/images/gallery8.jpg" },
    { id: 9, src: "/images/gallery9.jpg" },
    { id: 10, src: "/images/gallery10.jpg" },
    { id: 11, src: "/images/gallery11.jpg" },
    { id: 12, src: "/images/gallery12.jpg" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = images.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">GALLERY</h2>

      <div className="gallery-container">
        {/* Left large image */}
        <div
          className="gallery-main"
          style={{
            backgroundImage: `url(${
              currentItems[0]?.src || "/images/placeholder.jpg"
            })`,
          }}
        ></div>

        {/* Right smaller images */}
        <div className="gallery-side">
          {currentItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="gallery-side-item"
              style={{
                backgroundImage: `url(${item.src})`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="gallery-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`gallery-page-btn ${
              currentPage === i + 1 ? "active" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
