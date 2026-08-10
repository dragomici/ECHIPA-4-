import React from "react";
import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";
import Star from "../../atoms/Star";
import ProductPrice from "../../molecules/ProductPrice/ProductPrice";
import "./ProductCard.css";

interface ProductCardProps {
  imageUrl: string;
  category: string;
  title: string;
  rating: number;
  ratingCount: number;
  currentPrice: number;
  oldPrice?: number;
  badgeText?: string;
  badgeVariant?: "hot" | "sale" | "new" | "discount";
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  category,
  title,
  rating,
  ratingCount,
  currentPrice,
  oldPrice,
  badgeText,
  badgeVariant,
}) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={imageUrl} alt={title} className="product-card__image" />
        {badgeText && badgeVariant && (
          <div className="product-card__badge">
            <Badge text={badgeText} variant={badgeVariant} />
          </div>
        )}
      </div>
      <div className="product-card__content">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__rating">
          <div className="product-card__stars">
            {[...Array(5)].map((_, index) => (
              <Star key={index} filled={index < rating} />
            ))}
          </div>
          <span className="product-card__rating-count">
            ({ratingCount.toFixed(1)})
          </span>
        </div>

        <div className="product-card__footer">
          <ProductPrice currentPrice={currentPrice} oldPrice={oldPrice} />
          <Button variant="primary">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
