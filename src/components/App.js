import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDogImage(data.message);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default App;
