import React, { useState } from "react";
import "./ListItem.css";
import BucketLogo from "../../assets/icons/bucket.png";

export function ListItem({ data, removeTask, marktodoDone }) {
  return (
    <div className="itemWrapper">
      <input
        type="checkbox"
        checked={data.done}
        onChange={() => marktodoDone(data.id)}
      />
      <div className="itemText">{data.title}</div>
      <div className="bucketHold" onClick={() => removeTask(data.id)}>
        <img className="bucketIcon" src={BucketLogo} alt="bucket Icon" />
      </div>
    </div>
  );
}

/* export class ListItem extends React.Component {
  render() {
    return (
      <div className="itemWrapper">
        <input type="checkbox" checked={this.props.data.done} />
        <div className="itemText">{this.props.data.title}</div>
        <div className="bucketHold">
          <img className="bucketIcon" src={BucketLogo} alt="bucket Icon" />
        </div>
      </div>
    );
  }
} */
