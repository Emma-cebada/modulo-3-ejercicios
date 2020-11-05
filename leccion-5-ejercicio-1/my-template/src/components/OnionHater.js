import React from 'react';

const handleAlert = event => {
  const usersText = event.target.value;
  //Si le quito el OR me sale la alerta cuando escribo la última letra y como lo tengo ahora, me salta nada más escribir la primera.
  if (usersText.includes("cebolla") || ("Cebolla")) {
    alert("ODIO LA CEBOLLA");
  }
}

class OnionHater extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="textarea">
          <textarea placeholder="Escibre aquí sobre las cebollas." onChange={handleAlert} className="textarea" name="textarea" id="textarea"></textarea>
        </label>
      </form>
    )
  }
}

export default OnionHater;