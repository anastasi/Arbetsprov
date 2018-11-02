import React from 'react'
import HistoryItem from './HistoryItem'
import './History.css'

const History = ({ history, deleteFromHistory }) => {
  return (
    <div className="HistoryWrap">
      {history.length > 0 &&
        <ul className="HistoryList">
          <HistoryItem history={history} deleteFromHistory={deleteFromHistory} />
        </ul>
      }
    </div>
  )
}

export default History

