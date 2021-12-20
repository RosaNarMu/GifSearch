import { useEffect, useState } from "react"
import getGifs from "../functions/getGIfs";


export default function useFetchGifs(category) {

    const [state, setState] = useState({
        images: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(element => {
                setState({
                    images: element,
                    loading: false
                });
            })

    }, [category])

    return state;
}