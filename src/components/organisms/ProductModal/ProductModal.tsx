import React from 'react';
import './ProductModal.css';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="modal-details">
            <h2>{product.title}</h2>
            <p className="modal-price">${product.price.toFixed(2)}</p>
            <p className="modal-description">{product.description}</p>
            <button className="modal-add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};