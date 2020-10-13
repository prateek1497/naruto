import React, { Component } from 'react'
import {connect} from 'react-redux'
import getResults from '../redux/actions/actionCreator'
import { loadMore } from '../redux/actions/actionCreator'

import '../cssFiles/DisplayCards.css'


class DisplayCards extends Component {

    constructor(props){
        super(props)
        this.state = {
            showLoadingButton : false,
            countLoadMoreClicked: 1
        }
    }

    handleLoadMoreClick = () => {
        this.state.countLoadMoreClicked = this.state.countLoadMoreClicked + 1;
        console.log('countLoadMoreClicked', this.state.countLoadMoreClicked)
        this.props.loadMore(this.props.queryValue, this.state.countLoadMoreClicked*16)
        
    }
    // componentWillMount(){
    //     window.addEventListener('scroll', this.loadMore);
    //   }
      
    //   componentWillUnmount(){
    //       window.removeEventListener('scroll', this.loadMore);
    //   }
        
      
        componentDidMount(){
            window.addEventListener('scroll', this.loadWhenScrolledDown)
        }

        loadWhenScrolledDown = () => {
          if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
              // Do load more content here!
              this.setState({
                  showLoadingButton: true
              })
          }
      }
   

    render() {
        console.log('INSIDE THE DISPLAY CARDS', this.props)
       
        let items = this.props.data.map((item, index)=>{
            return(
            // <div className = "card" key={index} style={{backgroundImage: `url(${item.image_url})`}}>
            <div className = "card" key={index}>
                <img src={item.image_url}/>    
                <div>{item.title}</div>
            </div>
            )
        })
        
        
        return (
            <React.Fragment>
                <div className="allcards">
                    {items}
                    {this.state.showLoadingButton && <button onClick={this.handleLoadMoreClick}>Load more</button>}
                   
                </div>
                
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('inside inside inside inside', state)
    return {
        data : state.data,
        queryValue : state.queryValue
        // query_value: state.query_value
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getResults : (query) => dispatch(getResults(query)),
        // setQueryStateinStore: (query) => dispatch(setQueryStateinStore(query))
        loadMore : (query, limit) => dispatch(loadMore(query, limit))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayCards)
