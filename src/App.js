import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import './App.css';
import Photos from './components/Photos';

const url = "https://jsonplaceholder.typicode.com/albums/1/photos/";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const getPhotos = async () => {
    const nik = await fetch(url);
    const pqr = await nik.json();
    setPhotos(pqr);
  };

  useEffect(() => {
    getPhotos ();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={photos.length}
        paginate={paginate}
      />
      <Photos photos={currentPosts} />
    </div>
  );
};

export default App;
