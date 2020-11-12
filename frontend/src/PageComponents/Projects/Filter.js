import React, { useRef } from "react";
import { Input } from "shared/components/Input";
import { debounce } from "lodash";

const Filter = ({ onFilter }) => {
  const searchRef = useRef();

  const handleOnFilter = debounce((val) => {
    onFilter(val);
  }, 1200);

  return (
    <Input
      type="text"
      name="search"
      placeholder="Search"
      ref={searchRef}
      onChange={() => handleOnFilter(searchRef.current.value)}
    />
  );
};

export default Filter;
