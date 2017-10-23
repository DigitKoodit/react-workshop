import React, { Component } from 'react';
import CommentView from './CommentView';
import GroupView from './GroupView';

class GuildView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFreshman: null
    };
  }

  toggleSelectedFreshman(selection) {
    const { selectedFreshman } = this.state;

    if (selectedFreshman || !selection) {
      return this.setState({ selectedFreshman: null });
    }

    return this.setState({ selectedFreshman: selection });
  }

  render() {
    const { state, props } = this;
    const { selectedFreshman } = state;
    const { data } = props;

    return selectedFreshman
      ? <CommentView
        freshman={selectedFreshman}
        callback={ () => this.toggleSelectedFreshman() }        
      />
      : data.map((group, i) =>
        <GroupView
          key={i}
          groupData={group}
          viewToggle={ selection => this.toggleSelectedFreshman(selection) }
        />
      );
  }
}

export default GuildView;