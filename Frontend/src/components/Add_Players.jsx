import React, { useState } from "react";
import FlagsSelect from "react-flags-select";
import "react-flags-select";
import tournament_pic from "../assets/tournament-picture.jpg";
import upload_cloud from "../assets/upload-cloud.svg";
import "../../src/App.css";

const Add_Players = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [titles, setTitles] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleTitlesChange = (event) => {
    setTitles(event.target.value);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleAddPlayer = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('level', level);
      formData.append('titles', titles);
      formData.append('country', selectedCountry);
      formData.append('image', selectedImage);

      const response = await fetch('http://localhost:8000/add-player', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Player added successfully!');
        // Optionally, you can reset the form fields here
        setName("");
        setLevel("");
        setTitles("");
        setSelectedCountry("");
        setSelectedImage(null);
      } else {
        console.error('Failed to add player:', response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error('Error adding player:', error);
      // Handle error
    }
  };

  return (
    <>
      <div className="max-w-full h-[1032px] mb-[32px] mt-[80px] lg:mt-0">
        {/* tournament info */}
        <div className="max-w-[96%] h-auto mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:w-[90%]">
            <div className="h-[52px] flex items-center">
              <h1 className="text-[24px] font-[500]">Player Info</h1>
            </div>
            <div className="text-[16px] text-[#667085]">
              Add player’s details here.
            </div>
          </div>
          <div className="w-full lg:w-[180px] h-[52px] lg:h-[52px] flex justify-start lg:justify-between items-center mt-[16px] lg:mt-0">
            <button className="w-[70px] h-[40px] rounded-[8px] border-[1px] border-gray-300 bg-white text-black mr-3 lg:mr-0">
              Cancel
            </button>
            <button
              className="w-[100px] h-[40px] rounded-[8px] bg-blue-500 text-white"
              onClick={handleAddPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
        {/* tournament info */}

        {/* horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* horizontal line */}

        {/* name */}
        <div className="max-w-[96%] h-[44px] mx-auto flex">
          <div className="w-[35%] h-[60px] flex flex-row ">
            <h1 className="text-[20px] font-[500]">Name</h1>
          </div>
          <input
            className="w-[512px] px-[15px] text-[16px] font-[400] border rounded-lg drop-shadow-sm"
            type="text"
            placeholder="Roger Federer"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {/* name */}

        {/* horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* horizontal line */}

        {/* tournament pictures */}
        <div className="flex flex-col max-w-[96%] mx-auto lg:flex-row">
          <div className="w-full lg:w-[35%] h-auto flex flex-col">
            <h1 className="text-[20px] font-[500]">Photo</h1>
            <p className="text-[16px] text-[#667085]">
              This will be displayed on bracket element.
            </p>
          </div>
          <div className="w-full lg:w-[65%] flex flex-col lg:flex-row items-center lg:items-start ml-0 lg:ml-3">
            <div className="flex flex-row justify-center lg:justify-between mb-5 lg:mb-0">
              <img
                className="size-[64px] mr-[20px] rounded-full"
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : tournament_pic
                }
                alt=""
              />
            </div>
            <div className="w-full lg:w-[420px] h-[126px] rounded-md border drop-shadow-sm">
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="w-full lg:w-[296px] h-[94px] flex flex-col justify-between mx-auto my-[16px]">
                  <img
                    className="size-[25px] mx-auto"
                    src={upload_cloud}
                    alt=""
                  />
                  <p className="w-full text-center text-[#667085]">
                    <span className="text-[#0142CA] font-[500]">
                      Click to upload{" "}
                    </span>
                    or drag and drop PNG or JPG (max. 4mb)
                  </p>
                </div>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        {/* tournament pictures */}

        {/* horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* horizontal line */}

        {/* level */}
        <div className="max-w-[96%] h-[44px] mx-auto flex">
          <div className="w-[35%] h-[60px] flex flex-row ">
            <h1 className="text-[20px] font-[500]">Level</h1>
          </div>
          <input
            className="w-[512px] px-[15px] text-[16px] font-[400] border rounded-lg drop-shadow-sm"
            type="text"
            placeholder="Professional"
            value={level}
            onChange={handleLevelChange}
          />
        </div>
        {/* level */}

        {/* horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* horizontal line */}

        {/* titles */}
        <div className="max-w-[96%] h-[44px] mx-auto flex">
          <div className="w-[35%] h-[60px] flex flex-row ">
            <h1 className="text-[20px] font-[500]">Titles</h1>
          </div>
          <input
            className="w-[512px] px-[15px] text-[16px] font-[400] border rounded-lg drop-shadow-sm"
            type="text"
            placeholder="34"
            value={titles}
            onChange={handleTitlesChange}
          />
        </div>
        {/* titles */}

        {/* horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* horizontal line */}

        {/* country */}
        <div className="max-w-[96%] mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-[35%] h-[60px] flex flex-row items-center">
            <h1 className="text-[20px] font-[500]">Country</h1>
          </div>
          <div className="w-full lg:w-[512px] text-[16px] font-[400]">
            <FlagsSelect
              selected={selectedCountry}
              onSelect={handleSelectCountry}
              className="w-full"
            />
          </div>
        </div>
        {/* country */}
      </div>
    </>
  );
};

export default Add_Players;
