import React from 'react'
import ResultsItem from './ResultsItem'
import './Results.css'

const Results = ({ results, addToHistory }) => {
  return (
    <div>
        {results.length > 0 &&
            <div className="ResultsWrap">
                <ul className="ResultsList">
                    <ResultsItem results={results} addToHistory={addToHistory}/>
                </ul>
            </div>
        }
    </div>
  )
}

export default Results