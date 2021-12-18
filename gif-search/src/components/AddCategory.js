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
            setCategories(categories => ([...categories, inputValue])
            )
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder='Introduce tu búsqueda aquí'
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