import React, { useEffect } from "react";
import { useStateValue } from "../reducers/StateProvider";
import Sidebar from "../Components/Sidebar";

function Home({ history }) {
  const [{ isLogin }, dispatch] = useStateValue();
  useEffect(() => {
    if (isLogin === true) {
      console.log(isLogin);
    } else {
      history.push("/");
      console.log(isLogin);
    }
  }, [isLogin]);
  return <Sidebar />;
}

export default Home;
