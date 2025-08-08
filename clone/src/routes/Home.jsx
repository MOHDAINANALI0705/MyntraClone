import { useSelector } from "react-redux";
import HomeItem from "../component/HomeItem"
import { IoHome } from "react-icons/io5";

const Home = () => {
  const Products = useSelector((store) => store.item);

  return (
    <>
      <main>
        <div className="items-container">
          {Products.map(Product => <HomeItem key={Product.id} item={Product} />

          )}

        </div>
      </main>
    </>
  )
}

export default Home;