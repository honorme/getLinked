import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { Landing } from "../components/landing";

const Home: NextPage = () => {
  const [add, setAdd] = useState(0);
  const num = 2;
  const letUs = useCallback(() => {
    setAdd((add) => add + 1);
  }, []);
  const runStuff = () => {
    if (num === 2) {
      setTimeout(getResponse, 1000);
    }
  };
  function getResponse() {
    alert("cool");
  }
  return <Landing />;
};

export default Home;
