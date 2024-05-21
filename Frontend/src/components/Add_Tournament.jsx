import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  MdOutlineFormatBold,
  MdFormatItalic,
  MdOutlineAttachment,
} from "react-icons/md";
import { PiListBullets, PiListNumbersThin } from "react-icons/pi";
import FlagsSelect from "react-flags-select";
import TimezoneSelect from "react-timezone-select";
import tournament_pic from "../assets/tournament-picture.jpg";
import upload_cloud from "../assets/upload-cloud.svg";
import "../../src/App.css";

const AddTournament = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [images, setImages] = useState([tournament_pic, tournament_pic]);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [venues, setVenues] = useState([]);
  const [selectedVenues, setSelectedVenues] = useState([]); // Updated state for selected venues
  const [venueDropdowns, setVenueDropdowns] = useState([{ id: uuidv4() }]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:7000/venues");
        if (response.ok) {
          const data = await response.json();
          const formattedVenues = data.map((venue) => ({
            id: venue.id,
            name: venue.venue_name,
            city: venue.city,
            country: venue.country,
          }));
          setVenues(formattedVenues);
          //console.log("Venues:", formattedVenues); // Add this line to check venues
        } else {
          console.error("Failed to fetch venues:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);

  const handleAddAnotherVenue = () => {
    setVenueDropdowns([...venueDropdowns, { id: uuidv4() }]);
  };

  const handleRemoveVenue = (dropdownId) => {
    setVenueDropdowns(
      venueDropdowns.filter((dropdown) => dropdown.id !== dropdownId)
    );
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleImageChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage1(file);
      setImages([URL.createObjectURL(file), images[1]]);
    }
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage2(file);
      setImages([images[0], URL.createObjectURL(file)]);
    }
  };

    const handleTimezoneChange = (timezone) => {
      console.log("Selected timezone:", timezone);
      setSelectedTimezone(timezone);
    };

  const handleAddTournament = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("about", about);
      formData.append("country", selectedCountry);
      formData.append("timezone", selectedTimezone.label);
      formData.append("images", selectedImage1);
      formData.append("images", selectedImage2);
      selectedVenues.forEach((venueId) => {
        formData.append("venues", venueId); // Append selected venue IDs
      });

      const response = await fetch("http://localhost:7000/add-tournament", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Tournament added successfully!");
        setName("");
        setAbout("");
        setSelectedCountry("");
        setSelectedTimezone("");
        setSelectedImage1(null);
        setSelectedImage2(null);
        setImages([tournament_pic, tournament_pic]);
      } else {
        console.error("Failed to add tournament:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding tournament:", error);
    }
  };

  const handleVenueChange = (event, dropdownId) => {
    const venueId = event.target.value;
    setSelectedVenues((prevSelectedVenues) => {
      const updatedSelectedVenues = [...prevSelectedVenues];
      const dropdownIndex = venueDropdowns.findIndex(
        (dropdown) => dropdown.id === dropdownId
      );
      updatedSelectedVenues[dropdownIndex] = venueId;
      return updatedSelectedVenues;
    });
  };

  return (
    <>
      <div className="max-w-full mb-[32px] mt-[80px] lg:mt-0">
        {/* Tournament info */}
        <div className="max-w-[96%] h-auto mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:w-[90%]">
            <div className="h-[52px] flex items-center">
              <h1 className="text-[24px] font-[500]">Tournament Info</h1>
            </div>
            <div className="text-[16px] text-[#667085]">
              Add photo gallery and tournament’s details here.
            </div>
          </div>
          <div className="w-full lg:w-[148px] h-[52px] lg:h-[52px] flex justify-start lg:justify-between items-center mt-[16px] lg:mt-0">
            <button className="w-[70px] h-[40px] rounded-[8px] border-[1px] border-gray-300 bg-white text-black mr-3 lg:mr-0">
              Cancel
            </button>
            <button
              className="w-[70px] h-[40px] rounded-[8px] bg-blue-500 text-white"
              onClick={handleAddTournament}
            >
              Add
            </button>
          </div>
        </div>
        {/* Tournament info */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* Horizontal line */}

        {/* Name */}
        <div className="max-w-[96%] mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-[35%] h-[60px] flex flex-row">
            <h1 className="text-[20px] font-[500]">Name</h1>
          </div>
          <input
            className="w-full lg:w-[512px] px-[15px] text-[16px] font-[400] border rounded-lg drop-shadow-sm h-[44px] mt-4 lg:mt-0"
            type="text"
            placeholder="US Open 23"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {/* Name */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* Horizontal line */}

        {/* About */}
        <div className="flex flex-col max-w-[96%] h-auto mx-auto lg:flex-row">
          <div className="w-full lg:w-[35%] h-[40px] flex flex-col mb-7 lg:mb-0">
            <h1 className="text-[20px] font-[500]">About</h1>
            <p className="text-[16px] text-[#667085]">
              Write a brief introduction
            </p>
          </div>
          <div className="w-full lg:w-[512px] h-[210px] flex flex-col">
            <div className="max-w-full h-[44px] flex flex-row mb-[12px]">
              <div className="w-[40%] h-[44px]">
                <select className="w-full h-full border rounded-md bg-white pl-2 pr-2 drop-shadow-sm">
                  <option value="value1">Normal text</option>
                  <option value="value2">Option 2</option>
                  <option value="value3">Option 3</option>
                </select>
              </div>
              <div className="w-[60%] flex flex-row">
                <div className="size-[32px] text-[#98A2B3] h-full flex justify-center items-center text-[24px] mx-2">
                  <MdOutlineFormatBold />
                </div>
                <div className="size-[32px] text-[#98A2B3] h-full flex justify-center items-center text-[24px] mr-2">
                  <MdFormatItalic />
                </div>
                <div className="size-[32px] text-[#98A2B3] h-full flex justify-center items-center text-[24px] mr-2">
                  <MdOutlineAttachment />
                </div>
                <div className="size-[32px] text-[#98A2B3] h-full flex justify-center items-center text-[24px] mr-2">
                  <PiListBullets />
                </div>
                <div className="size-[32px] text-[#98A2B3] h-full flex justify-center items-center text-[24px] mr-2">
                  <PiListNumbersThin />
                </div>
              </div>
            </div>
            <div className="max-w-full h-[154px]">
              <textarea
                className="w-full h-full text-[16px] font-[400] drop-shadow-sm border rounded-md px-2"
                name=""
                id=""
                value={about}
                onChange={handleAboutChange}
              ></textarea>
            </div>
          </div>
        </div>
        {/* About */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* Horizontal line */}

        {/* Tournament pictures */}
        <div className="flex flex-col max-w-[96%] mx-auto lg:flex-row">
          <div className="w-full lg:w-[35%] h-auto flex flex-col">
            <h1 className="text-[20px] font-[500]">Tournament Pictures</h1>
            <p className="text-[16px] text-[#667085]">
              This will be displayed on the banner (max up to 36 photos)
            </p>
          </div>
          <div className="w-full lg:w-[65%] flex flex-col lg:flex-row items-center lg:items-start ml-0 lg:ml-3">
            <div className="flex flex-row justify-center lg:justify-between mb-5 lg:mb-0">
              {images.map((image, index) => (
                <img
                  key={index}
                  className="size-[64px] mr-[20px] rounded-[16px]"
                  src={image}
                  alt=""
                />
              ))}
            </div>

            <div className="w-full lg:w-[344px] rounded-md border drop-shadow-sm">
              <label
                htmlFor="file-upload1"
                className="w-full lg:w-[296px] h-[94px] flex flex-col justify-between mx-auto my-[16px] cursor-pointer"
              >
                <input
                  id="file-upload1"
                  type="file"
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  onChange={handleImageChange1}
                />
                <img
                  className="size-[25px] mx-auto"
                  src={upload_cloud}
                  alt=""
                />
                <p className="w-full text-center text-[#667085]">
                  <span className="text-[#0142CA] font-[500]">
                    Click to upload{" "}
                  </span>
                  or drag and drop PNG or JPG (max. 800x400px)
                </p>
              </label>
              <label
                htmlFor="file-upload2"
                className="w-full lg:w-[296px] h-[94px] flex flex-col justify-between mx-auto my-[16px] cursor-pointer mt-16"
              >
                <input
                  id="file-upload2"
                  type="file"
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  onChange={handleImageChange2}
                />
                <img
                  className="size-[25px] mx-auto"
                  src={upload_cloud}
                  alt=""
                />
                <p className="w-full text-center text-[#667085]">
                  <span className="text-[#0142CA] font-[500]">
                    Click to upload{" "}
                  </span>
                  or drag and drop PNG or JPG (max. 800x400px)
                </p>
              </label>
            </div>
          </div>
        </div>
        {/* Tournament pictures */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* Horizontal line */}

        {/* Country */}
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
        {/* Country */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* Horizontal line */}

        {/* Venues */}
        <div className="max-w-[96%] mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-[35%] h-[60px] flex flex-row">
            <h1 className="text-[20px] font-[500]">Venues</h1>
          </div>
          <div className="w-full lg:w-[65%] flex flex-col">
            {venueDropdowns.map((dropdown, index) => (
              <div
                key={dropdown.id}
                className="w-full lg:w-[512px] text-[16px] font-[400] border rounded-lg drop-shadow-sm h-[44px] mb-[24px] relative"
              >
                <select
                  className="w-full h-full border rounded-lg"
                  value={selectedVenues[index] || ""}
                  onChange={(event) => handleVenueChange(event, dropdown.id)}
                >
                  <option value="">Select Venue</option>
                  {venues.map((venue) => (
                    <option key={venue.id} value={venue.name}>
                      {venue.name}, {venue.city}, {venue.country}
                    </option>
                  ))}
                </select>

                {index > 0 && (
                  <button
                    className="absolute top-1 right-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
                    onClick={() => handleRemoveVenue(dropdown.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-center lg:justify-end w-full lg:w-[512px] text-[14px]">
              <button
                className="w-full lg:w-[159px] h-[40px] rounded-lg border"
                onClick={handleAddAnotherVenue}
              >
                Add Another Venue
              </button>
            </div>
          </div>
        </div>
        {/* Venues */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        {/* Horizontal line */}

        {/* Timezone */}
        <div className="max-w-[96%] mx-auto flex flex-col lg:flex-row mb-[64px]">
          <div className="w-full lg:w-[35%] h-[60px] flex flex-row">
            <h1 className="text-[20px] font-[500]">Timezone</h1>
          </div>
          <TimezoneSelect
            className="w-full lg:w-[512px] text-[16px] font-[400] border rounded-lg h-[40px]"
            value={selectedTimezone}
            onChange={handleTimezoneChange}
          />
        </div>
        {/* Timezone */}

        {/* Horizontal line */}
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto mt-64"></div>
        {/* Horizontal line */}
      </div>
    </>
  );
};

export default AddTournament;
