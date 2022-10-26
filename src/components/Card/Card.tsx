import moment from "moment";
import React from "react";
import { ICommitInfo } from "../../interfaces/ICommitInfo";
import "./Card.css";


export const Card = React.memo((props: ICommitInfo) => {
  const { message, date, userName } = props;
  return (
    <div className="card">
      <div className="message">{message}</div>
      <div className="description">
        <span>
          {`${moment(date).format("MMMM Do, h:mm A")}`}
          <span style={{ fontWeight: 600 }}>{` by ${userName}`}</span>
        </span>
      </div>
    </div>
  );
});
