//@ts-ignore
import React, { useEffect, useState, lazy, Suspense } from 'react'

import Search from '../../components/Search'
import Filter from '../../components/Filter'
import Header from '../../components/Header'
import MoviesList from '../../components/MoviesList'
import { getMovies } from '../../services/getMovies'

interface DataRequest {
  page: number,
  results: Array<any>,
  total_pages: number,
  total_results: number,
}

//@ts-ignore
const Painel = lazy(() => import('PainelApp/Painel'));

const ContainerMovies = ({filter, header}: {filter: string, header: string}) => {
  const [homeData, setHomeData] = useState<DataRequest>()

  useEffect(() => {
    (async function fetchdata() {
      const data = await getMovies(filter, 1);
      setHomeData(data);
    })()
  }, [filter])

  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <Painel />
      </Suspense>
      <div className="container">
        <Search setNewData={setHomeData} />
        <Filter setNewData={setHomeData} data={homeData?.results} />
        <Header title={header} />
        {homeData?.results ? <MoviesList data={homeData.results} /> : <p className="info">Nenhum filme para exibir</p>}
      </div>
    </>
  )
}

export default ContainerMovies