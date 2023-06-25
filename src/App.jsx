import { lazyLoad } from "./core";
import { useApp } from "./hooks";
import styles from "./assets/sass/app.module.scss";

const PageHome = lazyLoad("PageHome");
const PageError = lazyLoad("PageError");
const PageLoading = lazyLoad("PageLoading");

export default function App() {
  const {
    error,
    loading,
    weather,
    units,
    setUnits,
    setQuery,
    formatBackground
  } = useApp();

  return (
    <div
      className={styles.mainContainer}
      style={{ background: formatBackground() }}
    >
      {loading ? (
        <PageLoading />
      ) : error ? (
        <PageError />
      ) : weather ? (
        <PageHome 
          weather={weather} 
          units={units} 
          setUnits={setUnits} 
          setQuery={setQuery} 
        />
      ) : null}
    </div>
  );
}