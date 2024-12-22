import React from "react";
import Header from "./components/Header";
import data from "./data/data.json";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-roboto bg-[#C7D3E8]">
      <Header hero={data.hero} />
    </div>
  );
};

export default App;
