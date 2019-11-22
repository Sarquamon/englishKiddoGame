import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const GameForm = props => {
  return (
    <form onSubmit={props.getUsername}>
      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <FontAwesomeIcon icon="user" />
            </div>
          </div>
          <input
            name="usernameField"
            id="username"
            type="text"
            className="form-control"
            placeholder="Ingresa tu usuario"
          />
        </div>
        <small className="form-text text-muted">
          ¡No necesitas registrarte para poder jugar!
        </small>
      </div>
      <div className="btn-group">
        <button className="btn btn-outline-success btn-lg">
          ¡Ese es mi nombre!
        </button>
        <button
          name="startBtn"
          className="btn btn-outline-success btn-lg disabled"
        >
          Iniciar
        </button>
      </div>
    </form>
  );
};

export default GameForm;
