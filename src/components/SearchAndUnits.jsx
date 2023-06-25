import { Button, Input } from ".";
import { useSearchAndUnits } from "../hooks";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../assets/sass/searchAndUnits.module.scss";

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
    <section className={styles.container}>
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
      <div className={styles.units}>
        <Button 
          variant={"units"} 
          name={"metric"}
          disabled={units === "metric"}
          onClick={handleUnitsChange}
        >°C</Button>
        <span>/</span>
        <Button 
          variant={"units"} 
          name={"imperial"}
          disabled={units === "imperial"}
          onClick={handleUnitsChange}
        >°F</Button>
      </div>
    </section>
  );
}