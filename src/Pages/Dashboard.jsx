import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Group from "../Components/Group";

const Dashboard = () => {
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUser] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem("option");
    console.log(storedValue);
    setSelectedOption(storedValue);
  }, []);

  useEffect(() => {
    if (selectedOption !== "") localStorage.setItem("option", selectedOption);
  }, [selectedOption]);

  const priority = {
    Urgent: 4,
    High: 3,
    Medium: 2,
    Low: 1,
    "No priority": 0,
  };

  const status = {
    Backlog: "Backlog",
    Todo: "Todo",
    "In Progress": "In progress",
    Done: "Done",
    Cancelled: "Cancelled",
  };

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setUser(response.data.users);
      setIsLoading(false);
      console.log(data);
      //d
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Handle error as needed
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {" "}
            <Navbar
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            {(selectedOption === "status" || selectedOption === "") && (
              <div className="group-container">
                {Object.entries(status).map(([key, value]) => (
                  <>
                    <Group
                      list={data.tickets.filter(
                        (item) => item.status === value
                      )}
                      name={key}
                    />
                  </>
                ))}
              </div>
            )}
            {selectedOption === "priority" && (
              <div className="group-container">
                {Object.entries(priority).map(([key, value]) => (
                  <>
                    <Group
                      list={data.tickets.filter(
                        (item) => item.priority === value
                      )}
                      name={key}
                    />
                  </>
                ))}
              </div>
            )}
            {selectedOption === "user" && (
              <div className="group-container">
                {users.map((item1) => (
                  <>
                    <Group
                      list={data.tickets.filter(
                        (item) => item.userId === item1.id
                      )}
                      name={item1.name}
                    />
                  </>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
