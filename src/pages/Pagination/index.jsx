import { useState, useEffect } from "react";

import data from "./data/entries.json";

import chevronLeft from "./src/img/chevron--left.svg";
import chevronRight from "./src/img/chevron--right.svg";
import edit from "./src/img/edit.svg";
import sort from "./src/img/sort.svg";
import update from "./src/img/update.svg";

import "./Pagination.scss";

const capitalizeName = (name) =>
  name
    .split(" ")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join(" ");

const Entry = ({ entryData, updateEntry }) => {
  const { id } = entryData;
  const [name, setName] = useState(entryData.name);
  const [email, setEmail] = useState(entryData.email);
  const [jobTitle, setJobTitle] = useState(entryData.jobTitle);
  const [isUpdating, setIsUpdating] = useState(false);

  // useEffect(() => {
  //   const modifiedEntry = { id, name, email, jobTitle };
  //   updateEntry(id, modifiedEntry);
  // }, [jobTitle, email, jobTitle]);

  const handleUpdateClick = () => {
    const modifiedEntry = { id, name, email, jobTitle };
    updateEntry(id, modifiedEntry);
    setIsUpdating(false);
  };

  if (isUpdating)
    return (
      <tr>
        <td>{id}</td>
        <td className="name">
          <input
            type="text"
            disabled="disabled"
            name="person-name-1"
            value={capitalizeName(name)}
            onChange={(e) => setName(e.current.value)}
          />
        </td>
        <td>
          <input
            type="text"
            disabled="disabled"
            name="person-email-1"
            value={email}
            onChange={(e) => setEmail(e.current.value)}
          />
        </td>
        <td>
          <input
            type="text"
            disabled="disabled"
            name="person-title-1"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.current.value)}
          />
        </td>
        <td>
          <button
            className="update"
            name="person-update-1"
            id="personUpdate1"
            onClick={handleUpdateClick}
          >
            <img src={update} alt="Update" className="update" />
          </button>
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td className="name">
        <input
          type="text"
          disabled="disabled"
          name="person-name-1"
          value={capitalizeName(name)}
          readOnly
        />
      </td>
      <td>
        <input
          type="text"
          disabled="disabled"
          name="person-email-1"
          value={email}
          readOnly
        />
      </td>
      <td>
        <input
          type="text"
          disabled="disabled"
          name="person-title-1"
          value={jobTitle}
          readOnly
        />
      </td>
      <td>
        <button
          className="edit"
          name="person-edit-1"
          id="personEdit1"
          onClick={() => setIsUpdating(true)}
        >
          <img src={edit} alt="Edit" className="edit" />
        </button>
      </td>
    </tr>
  );
};

const Pagination = () => {
  const [entries, setEntries] = useState(data.results);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDisplayedPage, setCurrentDisplayedPage] = useState(1);

  const handlecurrentDisplayedPageChange = (e) => {
    setCurrentDisplayedPage(e.current.value);
  };

  const handlecurrentDisplayedPageBlur = () => {
    console.log("change to page ", currentDisplayedPage);
    console.log(currentPage);
  };

  const updateEntry = (entryId, modifiedEntry) => {
    const filteredEntries = entries.filter(
      (entry) => entry.id !== modifiedEntry.id
    );
    setEntries([...filteredEntries, modifiedEntry]);
  };

  return (
    <div className="Pagination">
      <div className="wrapper">
        <table cellPadding="0" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="header__id">
                ID
                <button className="sort ascending">
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="ascending"
                      d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                    />
                  </svg>
                </button>
              </th>
              <th>
                Name
                <button className="sort">
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="ascending"
                      d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                    />
                  </svg>
                </button>
              </th>
              <th>
                Email Address
                <button className="sort">
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="ascending"
                      d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                    />
                  </svg>
                </button>
              </th>
              <th>
                Job Title
                <button className="sort">
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="ascending"
                      d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                    />
                  </svg>
                </button>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {entries.map((entryData) => (
              <Entry
                key={entryData.id}
                entryData={entryData}
                updateEntry={updateEntry}
              />
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="2">30 Results</td>
              <td colSpan="3">
                <div className="pagination edit">
                  <button className="previous" id="previous">
                    <img src={chevronLeft} alt="Previous" />
                  </button>

                  <input
                    type="text"
                    name="currentPage"
                    value={currentDisplayedPage}
                    id="currentPage"
                    onChange={handlecurrentDisplayedPageChange}
                    onBlur={handlecurrentDisplayedPageBlur}
                  />

                  <span>&nbsp;of&nbsp;</span>
                  <span id="totalPages">3</span>

                  <button className="next" id="next">
                    <img src={chevronRight} alt="Next" />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Pagination;
