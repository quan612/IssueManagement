import React, { useState, useRef } from "react";
import { Input } from "shared/components/Input";
import AssignedTo from "./AssignedTo";

const BoardFilters = ({ onFilter, users }) => {
  const searchRef = useRef();
  const [filter, setFilter] = useState({ title: "", assignee: null });

  const handleOnFilter = (filterObj) => {
    const newFilter = { ...filter, ...filterObj };
    onFilter(newFilter);
    setFilter(newFilter);
  };

  const handleOnReset = () => {
    setFilter({ title: "", assignee: null });
    onFilter({});
    searchRef.current.value = "";
  };

  const handleRenderFilter = () => {
    if (filter.assignee || filter.title) {
      return (
        <div>
          <label className="text-white font-bold cursor-pointer hover:text-blue-500" onClick={handleOnReset}>
            Clear
          </label>
        </div>
      );
    } else return null;
  };

  return (
    <>
      <div className=" mr-2">
        <Input
          type="text"
          name="search"
          placeholder="Search"
          ref={searchRef}
          onChange={() => handleOnFilter({ title: searchRef.current.value })}
        />
      </div>

      <AssignedTo handleOnFilter={handleOnFilter} users={users} reset={filter.assignee} />

      {/* <div style={{ width: "100px" }}>{handleRenderFilter()}</div> */}
    </>
  );
};

export default BoardFilters;
