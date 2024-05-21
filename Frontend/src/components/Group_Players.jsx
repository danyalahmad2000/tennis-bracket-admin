import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  RiArrowRightSLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiDeleteBinLine,
} from "react-icons/ri";
import player_pic from "../assets/avatar-img-2.png";
import Popup from "./Popup";

const Group_Players = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [chevronStates, setChevronStates] = useState({});
  const [groupCount, setGroupCount] = useState(0);
  const [groupPlayers, setGroupPlayers] = useState({});
  const [binHovered, setBinHovered] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    fetchAvailablePlayers();
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchAvailablePlayers = async () => {
    try {
      const response = await axios.get("http://localhost:17000/players"); // Assuming the endpoint returns data in the format { player_id, name, photo }
      const formattedPlayers = response.data.map((player) => ({
        player_id: player.player_id,
        name: player.name,
        photo: player.photo,
      }));
      setAvailablePlayers(formattedPlayers); // Update state with fetched players
    } catch (error) {
      console.error("Error fetching available players:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Dropdown toggled:", isDropdownOpen);
  };

  const handlePlayerSelect = (player) => {
    const selectedPlayer = availablePlayers.find((p) => p.name === player);

    if (
      selectedPlayer &&
      !selectedPlayers.some((p) => p.name === selectedPlayer.name)
    ) {
      setSelectedPlayers([
        ...selectedPlayers,
        {
          name: selectedPlayer.name,
          player_id: selectedPlayer.player_id,
          photo: selectedPlayer.photo, // Include the image URL
        },
      ]);
      setAvailablePlayers(availablePlayers.filter((p) => p !== selectedPlayer));
    }
    setIsDropdownOpen(false);
    console.log("Player selected:", player);
  };

  const removePlayer = (groupId, playerIndex, player) => {
    const updatedSelectedPlayers = selectedPlayers.filter(
      (p, index) => index !== playerIndex
    );
    setSelectedPlayers(updatedSelectedPlayers);

    setAvailablePlayers([...availablePlayers, player]);

    if (groupPlayers[groupId]) {
      const updatedGroupPlayers = [...groupPlayers[groupId]];
      updatedGroupPlayers.splice(playerIndex, 1);
      setGroupPlayers({
        ...groupPlayers,
        [groupId]: updatedGroupPlayers,
      });
    }
    console.log("Player removed:", player);
  };

  const handleAddToTournament = () => {
    console.log("Adding groups to the tournament...", groupPlayers);
    setIsPopupOpen(true);
  };

  const handleGroupClick = (groupId) => {
    setChevronStates((prevState) => ({
      ...prevState,
      [groupId]: !prevState[groupId],
    }));
    console.log("Group clicked:", groupId);
  };

  const handleGroupRemove = (groupId) => {
    const playersToRemove = groupPlayers[groupId];

    setGroupCount((prevGroupCount) => prevGroupCount - 1);

    setGroupPlayers((prevGroupPlayers) => {
      const updatedGroupPlayers = { ...prevGroupPlayers };
      delete updatedGroupPlayers[groupId];
      for (let i = parseInt(groupId.slice(5)) + 1; i <= groupCount; i++) {
        const currentGroup = `group${i}`;
        const previousGroup = `group${i - 1}`;
        updatedGroupPlayers[previousGroup] = updatedGroupPlayers[currentGroup];
        delete updatedGroupPlayers[currentGroup];
      }
      return updatedGroupPlayers;
    });

    if (playersToRemove) {
      setAvailablePlayers((prevAvailablePlayers) => [
        ...prevAvailablePlayers,
        ...playersToRemove,
      ]);
    }
    console.log("Group removed:", groupId);
  };

  const handleBinHover = (groupId) => {
    setBinHovered(groupId);
    console.log("Bin hovered:", groupId);
  };

  const handleBinHoverExit = () => {
    setBinHovered(null);
    console.log("Bin hover exited");
  };

  const renderGroups = () => {
    const groups = [];
    for (let i = 1; i <= groupCount; i++) {
      const groupId = `group${i}`;
      groups.push(
        <div
          key={groupId}
          className="flex items-center justify-between w-full lg:w-[512px] px-[15px] text-[16px] font-[400] border rounded-lg drop-shadow-sm h-[44px] mb-[16px] cursor-pointer relative"
          onClick={() => handleGroupClick(groupId)}
        >
          {chevronStates[groupId] ? (
            <RiArrowDownSLine className="w-6 h-6 text-gray-400 mr-2 cursor-pointer" />
          ) : (
            <RiArrowRightSLine className="w-6 h-6 text-gray-400 mr-2 cursor-pointer" />
          )}
          <span className="mr-auto">Group {i}</span>
          <RiDeleteBinLine
            className="w-4 h-4 cursor-pointer bin-icon"
            onClick={() => handleGroupRemove(groupId)}
            onMouseEnter={() => handleBinHover(groupId)}
            onMouseLeave={handleBinHoverExit}
            style={{ color: binHovered === groupId ? "red" : "gray" }}
          />
        </div>
      );

      if (chevronStates[groupId]) {
        groups.push(
          <div
            key={`${groupId}-players`}
            className="flex flex-row flex-wrap mb-11 w-[52%]"
          >
            {groupPlayers[groupId] &&
              groupPlayers[groupId].map((player, index) => (
                <div
                  key={`${groupId}-${index}`}
                  className="flex justify-between items-center bg-white border rounded-full px-3 py-1.5 mr-2 mt-2 w-[300px]"
                >
                  {player.photo && (
                    <img
                      className="size-[28px] rounded-full mr-2"
                      src={`http://localhost:8000/${player.photo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt=""
                    />
                  )}
                  {!player.photo && (
                    <img
                      className="size-[28px] rounded-full mr-2"
                      src={player_pic}
                      alt=""
                    />
                  )}
                  <span>{player.name}</span>
                  <button
                    className="ml-2 focus:outline-none"
                    onClick={() => removePlayer(groupId, index, player)}
                  >
                    <RiCloseLine className="w-4 h-4 border border-blue-500 rounded-full ml-2" />
                  </button>
                </div>
              ))}
          </div>
        );
      }
    }
    return groups;
  };

  const handleAddGroup = () => {
    if (groupCount < 5 && selectedPlayers.length > 0) {
      const newGroupCount = groupCount + 1;
      setGroupCount(newGroupCount);
      setGroupPlayers((prevGroupPlayers) => ({
        ...prevGroupPlayers,
        [`group${newGroupCount}`]: selectedPlayers.slice(),
      }));

      setSelectedPlayers([]);
      console.log("Group added:", `group${newGroupCount}`);
    }
  };

  return (
    <>
      <div className="max-w-full h-[1032px] mb-[32px] mt-[80px] lg:mt-0">
        <div className="max-w-[96%] h-auto mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:w-[90%]">
            <div className="h-[52px] flex items-center">
              <h1 className="text-[24px] font-[500]">Select and Group</h1>
            </div>
            <div className="text-[16px] text-[#667085]">
              Select 4 players and make groups to add into relevant tournaments.
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        <div className="flex flex-col max-w-[96%] mx-auto lg:flex-row">
          <div className="w-full lg:w-[35%] h-auto flex flex-col">
            <h1 className="text-[20px] font-[500]">Select Players</h1>
          </div>

          <div className="flex flex-col  lg:w-[512px] ">
            <button
              id="dropdownButton"
              ref={dropdownRef}
              className="text-gray-500 rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center border lg:w-[512px] w-full justify-between"
              type="button"
              onClick={toggleDropdown}
            >
              Select four players
              {isDropdownOpen ? (
                <RiArrowUpSLine className="w-4 h-4 lg:w-6 lg:h-6 ml-2 lg:ml-0" />
              ) : (
                <RiArrowDownSLine className="w-4 h-4 lg:w-6 lg:h-6 ml-2 lg:ml-0" />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-11 bg-white border border-gray-200 rounded-lg shadow-lg w-full lg:w-[512px] max-h-60 overflow-y-auto">
                <ul>
                  {availablePlayers.map((player, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 cursor-pointer flex flex-row"
                      onClick={() => handlePlayerSelect(player.name)}
                    >
                      {player.photo && (
                        <img
                          className="size-[28px] rounded-full mr-2"
                          src={`http://localhost:8000/${player.photo.replace(
                            /\\/g,
                            "/"
                          )}`}
                          alt=""
                        />
                      )}

                      {player.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap lg:w-[512px]">
              {selectedPlayers.map((player, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white border rounded-full px-3 py-1.5 mr-2 mt-2 w-[300px]"
                >
                  {player.photo && (
                    <img
                      className="size-[28px] rounded-full mr-2"
                      src={`http://localhost:8000/${player.photo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt=""
                    />
                  )}
                  {!player.photo && (
                    <img
                      className="size-[28px] rounded-full mr-2"
                      src={player_pic}
                      alt=""
                    />
                  )}
                  <span>{player.name}</span>
                  <button
                    className="ml-2 focus:outline-none"
                    onClick={() => removePlayer(null, index, player)}
                  >
                    <RiCloseLine className="w-4 h-4 border border-blue-500 rounded-full ml-2" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end mt-4 lg:w-[512px]">
              <button className="text-gray-700 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 mr-2">
                Cancel
              </button>
              <button
                className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 mr-2"
                onClick={handleAddGroup}
              >
                Add Group
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>

        <div className="max-w-[96%] mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-[35%] h-[60px] flex flex-row">
            <h1 className="text-[20px] font-[500]">All Groups</h1>
          </div>
          <div className="w-full lg:w-[65%] flex flex-col">
            {renderGroups()}
            <div className="flex justify-center lg:justify-end w-full lg:w-[512px] text-[14px]">
              <button
                className="w-full lg:w-[220px] h-[40px] rounded-lg bg-blue-500 hover:bg-blue-700 text-white flex justify-center items-center"
                onClick={handleAddToTournament}
              >
                Add Groups to a Tournament
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <Popup
          onClose={() => setIsPopupOpen(false)}
          onAdd={(selectedTournament) => {
            // Call the API to insert the group data into the database
            axios
              .post("http://localhost:9000/groups", {
                // Assuming the selectedTournament contains the ID of the selected tournament
                tournament_id: selectedTournament.tournament_id,
                groups: groupPlayers,
              })
              .then((response) => {
                console.log("Groups added to tournament:", response.data);
                // Optionally, perform any further actions after the groups are added
              })
              .catch((error) => {
                console.error("Error adding groups to tournament:", error);
              });
          }}
          groupPlayers={groupPlayers}
        />
      )}
    </>
  );
};

export default Group_Players;
