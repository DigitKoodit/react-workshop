import React, { Component } from 'react';
import fetchData from '../core/api';

class DataWrapper extends Component {
  constructor(props) {
    super(props);
    const { route } = props;

    this.state = {
      loading: !!route.dataLoader,
      data: null,
    }
  }

  componentWillMount() {
    console.log('DataWrapper is mounting.');
    const { route } = this.props;

    if (route.dataLoader) {
      route.dataLoader();

      fetchData()
        .then((freshmanData) => {
          setTimeout(() => {
            this.setState({
              loading: false,
              data: freshmanData
            });
          }, 1000);
        });
    }

  }

  componentWillUnmount() {
    this.setState(null);
  }

  render() {
    console.log('DataWrapper is rendering');
    const { data, loading } = this.state;
    const { route } = this.props;

    if (loading) return <h4>Data is still loading</h4>;

    return <route.component guild={route.guild} data={data} routes={route.routes} />
  } 
}

export default DataWrapper;
