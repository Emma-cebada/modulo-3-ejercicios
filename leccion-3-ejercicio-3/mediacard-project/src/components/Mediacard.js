import React from "react";

const Mediacard = props => {
  return (
    <div className="App">
      <article className="card">
        <header className="cardHeader">
          <img className="cardImg" title="Imagen de Joel"
            alt="Imagen de Joel"
            src={props.image}></img>
          <div className="cardData">
            <h2 className="cardTitle">{this.props.name}</h2>
            <p className="cardInfo"> {props.info}</p>
          </div>
        </header>
        <section className="cardBody">
          <p className="cardParagraph">{props.paragaph}</p>
        </section>
        <footer className="cardFooter">
          <p className="cardFooter-paragraph">{props.footerParagaph}</p>
          <div className="cardContainer-likes">
            <p className="cardNumber">{props.number}</p>
            {/* <i class="fas fa-heart cardHeart-icon"></i> */}
            <p className="cardHeart-icon">{props.heart}</p>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default Mediacard;