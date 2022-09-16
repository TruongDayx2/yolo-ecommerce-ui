import React from "react";

import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color" 
import size from "../assets/fake-data/product-size"


const Catalog = () => {
    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter">
                    {/* Danh mục sản phẩm  */}
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {category.map((item, index) => (
                                <div
                                    key={index}
                                    className="catalog__filter__widget__content__item"
                                >
                                    <CheckBox label={item.display} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Màu sắc  */}
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {colors.map((item, index) => (
                                <div
                                    key={index}
                                    className="catalog__filter__widget__content__item"
                                >
                                    <CheckBox label={item.display} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* kích cỡ  */}
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Size
                        </div>
                        <div className="catalog__filter__widget__content">
                            {size.map((item, index) => (
                                <div
                                    key={index}
                                    className="catalog__filter__widget__content__item"
                                >
                                    <CheckBox label={item.display} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Xóa lựa chọn  */}
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm">Xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__content">
                    <Grid col={3} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(12).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                title={item.title}
                                price={item.price}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </Helmet>
    );
};

export default Catalog;
