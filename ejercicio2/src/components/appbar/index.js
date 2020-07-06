import React, { Component } from 'react'
import Page from './page'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class IAppbar extends Component{

    onChangeText(text){
        this.setState({text});
        this.props.findSuggestions(text);
    }

    onChangeSelection(text){
        this.setState({text});
        this.props.findResults(text);
        this.props.history.push('/results');
    }
    constructor(props) {
        super(props);
        this.state = {
            text : ''
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    render(){
        const {text} =this.state;
        const {suggestions} = this.props;
        return (
            <Page
                text = {text}
                suggestions = {suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}
const mapStateToProps = (state) =>({
    suggestions : state.suggestions
})

const mapDispatchToProps = {
    findSuggestions,
    findResults 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IAppbar));
