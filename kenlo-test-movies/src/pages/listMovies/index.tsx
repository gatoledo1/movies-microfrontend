import React, { useEffect, useState, lazy, Suspense, useRef, useMemo } from "react";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import MoviesList from "../../components/MoviesList";
import Loader from "../../components/Loader";
import { getMovies } from "../../services/getMovies";
import { useFavorites } from "../../utils/useFavorites";
import { InView } from "react-intersection-observer";
import { DataRequest } from "../../types/DataRequest";

interface ComponentTypes {
  filter?: string;
  header: string;
}

//@ts-ignore
const Painel = lazy(() => import("PanelApp/Panel"));

const ContainerMovies = ({ filter, header }: ComponentTypes) => {
  const [homeData, setHomeData] = useState<DataRequest>();
  const dataMutable = useRef<DataRequest>();
  const { FavoriteData } = useFavorites();
  const [loading, setLoading] = useState(false);
  const [pageState, setPageState] = useState(1);
  const [genre, setGenre] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const memorizedListData = useMemo(() => <MoviesList data={homeData?.results} />, [homeData]);

  useEffect(() => {
    if (filter) {
      (async function fetchdata() {
        const data = await getMovies(filter, pageState);
        setHomeData(data);
        dataMutable.current = data;
      })();
    } else {
      setHomeData({ results: FavoriteData });
    }
  }, []);

  return (
    <>
      <Suspense fallback={<Loader width={50} height={50} styles={{ position: "absolute" }} />}>
        <Painel />
      </Suspense>
      <div className="container">
        {filter && (
          <>
            <Search setNewData={setHomeData} value={searchValue} setValue={setSearchValue} />
            <Filter data={dataMutable} setNewData={setHomeData} activeGenre={genre} setActiveGenre={setGenre} />
          </>
        )}
        <Header title={header} />
        {homeData?.results ? (
          memorizedListData
        ) : (
          <Loader width={140} height={140} styles={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        )}
        {loading && (
          <Loader
            width={80}
            height={80}
            styles={{ display: "flex", justifyContent: "center", alignItems: "center", marginBlock: "1rem" }}
          />
        )}
        {homeData?.results && filter && (
          <InView
            as="div"
            onChange={async (inView: any) => {
              if (inView && !searchValue) {
                setLoading(true);
                const data = await getMovies(filter, pageState + 1);
                let filtered = data?.results;
                if (genre !== 0) {
                  filtered = data?.results?.filter((movie: { genre_ids: number[] }) => movie.genre_ids.includes(genre));
                }
                setHomeData({
                  page: pageState + 1,
                  results: [...homeData?.results, ...filtered],
                  total_pages: homeData.total_pages,
                  total_results: homeData.total_results,
                });
                setPageState(pageState + 1);
                setLoading(false);
              }
            }}
          />
        )}
      </div>
    </>
  );
};

export default ContainerMovies;
