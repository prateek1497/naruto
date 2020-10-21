import React, { Component } from 'react'
import {connect} from 'react-redux'
import getResults from '../redux/actions/actionCreator'
import { loadMore } from '../redux/actions/actionCreator'

import '../cssFiles/DisplayCards.css'


class DisplayCards extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            showLoadingButton : false,
            countLoadMoreClicked: 1
        }
    }

    handleLoadMoreClick = () => {
       this.props.loadMore(this.props.queryValue, (this.props.pageCount+1)*16)
        
    }
      
        componentDidMount(){
            window.addEventListener('scroll', this.loadWhenScrolledDown)
        }

        loadWhenScrolledDown = () => {
          if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
              this.setState({
                  showLoadingButton: true
              })
          }
      }
   

    render() {
       
        let items = this.props.data.map((item, index)=>{
            return(
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
    return {
        data : state.data,
        queryValue : state.queryValue,
        pageCount: state.pageCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getResults : (query) => dispatch(getResults(query)),
        loadMore : (query, limit) => dispatch(loadMore(query, limit))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayCards)
