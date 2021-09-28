import React from "react";
import moment from 'moment';
import { useDispatch } from 'react-redux';

export default function JournalEntry({id,summary,date,title,url}) {

	const momentDate = moment(data);

  const dispatch = useDispatch();

  const handleSelectNote =()=>{
    dispatch(activeNote(id,{summary,date,title,url}));
  }

  return (
    <div className="journal__entry pointer" onClick={handleSelectNote}>
      
      {
        url && (
          <div
        className="picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(`${url}`)",
        }}
      ></div>
)
      }

      <div className="body">
        <p className="title">{title}</p>
        <p className="content">{summary}</p>
      </div>
      <div className="date-box">
        <span>{ momentDate.format('dddd') }</span>
        <h4>{ momentDate.format('Do') }</h4>
      </div>
    </div>
  );
}
