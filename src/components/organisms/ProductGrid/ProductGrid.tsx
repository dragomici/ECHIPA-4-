import React, { useState } from 'react';
import { Pagination } from '../../molecules/Pagination/Pagination';
import { useProducts } from '../../../hooks/useProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductGrid.css';

export const ProductGrid = () => {
    const { products } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    
    const itemsPerPage = 10;
    const safeProducts = products || [];
    const totalPages = Math.ceil(safeProducts.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = safeProducts.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="product-grid-wrapper">
            <div className="product-grid-container">
                {currentProducts.map((product: any, index: number) => (
                    <ProductCard key={product.id || index} product={product} />
                ))}
            </div>
            
            {totalPages > 1 && (
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            )}
        </div>
    );
};