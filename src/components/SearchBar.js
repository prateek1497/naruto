import React, { Component } from 'react'
import Data from '../redux/getData'
import '../cssFiles/searchBar.css'
import {connect} from 'react-redux'
import getResults from '../redux/actions/actionCreator'

class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            query: "",
            data: []
          };
    }
    
    handleSubmitClick = (event) => {
        event.preventDefault();

        let {query } = this.state
        query = query.toLowerCase();
        this.props.getResults(query);
        // this.props.setQueryStateinStore(query);
        // this.props.showLoadMore();
        window.scrollTo(0, 0);
    }
    handleInputChange = event => {
         this.setState({
             query: event.target.value
         })
    }

    render() {
        
        let {data} = this.state
        return (
            <React.Fragment>

                <div className = "header">
                <form className = "nav-searchbar" onSubmit={this.handleSubmitClick}>
                    <div className="nav-left">
                        <input
                            className = "nav-input"
                            placeholder="Search Here..."
                            value={this.state.query}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="nav-right">
                        <input className = "nav-input" type="submit" value="Go"></input> 
                    </div>
                </form>
                </div>

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getResults : (query) => dispatch(getResults(query)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
