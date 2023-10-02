import {useEffect} from "react";
import useSWR from "swr";

const Request = () => {
    const getCoffees = async () => {
        const res = await fetch("http://localhost:3000/coffees");
        return await res.json();
    }
    const {data, error, isLoading} = useSWR('/coffee', getCoffees)
    // const {data,error,loading}=useRequest(getCoffees)
    useEffect(() => {
        console.log(data)
    }, [data]);
    if (error) {
        return <div>failed to load</div>;
    }
    if (isLoading) {
        return <div>loading...</div>;
    }
    return data.map((item: any) => <div>{item.brand}</div>)
}
export default Request
