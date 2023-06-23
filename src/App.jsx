import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=37747211-b6ee7bd9c8d82ece9dd790f3b&q=${search}&image_type=photo&pretty=true`
    );
    const data = await response.json();
    console.log(data);
    setImages(data.hits);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="inputContainer">
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn" onClick={fetchData}>
            Search
          </button>
        </div>
        <div className="imagesContainer">
          {images.map((image) => (
            <img
              key={image.id}
              className="image"
              src={image.webformatURL}
              height={200}
              width={200}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
