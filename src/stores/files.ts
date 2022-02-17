export const abstractArtImages = Object.keys(import.meta.glob("/static/images/abstractExpressionist/*.{png,svg}")).map( fileName => fileName.slice(7))

export const allImages = [...abstractArtImages]