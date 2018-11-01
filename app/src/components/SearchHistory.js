import React from 'react'
import Delete from '../img/delete.svg';

const SearchHistory = ({ history, deleteFromHistory }) => {
  const historyList = history.length ? (history.map(item => {
    return(
      <li key={item.id} className="SearchHistoryItem" >
  <div className="Container">
      <div className="FlexContainer">
        <div className="FlexItem">
          {item.title}
        </div>
        <div className="FlexItem">
          2018-02-22 11:00
          <span className="DeleteBtn" onClick={()=>{deleteFromHistory(item.id)}}><img src={Delete}/></span>
        </div>
      </div>
  </div>
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

