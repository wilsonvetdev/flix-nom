import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const SearchForm = props => {

    const [input, setInputValue] = useState('')

    const handleChange = (event) => { 
        // Update state 
        setInputValue(event.target.value)
    }

    const doTheSearch = (event) => {
        console.log(event.target.value)
    }

    return (
        <Form onChange={doTheSearch}>
        <Form.Input type="search"
            onChange={handleChange}
            name="search"
            placeholder="Search for movies..."
        />
        <Button type="submit" id="submit">search</Button>
        </Form>
    )
}

export default SearchForm