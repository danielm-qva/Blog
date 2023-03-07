import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { notLoadginApp, setLoadingApp } from "../redux/slice/sliceApp";


export const useFecht = (url: string) => {
  const dispacht = useDispatch();
  const loading = useSelector((store: any) => store.app.Loadingapp);
  const [error, setError] =  useState("")
  const [data, setData] =  useState([])
  const [abort , setAbort] = useState(null);

  const abortController = new AbortController();

    useEffect(() => {
        dispacht(setLoadingApp())
          fetch(url).
            then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error)).
            finally(() => dispacht(notLoadginApp()))
            return () => abortController.abort();
    },[])

    const handelCancelRequest = () => {
        if(abort !== null) {
            abortController.abort();
            setError("Request Cancelled")
        }

    }  

    return {error , data , handelCancelRequest , loading};
}