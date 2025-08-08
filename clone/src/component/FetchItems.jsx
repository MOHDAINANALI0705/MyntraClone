import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../store/itemSlice";
import { fetchStatusActions } from "../../store/fetchStatusSlice";
import { useEffect } from "react";

const FetchItems = () => {
  const FetchStatus = useSelector(store => store.fetchStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    if (FetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingstarted())
    fetch("http://localhost:8000/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {

        dispatch(fetchStatusActions.markfetchDone())
        dispatch(fetchStatusActions.markFetchinfFinished())
        dispatch(itemActions.addInitialItem(items[0]))
      });

    return () => {
      controller.abort();
    };
  }, [FetchStatus]);

  return (<></>)

}

export default FetchItems;