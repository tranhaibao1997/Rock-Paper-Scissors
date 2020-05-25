import React from 'react'

export default class ChoiceCardClass extends React.Component {
    render() {
      return <div className={`choice-card ${this.props.winner ?'winner' :'loser'}`}>
<h1>{this.props.title}</h1>
<img src={this.props.imgUrl} alt={this.props.title}/>
<h3>{this.props.winner ? 'Won' : 'Loss'}</h3>
</div>
    }
  }