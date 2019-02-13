import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    }
  }

  componentDidMount() {
    axios.get('api/posts/')
      .then(response => {
        console.log(response)
        this.setState({ data: response.data, loaded: true  })
      })
      .catch(err => {
        console.log(err)
      })

    // fetch("api/post")
    //   .then(response => {
    //     if (response.status !== 200) {
    //       return this.setState({ placeholder: "Something went wrong :(" });
    //     }
    //     return response.json();
    //   })
    //   .then(data => this.setState({ data: data, loaded: true}))
  }

  render() {

    const { data, loaded, placeholder } = this.state;

    return (
      loaded ? <Posts data={data} /> : <p>{placeholder}</p>
    );
  }

}

export default DataProvider;