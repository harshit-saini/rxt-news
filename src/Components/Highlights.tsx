import { useEffect, useState } from "react";
import axios from "axios";
import Slide from "./Slide";
import Sources from "./Sources";

import Http from "../util/Http";

const Highlights = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [everythingFromSource, setEverythingFromSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data1 = await Http.get("top-headlines?country=in");
      const data2 = await Http.get("everything?sources=abc-news");
      setTopHeadlines(data1.data.articles);
      setEverythingFromSource(data2.data.articles);
    };
    getData();
  }, []);

  return (
    <>
      <div className="2xl:container  columns-1 md:columns-2 gap-8 p-5 mb-4">
        <div className="p-2 rounded-lg bg-slate-100 h-96 mb-4 md:mb-0">
          <Slide posts={topHeadlines} />
        </div>
        <div className="p-2 rounded-lg bg-slate-400 h-96">
          <Slide posts={everythingFromSource} />
        </div>
      </div>
    </>
  );
};

export default Highlights;
