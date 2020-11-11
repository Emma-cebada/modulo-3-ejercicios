import React from 'react';
import Club from './Club'

class ClubList extends React.Component {
  render() {
    console.log(this.props.clubs);

    const items = this.props.clubs.map(club => {
      return (
        <li key={club.id} className="card">
          <Club club={club} />
        </li>
      )
    });

    return (
      <div>Club List
        <ul className="cards">{items}</ul>
      </div>
    )
  }
}

export default ClubList;