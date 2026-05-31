import React from 'react'

const ImageCard = ({elm}) => {
  return (
    <div>
        <a href={elm.url} target="_blank">
            <div className="h-60 w-95 overflow-hidden rounded-2xl">
                <img src={elm.download_url} loading="lazy" className="w-full h-full object-cover" alt="" />
            </div>
            <h2>{elm.author}</h2>
        </a>
    </div>
  )
}

export default ImageCard;

