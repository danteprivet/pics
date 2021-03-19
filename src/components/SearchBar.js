import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
   state = {term: ''};

   onFormSubmit = event => {
       event.preventDefault();
       this.props.onSubmit(this.state.term)
   }

    render() {
        return (
            <div className="ui segment" style={{marginTop: '10px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                      <label>Image search</label>
                      <input type='text' placeholder='search' value={this.state.term}  onChange={ e => this.setState({term: e.target.value}) }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;