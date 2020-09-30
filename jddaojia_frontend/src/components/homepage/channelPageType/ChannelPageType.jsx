import React, { useEffect, useState } from 'react'
import PageTypeSearch from './PageTypeSearch/PageTypeSearch'
import ProductType from './ProductType/ProductType'
import './index.css'
import Loading from '../../common/loading/Loading'
import { axiosInstance } from '../../../api/config'
export default function ChannelPageType(props) {
    const [ChannelPage, setChannelPage] = useState('')
    useEffect(() => {
        // fetch(`http://localhost/${props.match.params.type}`).then(res => res.json())
        // .then(data => {
        //     setChannelPage({
        //         ChannelPage: data
        //     })
        // })
        axiosInstance.get(`${props.match.params.type}`)
            // .then(res => res.json())
            .then(data => {
                console.log(data)
                setChannelPage({
                    ChannelPage: data.data
                })
            })
    }, [])
    return (
        <div>
            {ChannelPage == ''?<Loading />:<div className='PageTypeSearchs'>
                <PageTypeSearch props={ChannelPage} />
                <ProductType props={ChannelPage} />
            </div>}
            
        </div>
    )
}
