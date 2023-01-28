import React, { useEffect, useState } from "react";
import Http from "../util/Http";

import ISource from "../Interface/ISource";

const Sources = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await Http.get("top-headlines/sources");
      setSources(data.data.sources);
    };

    getData();
    console.log(sources);
  }, []);

  return (
    <div className="overflow-scroll max-h-full">
      {sources.map((source: ISource) => (
        <div>{source.name} </div>
      ))}
    </div>
  );
};

export default Sources;
