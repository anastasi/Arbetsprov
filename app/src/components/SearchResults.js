import React from 'react'

const SearchResults = ({ results, addToHistory }) => {
    const resultsList = results.length > 0 ? (
        results.map(result=>{
            return(
                <li className="SearchResultItem" onClick={() => {addToHistory(result.id)}} key={result.id}><span>{result.title}</span></li>
            )
        })
    ) : null

  return (
    <div className="ResultsWrap">
        {results.length > 0 &&
            <ul className="SearchResultsList">
                {resultsList}
            </ul>
        }
    </div>
  )
}


export default SearchResults