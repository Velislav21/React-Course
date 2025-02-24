import { useCallback, useEffect, useState } from "react";



async function request(url, config) {
    const response = await fetch(url, config);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Request failed!')
    }

    return data;
}


export default function useFetch(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function clearData() {
        setData(initialData)
    }

    const sendRequest = useCallback(async function sendRequest(data) {

        setIsLoading(true);

        try {
            const responseData = await request(url, {...config, body: data});
            setData(responseData);
        } catch (err) {

            setError(err.message || "Something went wrong!");
        }

        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if (config && (!config.method || config.method === 'GET') || !config) {
            sendRequest();
        }
    }, [sendRequest, config])

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }

}