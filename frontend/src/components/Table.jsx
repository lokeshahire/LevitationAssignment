import React, { useState, useEffect } from "react";
import axios from "axios";

function SubmissionTable() {
  const [submissions, setSubmissions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Fetch submissions from the server
    axios
      .get("https://levitationbackend.onrender.com/form")
      .then((response) => {
        setSubmissions(response.data.data);
        if (!searchText) {
          setFilteredSubmissions(response.data.data);
        }
      });
  }, [searchText]); // Trigger useEffect when searchText changes

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);

    if (!searchTerm) {
      setFilteredSubmissions(submissions); // Show all submissions when search text is empty
    } else {
      const filtered = submissions.filter((submission) =>
        submission.name.toLowerCase().includes(searchTerm)
      );
      setFilteredSubmissions(filtered);
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Submission Table</h2>
      <input
        type="text"
        placeholder="Search by name"
        className="px-4 py-2 border rounded-lg mb-4 w-full"
        value={searchText}
        onChange={handleSearch}
      />
      <div className="flex space-x-4 mb-4">
        <label className="text-gray-600">Start Date:</label>
        <input
          type="date"
          className="px-4 py-2 border rounded-lg"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label className="text-gray-600">End Date:</label>
        <input
          type="date"
          className="px-4 py-2 border rounded-lg"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700 font-semibold">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission) => (
            <tr
              key={submission._id}
              className="border-t border-gray-300 hover:bg-gray-100"
            >
              <td className="py-3 px-4">{submission.name}</td>
              <td className="py-3 px-4">{submission.email}</td>
              <td className="py-3 px-4">{formatDate(submission.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionTable;
