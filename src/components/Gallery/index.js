import React, { useRef, useState } from 'react';
import ImageItem from './ImageItem';

const Gallery = () => {

    const [images] = useState([
        "https://picsum.photos/id/237/600/600",
        "https://picsum.photos/id/500/600/600",
        "https://picsum.photos/id/24/600/600",
        "https://picsum.photos/id/989/600/600",
        "https://picsum.photos/id/290/600/600",
        "https://picsum.photos/id/650/600/600",
        "https://picsum.photos/id/420/600/600",
        "https://picsum.photos/id/120/600/600",
        "https://picsum.photos/id/666/600/600",
        "https://picsum.photos/id/123/600/600"
    ])

    let photoRef = useRef();

    const setImageSource = (source) => {
        photoRef.current.style.width= "400px";
        photoRef.current.style.height= "400px";
        photoRef.current.style.objectFit= "cover";
        photoRef.current.src = source;
    }

    return (
        <>
            <img className='my-2 mx-5 img-fluid' id="photo" ref={photoRef} />
            <div className="d-flex flex-wrap w-50 m-5">
                {
                    images.map((source, index) => <ImageItem source={source} key={index} setImageSource={setImageSource} />)
                }
            </div>
        </>
    )

}

export default Gallery;