import React, { useState } from "react";

const CarSelector = () => {
  const [brand, setBrand] = useState("");
  const [place, setPlace] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    // Reset other selections when brand is changed
    setPlace("");
    setYear("");
    setModel("");
    setShowDetails(false);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
    // Reset other selections when place is changed
    setYear("");
    setModel("");
    setShowDetails(false);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    // Reset model selection when year is changed
    setModel("");
    setShowDetails(false);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
    setShowDetails(false);
  };

  const handleSubmit = () => {
    // Check if all selections are made
    if (brand && place && year && model) {
      setShowDetails(true);
    } else {
      alert("Please select all options before submitting.");
    }
  };

  return (
    <div>
      <div className="select-container">
        <div className="select-item">
          <label className="item">Car Brand:</label>
          <div>
            <select value={brand} onChange={handleBrandChange}>
              <option value="">Select Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
            </select>
          </div>
        </div>

        <div className="select-item">
          <label className="item">Place:</label>
          <div>
            {brand && (
              <select value={place} onChange={handlePlaceChange}>
                <option value="">Select Place</option>
                {brand === "Toyota" && <option value="Japan">Japan</option>}
                {brand === "Honda" && <option value="Japan">Japan</option>}
                {brand === "Ford" && <option value="USA">USA</option>}
              </select>
            )}
          </div>
        </div>
        <div className="select-item">
          <label className="item">Year:</label>
          <div>
            {place && (
              <select value={year} onChange={handleYearChange}>
                <option value="">Select Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            )}
          </div>
        </div>

        <div className="select-item">
          <label className="item">Model:</label>
          <div>
            {year && (
              <select value={model} onChange={handleModelChange}>
                <option value="">Select Model</option>
                <option value="Corolla">Corolla</option>
                <option value="Civic">Civic</option>
                <option value="F-150">F-150</option>
              </select>
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <div>
          <p>
            You have selected: {brand} {place} {year} {model}
          </p>
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};

export default CarSelector;