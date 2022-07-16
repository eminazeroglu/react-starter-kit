import {useCallback, useEffect, useState} from "react";
import axios from "axios";



const useFetch = (url) => {

    const [fetchedData, setFetchedData] = useState({
        data: [],
        isLoading: true,
        error: false
    });

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            if (data) {
                setFetchedData({
                    data: data.result || data,
                    isLoading: false,
                    error: false
                })
            }
        } catch (e) {
            if (axios.isCancel(e)) {
                console.log('Fetching data aborted');
            } else {
                console.log('Error occured', e);
            }
            setFetchedData({
                data: [],
                isLoading: false,
                error: true
            })
        }
    }, [url])

    useEffect( () => {
        fetchData();
    }, [fetchData]);

    const {data, isLoading, error} = fetchedData;
    return {data, isLoading, error}
}

export default useFetch;