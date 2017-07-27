import {Component} from 'react';
import {AppRegistry} from 'react-native';
import Root from './app/native/containers/Root';
import store from './app/store';

class ReactNativeHelloWorld extends Component {
    render() {
        return (
            <Root store={store}/>
        );
    }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeHelloWorld);
