import React from 'react'
import Gambar from '../Foto/apa gajelas.jpg'

class Image extends React.Component{
render() {
    return(
        <>
        <img src={Gambar}/>
        </>
    )
}
}

export default Image;