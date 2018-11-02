import React from 'react'
import Delete from '../img/delete.svg'
import moment from 'moment'

const HistoryItem = ({ history, deleteFromHistory }) => {
    return(
        history.length ? (history.map(item => {
            return(
              <li key={item.id} className="HistoryItem" >
                <div className="Container">
                    <div className="FlexContainer">
                      <div className="FlexItem HistoryTitle">
                        {item.title}
                      </div>
                      <div className="FlexItem TimeStamp">
                        <span className="Date">{moment().format('YYYY-MM-DD')}</span>
                        <span className="Time">{moment().format('h:mm')}</span>
                        <span className="DeleteBtn" onClick={()=>{deleteFromHistory(item.id)}}>
                            <img src={Delete} />
                        </span>
                      </div>
                    </div>
                </div>
              </li>
            )
          })) : null
    )
}

export default HistoryItem