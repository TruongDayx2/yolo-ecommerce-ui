import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "./Button";

import numberWithCommand from "../utils/numberWithCommand"

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card__name">{props.title}</h3>
                <div className="product-card__price">
                    {numberWithCommand(props.price)}
                    <span className="product-card__price__old">
                        <del>{numberWithCommand(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button 
                    size="sm" 
                    icon="bx bx-cart" 
                    animate={true}
                >
                    Chọn mua
                </Button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCard;