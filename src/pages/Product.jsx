import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect } from 'react'

import Helmet from "../components/Helmet"
import Section, {SectionBody, SectionTitle} from "../components/Section"
import Grid from "../components/Grid"
import ProductCard from "../components/ProductCard"
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'
import { useState } from 'react'

const Product = props => {

    let {slug} = useParams();

    const product = productData.getProductBySlug(slug)

    const relatedProduct = productData.getProducts(8)


    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProduct.map((item,index)=>(
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    title={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            
        </Helmet>
        
    )
}

export default Product