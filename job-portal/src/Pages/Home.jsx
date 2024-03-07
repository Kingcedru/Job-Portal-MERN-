import { useState } from "react";
import Banner from "../components/Banner";

export default function Home() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  );
}
