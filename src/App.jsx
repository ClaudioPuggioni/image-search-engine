import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function UserInterface() {
  const [images, setImages] = useState(false);
  const searchRef = useRef(null);

  async function searchImg(query) {
    let API_URL = `https://api.unsplash.com/search/photos?client_id=56p71PWCNpxHLfx1glbJg94czzJKzQfmDmoykqYcYic&query=${query}&per_page=30"`;
    let response = await fetch(API_URL);
    let data = await response.json();
    console.log(data);
    setImages(data.results);
  }

  useEffect(() => {
    searchImg("random");
  }, []);

  return (
    <div id="container">
      <div id="appHeader">Image Search Engine</div>
      <div id="searchDiv">
        <input
          ref={searchRef}
          id="searchInput"
          name="searchInput"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchImg(searchRef.current.value);
              searchRef.current.value = "";
            }
          }}
        />
        <button
          id="searchBtn"
          onClick={() => {
            searchImg(searchRef.current.value);
            searchRef.current.value = "";
          }}
        >
          Search
        </button>
      </div>
      <div id="imagesDiv">{images ? images.map((ele) => <Modal imgInfo={ele} />) : null}</div>
    </div>
  );
}
