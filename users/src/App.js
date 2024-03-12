import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");

  const getData = async () => {
    try {
      const { data } = await axios("https://randomuser.me/api/");
      setUser(data.results[0]);
      // const res = await fetch("https://randomuser.me/api/");
      // const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //?componentDidMount
    getData();
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
