import React from 'react'

const SearchHistory = ({ history, deleteFromHistory }) => {
  const historyList = history.length ? (history.map(item => {
    return(
      <li key={item.id} onClick={()=>{deleteFromHistory(item.id)}}>{item.title}</li>
    )
  })) : null
  console.log('HiStOrY',history)
  return (
    
    <div className="FullWidth">
      <div className="Container">
        <ul>
           {historyList}
        </ul>
      </div>
    </div>
  )
}

export default SearchHistory