import React from 'react';
import PropTypes from 'prop-types';
import './GroupView.css';

const GroupView = (props) => {
  const { groupData, viewToggle } = props;
  const { tutors, students } = groupData;

  return(
    <div className="GroupView">
      <h3>{tutors}</h3>
      <ul className="GroupView-Students">
        { students.map((student, i) =>
        <li key={i}>
          <a onClick={ () => viewToggle(student) }>{student.name}</a>
        </li>,
        ) }
      </ul>
    </div>
  );
}

GroupView.propTypes = {
  groupData: PropTypes.object.isRequired,
  viewToggle: PropTypes.func.isRequired,
};

export default GroupView;