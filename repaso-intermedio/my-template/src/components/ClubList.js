import React from 'react';
import Club from './Club'

class ClubList extends React.Component {
  render() {
    console.log(this.props.clubs);

    const items = this.props.clubs.map((club, index) => {
      return (
        <li key={club.id} id={index} className="card" title={club.name}>
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