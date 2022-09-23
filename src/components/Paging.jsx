import React from 'react'
import PropTypes from 'prop-types'
import { useRef, useState, useEffect } from 'react'

import Grid from './Grid'
import ProductCard from './ProductCard'

const Paging = props => {

    const perLoad = 6 // items each Load

    const [index, setIndex] = useState(0)

    const [data, setData] = useState([])
    

    useEffect(() => {
        setData(props.data.slice(0,perLoad))
        setIndex(1)
    }, [props.data])

    const listRef = useRef(null)



    return (
        <div ref={listRef}>
        <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {data.map((item, index) => (
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
  )
}

Paging.propTypes = {
    data:PropTypes.array.isRequired,

}

export default Paging