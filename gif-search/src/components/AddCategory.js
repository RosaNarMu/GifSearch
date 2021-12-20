import { useState } from "react"
import PropTypes from 'prop-types'


export default function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('')

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories([inputValue]);

        };

    };


    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    className='gifTitle animate__animated animate__pulse animate__delay-1s'
                    type="text"
                    placeholder='Search here'
                    value={inputValue}
                    onChange={handleInputChange}

                />
            </form>

        </>
    )
}

AddCategory.prototypes = {
    setCategories: PropTypes.func.isRequired
}