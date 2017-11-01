import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentView.css';

class CommentView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }

  onTextInput(event) {
    const value = event.target.value;
    this.setState({ comment: value })
  }

  sendComment() {
    const { freshman, callback } = this.props;
    const { comment } = this.state;

    return new Promise((resolve, reject) => {
      console.log(freshman, comment, callback);
      resolve();
    }).then(() => callback());
  }

  render() {
    const { freshman } = this.props;

    return (
      <div className="CommentView">
        <h3>{freshman.name} - {freshman.chronicles} kirjoitusta</h3>
        <textarea
          onChange={ (event) => this.onTextInput(event) }
        />
        <button onClick={ () => this.sendComment() }>
          Tallenna kroniikka
        </button>
      </div>
    );
  }
}

CommentView.propTypes = {
  freshman: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
}

export default CommentView;