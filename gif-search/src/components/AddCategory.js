import { useState } from "react"


export default function AddCategory() {

    const [inputValue, setInputValue] = useState('Hola mundo')

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submit');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>

        </>
    )
}
