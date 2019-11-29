import React, {Component} from "react";
import GameForm from "../GameForm/GameForm";
import Level1 from "../Levels/Level1/Level1";
export class Game extends Component {
  state = {
    username: String
  };

  getUsername = e => {
    const username = e.target.elements.usernameField.value;
    const startBtn = e.target.elements.startBtn;

    e.preventDefault();

    if (username === "") {
      console.log(`Campo no puede estar vacio`);
      startBtn.classList.add("disabled");
    } else {
      console.log(`Hola ${username}`);
      this.setState({username: username});
      startBtn.classList.remove("disabled");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Hola desde game!</h1>
            <GameForm getUsername={this.getUsername} ableBtn={this.ableBtn} />
            <Level1 />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
