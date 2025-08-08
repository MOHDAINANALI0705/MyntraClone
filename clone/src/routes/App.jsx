import { Outlet } from "react-router"
import Footer from "../component/Footer"
import Header from "../component/Header"
import FetchItems from "../component/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../component/LoadingSpinner"

function App() {
  const FetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems />
      {FetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer></Footer>
    </>
  )
}

export default App
