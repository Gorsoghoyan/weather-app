import { useRef } from "react";

export const useSearchAndUnits = (units, setUnits, setQuery) => {
  const inputRef = useRef(null);

  const handleCityChange = (e) => {
    e.preventDefault();
    const value = inputRef.current.value; 

    value && setQuery({ q: value });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name;

    units !== selectedUnit && setUnits(selectedUnit);
  };

  return {
    inputRef,
    handleCityChange,
    handleUnitsChange
  };
};