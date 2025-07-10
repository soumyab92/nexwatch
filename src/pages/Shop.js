import React, { useState } from 'react';
import products from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Shop = () => {
    const dispatch = useDispatch();
    const [sortType, setSortType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const parsePrice = (value) => parseFloat(value.toString().replace(/[^0-9.]/g, ''));

    const sortedProducts = [...products].sort((a, b) => {
        const priceA = parsePrice(a.sale || a.price);
        const priceB = parsePrice(b.sale || b.price);

        if (sortType === 'price-asc') return priceA - priceB;
        if (sortType === 'price-desc') return priceB - priceA;
        if (sortType === 'rating') return b.rating - a.rating;
        return 0;
    });

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    
    return (
        <div className="container py-5">
        
            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Shop Products</h2>
                        <select className="form-select w-auto" onChange={(e) => setSortType(e.target.value)}>
                            <option value="">Sort By</option>
                            <option value="price-asc">Price Low to High</option>
                            <option value="price-desc">Price High to Low</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                    <div className="row">
                        {currentProducts.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <div className="pro_main_box h-100">
                                    <div className="img-box position-relative">
                                        <img src={product.image} className="img-fluid" alt={product.name} />
                                        <div className="offer_badge">
                                            <p>New</p>
                                        </div>
                                        <div className="cta_container d-flex">
                                            <Link to={`/product/${product.id}`} className="btn btn-sm btn-primary">
                                                BUY NOW
                                            </Link>
                                            <button
                                                className="btn btn-sm btn-outline-dark mt-1"
                                                onClick={() => dispatch(addToCart(product))}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    <div className="content_box">
                                        <h3>{product.name}</h3>
                                        <p>{product.desc}</p>
                                        <div className="price_box d-flex justify-content-between align-items-center">
                                            <p>
                                                {product.sale} <span className="text-decoration-line-through text-muted">{product.price}</span>
                                            </p>
                                            <div className="d-flex align-items-center gap-1">
                                                <span>{product.rating}</span>
                                                <img src="/images/star.svg" className="img-fluid" alt="star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="d-flex justify-content-center mt-4">
                        <nav>
                            <ul className="pagination">
                                {[...Array(totalPages)].map((_, i) => (
                                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;