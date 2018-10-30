import React from 'react'

const SearchResults = ({results}) => {
    console.log('RESULTS', results)

    const resultsList = results.length > 0 ? (
        results.map(result=>{
            return(
                <li key={result.id}><span>{result.title}</span></li>
            )
        })
    ) : null

  return (
    <div>
        <ul>
            {resultsList}
        </ul>
    </div>
  )
}

export default SearchResults