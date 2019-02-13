import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({ data }) => 
  !data.length ? <p> No data to show </p> 
    : (
      <div className="posts">
        <p>Total Posts: {data.length}</p>
        {console.log(Object.entries(data[0]))}
        {Object.entries(data[0]).map((p, i) => {
          console.log(p[0][1]),
          <h1 key={i}>{p[0]}</h1>
        })}
      </div>
    )


export default Posts;