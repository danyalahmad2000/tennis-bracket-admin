import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const Delete_Tournaments = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [deletedTournamentId, setDeletedTournamentId] = useState(null);
  const [hoveredBin, setHoveredBin] = useState(null);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const tournamentsResponse = await axios.get(
          "http://localhost:10000/get-tournaments"
        );
        const tournamentsData = tournamentsResponse.data;

        console.log("Fetched tournaments:", tournamentsData);

        // Fetch groups for each tournament
        const tournamentsWithGroups = await Promise.all(
          tournamentsData.map(async (tournament) => {
            try {
              const groupsResponse = await axios.get(
                `http://localhost:10000/get-groups/${tournament.tournament_id}`
              );
              const groupsData = groupsResponse.data;
              console.log(
                "Fetched groups for tournament:",
                tournament.tournament_id,
                groupsData
              );
              return { ...tournament, groups: groupsData };
            } catch (error) {
              console.error(
                `Error fetching groups for tournament ${tournament.tournament_id}`,
                error
              );
              // If fetching groups fails, return tournament without groups
              return tournament;
            }
          })
        );

        // Fetch players for each group
        const tournamentsWithGroupsAndPlayers = await Promise.all(
          tournamentsWithGroups.map(async (tournament) => {
            try {
              const groupsWithPlayers = await Promise.all(
                tournament.groups.map(async (group) => {
                  try {
                    const playersResponse = await axios.get(
                      `http://localhost:10000/get-players/${group.group_id}`
                    );
                    const playersData = playersResponse.data;
                    console.log(
                      "Fetched players for group:",
                      group.group_id,
                      playersData
                    );
                    return { ...group, players: playersData };
                  } catch (error) {
                    console.error(
                      `Error fetching players for group ${group.group_id}`,
                      error
                    );
                    // If fetching players fails, return group without players
                    return group;
                  }
                })
              );
              return { ...tournament, groups: groupsWithPlayers };
            } catch (error) {
              console.error(
                `Error fetching groups with players for tournament ${tournament.tournament_id}`,
                error
              );
              // If fetching groups with players fails, return tournament without groups
              return tournament;
            }
          })
        );

        setTournaments(tournamentsWithGroupsAndPlayers);
      } catch (error) {
        console.error("Error fetching tournaments", error);
      }
    }

    fetchData();
  }, [deletedTournamentId]); // Include deletedTournamentId in dependency array

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleDelete = async (tournamentId) => {
    try {
      // Send request to delete tournament
      await axios.delete(
        `http://localhost:10000/delete-tournament/${tournamentId}`
      );

      // Log the success message after deletion
      console.log(`Tournament with ID ${tournamentId} deleted successfully`);

      // Update the state to mark the tournament as deleted
      setDeletedTournamentId(tournamentId);
    } catch (error) {
      console.error("Error deleting tournament", error);
    }
  };

  const handleBinHover = (tournamentId) => {
    setHoveredBin(tournamentId);
  };

  return (
    <>
      <div className="lg:w-[83%] bg-[#F9FAFB] flex flex-col mt-[120px] lg:mt-0">
        <div className="max-w-full h-[100px] my-[32px]">
          <div className="max-w-full mx-[32px] mb-[24px]">
            <h1 className="text-[30px] w-full h-full font-[500]">
              Delete Tournament
            </h1>
          </div>
          <div className="bg-gray-200 h-[1px] max-w-[96%] mx-auto my-6"></div>
        </div>

        <div className="max-w-[96%] w-full mx-auto flex flex-col lg:flex-row ">
          <div className="w-full lg:w-[35%] h-[60px] flex flex-row">
            <h1 className="text-[20px] font-[500]">All Groups</h1>
          </div>
          <div className="w-full lg:w-[65%] flex flex-col ml-2">
            {tournaments.map((tournament, index) => (
              <div key={index} className="w-full lg:w-[50%] flex flex-col mb-4">
                <div
                  className="flex justify-between items-center px-4 py-2 border rounded-lg cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  {openIndex === index ? (
                    <FaChevronDown className="cursor-pointer" />
                  ) : (
                    <FaChevronRight className="cursor-pointer" />
                  )}
                  <div className="flex flex-1 items-center justify-center">
                    {tournament.name}
                  </div>
                  <RiDeleteBin6Line
                    className="cursor-pointer"
                    onMouseEnter={() =>
                      handleBinHover(tournament.tournament_id)
                    }
                    onMouseLeave={() => setHoveredBin(null)}
                    onClick={() => handleDelete(tournament.tournament_id)}
                    style={{
                      color:
                        hoveredBin === tournament.tournament_id ||
                        deletedTournamentId === tournament.tournament_id
                          ? "red"
                          : "inherit",
                    }}
                  />
                </div>
                {openIndex === index && (
                  <div className="pl-8 flex flex-col">
                    {tournament.groups && tournament.groups.length > 0 ? (
                      tournament.groups.map((group, i) => (
                        <div key={i} className="my-2">
                          <div className="font-bold">Group {i + 1}</div>
                          <div>
                            {group.players && group.players.length > 0 ? (
                              <ul className="list-disc ml-4">
                                {group.players.map((player, j) => (
                                  <li key={j}>{player.name}</li>
                                ))}
                              </ul>
                            ) : (
                              <span> No players found</span>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>No groups found</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete_Tournaments;
