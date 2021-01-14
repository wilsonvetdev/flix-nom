import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const SearchForm = props => {

    const [input, setInputValue] = useState('')

    const handleChange = (event) => { 
        // Update state 
        setInputValue(event.target.value)
        props.doSearch(event.target.value)
    }

    return (
        <Form>
        <Form.Input type="search"
            onChange={handleChange}
            name="search"
            value={input}
            placeholder="Search for movies..."
        />
        </Form>
    )
}

export default SearchForm