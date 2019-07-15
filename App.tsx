import React, {Component} from 'react';
import Button from './Button';

export default class ExampleComponent extends Component {

    render() {
        return (
            <Button
                containerStyle={{
                    padding: 10,
                    height: 45,
                    overflow: 'hidden',
                    borderRadius: 4,
                    backgroundColor: 'white'
                }}
                disabledContainerStyle={{backgroundColor: 'grey'}}
                style={{fontSize: 20, color: 'green'}}>
                Press me!
            </Button>
        );
    }
};
