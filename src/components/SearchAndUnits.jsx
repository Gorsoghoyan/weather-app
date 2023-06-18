import Input from "./ui/Input";
import Button from "./ui/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchAndUnits } from "../hooks/useSearchAndUnits";
import s from "../assets/sass/searchAndUnits.module.scss";

export default function SearchAndUnits({
  units,
  setUnits,
  setQuery
}) {
  const { 
    inputRef,
    handleCityChange, 
    handleUnitsChange 
  } = useSearchAndUnits(
    units, 
    setUnits, 
    setQuery
  );

  return (
    <div className={s.container}>
      <form onSubmit={handleCityChange}>
        <Input
          ref={inputRef}
          variant={"searchCity"}
          placeholder={"Search by city..."}
        />
        <Button variant={"searchIcon"}>
          <AiOutlineSearch />
        </Button>
      </form>
      <div className={s.units}>
        <Button 
          variant={"units"} 
          name={"metric"}
          disabled={units === "metric"}
          onClick={handleUnitsChange}
        >°C</Button>
        <span>|</span>
        <Button 
          variant={"units"} 
          name={"imperial"}
          disabled={units === "imperial"}
          onClick={handleUnitsChange}
        >°F</Button>
      </div>
    </div>
  );
}