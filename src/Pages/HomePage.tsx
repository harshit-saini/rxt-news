import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Highlights from "../Components/Highlights";
import CategoriesBar from "../Components/CategoriesBar";
import Post from "../Components/Post";
import Http from "../util/Http";

const HomePage = () => {
  const [everythingFromSource, setEverythingFromSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data2 = await Http.get("everything?sources=abc-news");
      setEverythingFromSource(data2.data.articles);
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Highlights />
      <div className="sticky top-0 bg-white py-1">
        <CategoriesBar />
      </div>
      <div className="2xl:container columns-2xs gap-4 mb-8">
        {everythingFromSource.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
