import { useEffect, useState } from "react";

export default function useData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Fetching went wrong");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [url]); // run when `url` changes

    return [data, loading, error];
}
