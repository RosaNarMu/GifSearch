import { useState } from "react"


export default function useFetchGifs() {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setState(
            {
                data: [1, 2, 3, 4, 5],
                loading: false
            }
        )
    }, 3000);

    return state;
}