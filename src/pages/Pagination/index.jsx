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
  const [displayedEntries, setDisplayedEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDisplayedPage, setCurrentDisplayedPage] = useState("1");
  const [sortingMethod, setSortingMethod] = useState("idAscending");

  const lastPageIndex = Math.ceil(entries.length / 10);

  const handlecurrentDisplayedPageChange = (e) => {
    setCurrentDisplayedPage(e.target.value);
  };

  const handlecurrentDisplayedPageBlur = (e) => {
    const currentValue = Number(e.target.value) || currentPage;

    if (currentValue <= 0) {
      setCurrentDisplayedPage(1);
      setCurrentPage(1);
    } else if (currentValue > lastPageIndex) {
      setCurrentDisplayedPage(lastPageIndex);
      setCurrentPage(lastPageIndex);
    } else {
      setCurrentDisplayedPage(currentValue);
      setCurrentPage(currentValue);
    }
  };

  const updateEntry = (entryId, modifiedEntry) => {
    const filteredEntries = entries.filter(
      (entry) => entry.id !== modifiedEntry.id
    );
    setEntries([...filteredEntries, modifiedEntry]);
  };

  const sortEntriesBy = (filter, isAscending) => {
    const sortedEntries = [...entries].sort((a, b) =>
      isAscending
        ? a[`${filter}`] > b[`${filter}`]
          ? 1
          : -1
        : b[`${filter}`] > a[`${filter}`]
        ? 1
        : -1
    );

    const newMethod = filter + (isAscending ? "Ascending" : "Descending");
    setSortingMethod(newMethod);
    setEntries(sortedEntries);
    setCurrentPage(1);
    setCurrentDisplayedPage(1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      setCurrentDisplayedPage(`${previousPage}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < lastPageIndex) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      setCurrentDisplayedPage(`${nextPage}`);
    }
  };

  useEffect(() => {
    setDisplayedEntries(
      entries.slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [entries, currentPage]);

  return (
    <div className="Pagination">
      <div className="wrapper">
        <table cellPadding="0" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="header__id">
                ID
                <button
                  className={`sort ${
                    sortingMethod === "idAscending"
                      ? "ascending"
                      : sortingMethod === "idDescending"
                      ? "descending"
                      : ""
                  }`}
                >
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
                      onClick={() => sortEntriesBy("id", true)}
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                      onClick={() => sortEntriesBy("id", false)}
                    />
                  </svg>
                </button>
              </th>
              <th>
                Name
                <button
                  className={`sort ${
                    sortingMethod === "nameAscending"
                      ? "ascending"
                      : sortingMethod === "nameDescending"
                      ? "descending"
                      : ""
                  }`}
                >
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
                      onClick={() => sortEntriesBy("name", true)}
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                      onClick={() => sortEntriesBy("name", false)}
                    />
                  </svg>
                </button>
              </th>
              <th>
                Email Address
                <button
                  className={`sort ${
                    sortingMethod === "emailAscending"
                      ? "ascending"
                      : sortingMethod === "emailDescending"
                      ? "descending"
                      : ""
                  }`}
                >
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
                      onClick={() => sortEntriesBy("email", true)}
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                      onClick={() => sortEntriesBy("email", false)}
                    />
                  </svg>
                </button>
              </th>
              <th>
                Job Title
                <button
                  className={`sort ${
                    sortingMethod === "jobTitleAscending"
                      ? "ascending"
                      : sortingMethod === "jobTitleDescending"
                      ? "descending"
                      : ""
                  }`}
                >
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
                      onClick={() => sortEntriesBy("jobTitle", true)}
                    />
                    <path
                      className="descending"
                      d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                      onClick={() => sortEntriesBy("jobTitle", false)}
                    />
                  </svg>
                </button>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {displayedEntries.map((entryData) => (
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
                  <button
                    className="previous"
                    id="previous"
                    onClick={handlePreviousClick}
                  >
                    <img src={chevronLeft} alt="Previous" />
                  </button>

                  <input
                    type="text"
                    name="currentPage"
                    value={currentDisplayedPage}
                    id="currentPage"
                    onChange={(e) => handlecurrentDisplayedPageChange(e)}
                    onBlur={(e) => handlecurrentDisplayedPageBlur(e)}
                  />

                  <span>&nbsp;of&nbsp;</span>
                  <span id="totalPages">3</span>

                  <button className="next" id="next" onClick={handleNextClick}>
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
