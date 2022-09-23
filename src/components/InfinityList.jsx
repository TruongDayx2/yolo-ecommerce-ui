import React from 'react'
import PropTypes from 'prop-types'
import { useRef, useState, useEffect } from 'react'

import Grid from './Grid'
import ProductCard from './ProductCard'


const InfinityList = props => {

    const perLoad = 6 // items each Load

    const listRef = useRef(null)

    const [data, setData] = useState([])

    const [load, setLoad] = useState(true)

    const [index, setIndex] = useState(0)

    const [showButton,setShowButton] = useState(false)



    useEffect(() => {
        setData(props.data.slice(0,perLoad))
        setIndex(1)
    }, [props.data])

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (listRef && listRef.current){
                if(window.scrollY + window.innerHeight  >= listRef.current.clientHeight + listRef.current.offsetTop + 200)
                {
                    setLoad(true)                   
                }
            }
            if (window.scrollY > 1000){
                setShowButton(true)
            }else{
                setShowButton(false)
            }
        })
    },[listRef])

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    console.log(showButton)
    //console.log(window.scrollY)

    useEffect(()=>{
        const getItems = ()=>{
            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad ===0 ? pages : pages + 1
           
            if (load && index <= maxIndex){
                const start = perLoad * index
                const end = start + perLoad

                setData(data.concat(props.data.slice(start,end)))
                setIndex(index + 1)
            }
        }

        getItems()
        setLoad(false)
    },[load,index,data,props.data])
    

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
            {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
            
        </button>
      )}
        </div>
    )
}


InfinityList.propTypes = {
    data:PropTypes.array.isRequired
}

export default InfinityList