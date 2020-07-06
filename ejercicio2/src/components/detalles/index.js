import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem  from '../../redux/actions/findCurrentItem'

class Detalles extends Component {

    componentDidMount(){
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }

    render() {
        const {
            currentItem,
        } = this.props;
        
        return (
            <Page
                currentItem={currentItem}
                goTo={(path)=>{
                    this.props.history.push(path)
                }}
            >
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    currentItem: state.currentItem,
});
const mapDispatchToProps={
    findCurrentItem,
}
export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(Detalles)
);