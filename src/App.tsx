import _ from "lodash";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  const fetchImage = async () => {
    try {
      const response = await axios.get("http://localhost:3001/image");
      setImage(_.get(response.data, "image", ""));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {image && (
          <img src={image} width={400} height={200} alt="Hello OtawaJS" />
        )}
        <p>I am a typical React app.</p>
        <a
          href="#refresh-image"
          style={{ color: "#008080" }}
          onClick={fetchImage}
        >
          Refresh the image
        </a>
      </header>
    </div>
  );
}

export default App;
