import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  console.log(url);

  
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      Movix App
       {url.total_pages} 
    </div>
  );
}

export default App;

// https://gist.github.com/ShariqAnsari88/09dbadfd81c41b399a30f6eb9f1f9548
