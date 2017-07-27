import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {appStyle} from '../styles/styles';
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import {toggleColor} from '../../actions/actions';

class App extends Component {
    render() {
        const {dispatch, color} = this.props;
        return (
            <View style={appStyle.reactNativeWeb}>
                <Header/>
                <HelloWorld
                    onPress={() => dispatch(toggleColor(color))}
                    color={color}
                />
            </View>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
};

const select = state => state;

export default connect(select)(App);
