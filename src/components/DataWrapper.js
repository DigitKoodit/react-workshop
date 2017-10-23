import React, { Component } from 'react';

const fakeData = [
  {
    tutors: "Piia ja Santeri-Korianteri",
    students: [
      {
        name: "Sakari Villapaita",
        chronicles: 5
      },
      {
        name: "Sissi Juusto",
        chronicles: 12
      }
    ]
  }
];

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

      setTimeout(() => {
        this.setState({
          loading: false,
          data: fakeData
        });
      }, 5000);
    }
  }

  componentWillUnmount() {
    const { route } = this.props;
    console.log(`DataWrapper for ${route.guild} will unmount`);
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
