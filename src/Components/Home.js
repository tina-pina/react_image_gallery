import React from 'react';
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import ImageList from './ImageList';
import ReactLoading from 'react-loading';

const Home = (props) => {
    let isLoading = props.isLoading;
    return (
        <div>
            <SearchForm onSearch={props.searchDefault} />
            <MainNav searchDefault={props.searchDefault} />

            {isLoading ? <ReactLoading type="spinningBubbles" color="white" height={50} width={50} className="mx-auto" /> : <ImageList imageList={props.imageList} />
            }
        </div >
    )
}

export default Home;