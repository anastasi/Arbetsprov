import React from 'react'

const ResultsItem = ({ results, addToHistory }) => {
    return(
        results.length > 0 ? (
            results.map(result=>{
                return(
                    <li className="ResultItem" onClick={() => {addToHistory(result.id)}} key={result.id}>
                        <span>{result.title}</span>
                    </li>
                )
            })
        ) : null
    )
}

export default ResultsItem