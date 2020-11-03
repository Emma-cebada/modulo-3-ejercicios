import React from "react";


class Mediacard extends React.Component {
  render() {
    return (
      <div className="App">
        <article className="card">
          <header className="cardHeader">
            <img className="cardImg" title="Imagen de Joel"
              alt="Imagen de Joel"
              src={this.props.image}></img>
            <div className="cardData">
              <h2 className="cardTitle">{this.props.name}</h2>
              <p className="cardInfo"> {this.props.info}</p>
            </div>
          </header>
          <section className="cardBody">
            <p className="cardParagraph">{this.props.paragaph}</p>
          </section>
          <footer className="cardFooter">
            <p className="cardFooter-paragraph">{this.props.footerParagaph}</p>
            <div className="cardContainer-likes">
              <p className="cardNumber">{this.props.number}</p>
              {/* <i class="fas fa-heart cardHeart-icon"></i> */}
              <p className="cardHeart-icon">{this.props.heart}</p>
            </div>
          </footer>
        </article>
      </div>
    );
  }
}

export default Mediacard;
