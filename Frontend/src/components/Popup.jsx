import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { RiArrowDownSLine } from "react-icons/ri";
import axios from "axios";

const Popup = ({ onClose, onAdd, groupPlayers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [tournamentList, setTournamentList] = useState([]);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await axios.get("http://localhost:9000/tournaments");
      setTournamentList(response.data);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("Dropdown toggled:", isOpen); // Add this line
  };

  const handleTournamentSelect = (tournament) => {
    // Assuming tournament object has properties tournament_id and name
    setSelectedTournament({
      tournament_id: tournament.tournament_id,
      name: tournament.name,
    });
    setIsOpen(false);
    console.log("Selected tournament:", tournament);
  };

  const handleAdd = async () => {
    try {
      console.log(
        "Adding groups to tournament...",
        selectedTournament,
        groupPlayers
      );
      // Call the onAdd callback and pass the selected tournament
      onAdd(selectedTournament);
    } catch (error) {
      console.error("Error adding groups to tournament:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="lg:w-[576px] h-[264px] rounded-[16px] flex flex-col bg-white">
        <div className="lg:w-[512px] h-[52px] my-[32px] mx-auto">
          <h1 className="text-[20px] font-[500]">Select Tournament</h1>
          <p className="text-[16px]">
            All groups will be added to the selected tournament.
          </p>
        </div>

        <div className="flex flex-col max-w-[96%] mx-auto lg:flex-row">
          <div className="flex flex-col lg:w-[512px]">
            <div className="w-full lg:w-[65%] lg:flex-row items-center lg:items-start ml-0 relative">
              <button
                id="dropdownButton"
                className="text-gray-500 rounded-xl text-base px-5 py-2.5 text-center inline-flex items-center border lg:w-[512px] w-full justify-between"
                type="button"
                onClick={toggleDropdown}
              >
                {selectedTournament
                  ? selectedTournament.name
                  : "Select tournament"}
                <RiArrowDownSLine className="w-4 h-4 lg:w-6 lg:h-6 ml-2 lg:ml-0" />
              </button>

              {isOpen && (
                <div className="absolute z-10 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg w-full lg:w-[512px] max-h-60 overflow-y-auto">
                  <ul>
                    {tournamentList.map((tournament, index) => (
                      <li
                        key={index} // Use the index as the key prop
                        className="py-2 px-4 cursor-pointer"
                        onClick={() => handleTournamentSelect(tournament)}
                      >
                        {tournament.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-auto py-4 px-6 space-x-4">
          <button
            className="text-gray-700 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => onAdd(selectedTournament)}
          >
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  groupPlayers: PropTypes.object.isRequired, // Assuming groupPlayers contains the group data
};

export default Popup;
