import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import products from '../data/products';

import ProductImageGallery from '../components/ProductDetail/ProductImageGallery';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ProductActions from '../components/ProductDetail/ProductActions';
import ProductTabs from '../components/ProductDetail/ProductTabs';
import ProductReviewSection from '../components/ProductDetail/ProductReviewSection';
import RelatedProductsSlider from '../components/ProductDetail/RelatedProductsSlider';
import PageBanner from '../components/PageBanner';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find(p => p.id.toString() === id);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <p className="text-center py-5">Product not found</p>;
  }

  return (
    <>
      <PageBanner title={product.name} />

      <section className="product_detail py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left: Gallery */}
            <div className="col-md-6">
              <ProductImageGallery
                mainImage={product.image}
                gallery={product.gallery || []}
              />
            </div>

            {/* Right: Info + Actions */}
            <div className="col-md-6">
              <ProductInfo
                name={product.name}
                price={product.price}
                sale={product.sale}
                discount={product.discount}
                qty={qty}
                setQty={setQty}
                description={product.desc}
              />
              <ProductActions
                onAddToCart={() => dispatch(addToCart({ ...product, qty }))}
              />
            </div>
          </div>

          {/* Tabs, Reviews, Related Slider */}
          <ProductTabs
            description={product.desc}
            specs={product.specs}
            qa={product.qa}
          />
          <ProductReviewSection productId={product.id} />
          <RelatedProductsSlider
            currentProductId={product.id}
            brandName={product.brand.name}
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;