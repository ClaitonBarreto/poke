import { ImgHTMLAttributes } from "react";

interface ImageProps {
    
}

const Image = ({ ...options }: ImageProps & ImgHTMLAttributes<HTMLImageElement>) => {

    return (
        <img {...options} alt={options.alt || "image"}/>
    )
}

export default Image;