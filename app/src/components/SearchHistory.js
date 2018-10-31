import React from 'react'
import Delete from '../img/delete.svg';

const SearchHistory = ({ history, deleteFromHistory }) => {
  const historyList = history.length ? (history.map(item => {
    return(
      <li key={item.id} className="SearchHistoryItem" >
        <div className="Container">{item.title}</div>
        <span className="DeleteBtn" onClick={()=>{deleteFromHistory(item.id)}}><img src={Delete}/></span>
      </li>
    )
  })) : null
  console.log('HiStOrY',history)
  return (
    <div className="HistoryWrap">
      {history.length > 0 &&
        <ul className="SearchHistoryList">
          {historyList}
        </ul>
      }
    </div>
  )
}

export default SearchHistory