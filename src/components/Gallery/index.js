import React, { useRef, useState } from 'react';
import ImageItem from './ImageItem';

const Gallery = () => {

    const [images] = useState([
        "https://picsum.photos/id/237/100/100",
        "https://picsum.photos/id/500/100/100",
        "https://picsum.photos/id/24/100/100",
        "https://picsum.photos/id/989/100/100",
        "https://picsum.photos/id/290/100/100",
        "https://picsum.photos/id/650/100/100",
        "https://picsum.photos/id/420/100/100",
        "https://picsum.photos/id/120/100/100",
        "https://picsum.photos/id/666/100/100",
        "https://picsum.photos/id/123/100/100"
    ])

    let photoRef = useRef();

    const setImageSource = (source) => {
        photoRef.current.src = source;
    }

    return (
        <>
            <img className='w-50 my-2 mx-5 img-fluid' id="photo" ref={photoRef} />
            <div className="d-flex flex-wrap w-50 m-5">
                {
                    images.map((source, index) => <ImageItem source={source} key={index} setImageSource={setImageSource} />)
                }
            </div>
        </>
    )

}

export default Gallery;