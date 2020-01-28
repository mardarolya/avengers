import React, { ChangeEvent } from "react";

import "./Search.css";

interface SearchProps {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ placeholder, handleChange }: SearchProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
