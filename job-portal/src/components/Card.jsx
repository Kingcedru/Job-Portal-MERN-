import React from "react";

export default function Card({ data }) {
  const {
    companyName,
    companyLogo,
    minPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
}
