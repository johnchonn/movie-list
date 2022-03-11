import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  <form>
  <input type="text" name="MovieAdd" value={props.movie} onChange={props.change}></input>
  <button type="reset" onClick={props.submit}>Add</button>
</form>
}