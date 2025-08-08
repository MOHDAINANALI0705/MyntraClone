import BagSummary from "../component/bagSummary";
import BagItem from "../component/bagItem";
import { useSelector } from "react-redux";

const bag = () => {
  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store => store.item);
  const finalitem = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalitem.map(item => <BagItem item={item} ></BagItem>
          )}
        </div>
        <BagSummary></BagSummary>
        <div className="bag-summary">
        </div>

      </div>
    </main>
  );
}


export default bag;