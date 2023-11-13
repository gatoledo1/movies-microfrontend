//@ts-ignore
import React, { useEffect, useState, lazy, Suspense, useRef } from 'react'

import Search from '../../components/Search'
import Filter from '../../components/Filter'
import Header from '../../components/Header'
import MoviesList from '../../components/MoviesList'
import { getMovies } from '../../services/getMovies'
import { useFavourites } from '../../utils/useFavorites'

interface DataRequest {
  page?: number,
  results: Array<any>,
  total_pages?: number,
  total_results?: number,
}

//@ts-ignore
const Painel = lazy(() => import('PanelApp/Panel'));

const ContainerMovies = ({filter, header}: {filter: string, header: string}) => {
  const [homeData, setHomeData] = useState<DataRequest>()
  const dataMutable = useRef<DataRequest>()
  const { favourites } = useFavourites()

  useEffect(() => {
    if(filter) {
      (async function fetchdata() {
        const data = await getMovies(filter, 1);
        setHomeData(data);
        dataMutable.current = data
      })()
    } else {
      setHomeData({results: favourites});
    }
  }, [])

  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <Painel />
      </Suspense>
      <div className="container">
        {
          filter && (
            <>
              <Search setNewData={setHomeData} />
              <Filter data={dataMutable} setNewData={setHomeData} />
            </>
          )
        }
        <Header title={header} />
        {homeData?.results ? <MoviesList data={homeData.results} /> : <p className="info">Nenhum filme para exibir</p>}
      </div>
    </>
  )
}

export default ContainerMovies