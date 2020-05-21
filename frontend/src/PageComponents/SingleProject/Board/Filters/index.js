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

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-1/4 mr-2">
          <Input
            type="text"
            name="search"
            placeholder="Search"
            ref={searchRef}
            onChange={() => handleOnFilter({ title: searchRef.current.value })}
          />
        </div>

        <AssignedTo
          handleOnFilter={handleOnFilter}
          users={users}
          reset={filter.assignee}
        />

        <div>
          {(filter.title || filter.assignee) && (
            <label
              className="text-white font-bold cursor-pointer"
              onClick={handleOnReset}
            >
              Clear
            </label>
          )}
        </div>
      </div>
    </>
  );
};

export default BoardFilters;
