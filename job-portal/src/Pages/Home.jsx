import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "../components/Jobs";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  // handle input changes
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  

  // ---------------- Radio based filtering -----------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

   // ---------------- button based filtering -----------------
   const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  // main function
  const filteredData = (jobs, selected, query)=>{
    let filteredJobs = jobs

    // filtering input items
    if(query){
      filteredJobs = filteredItems
    }

    // category filtering
    if(selected){
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) =>(
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ))
      console.log(filteredJobs)
    }
    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs,selectedCategory,query)

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="">
        <Jobs result={result}/>
      </div>
    </div>
  );
}
