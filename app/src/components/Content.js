import React from 'react';
import { connect } from 'react-redux';
import { getImg } from '../actions';

const Content = ({imgSrc, title, isFetching, error, getImg}) => {

    if (isFetching) {
        return(
            <div>Loading Random Gif...</div>
        )
    }

    if (error){
        return(
            <h5>We got an error: {error}</h5>
        )
    }

    const clickHandler = e => {
        e.preventDefault();
        getImg();
    }

    return(
        <div>
            <button onClick={clickHandler} >Randomize!</button>
            <br /><br />
            <h4>{(title === "" || title === " " || title === "Animated GIF") ? "Random Gif == . ==" : title}</h4>
            <div><img src={imgSrc} alt="random gif" /></div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        imgSrc: state.imgSrc,
        title: state.title,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getImg })(Content)