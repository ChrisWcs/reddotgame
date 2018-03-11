import React from 'react';

import { generateRange } from '../utils/utils';

import RedDot from '../styledcomps/RedDot';
import BlueDot from '../styledcomps/BlueDot';
import Column from '../styledcomps/Column';
import Row from '../styledcomps/Row';

class App extends React.Component {

    state = {
        mat: generateRange(13),
        count: 0,
        id: setInterval(this.handleTimeout),
    }

    handleTimeout = () => {
        this.setState( prevState => { 
            let id = clearInterval(prevState.id);
            return {
                mat: generateRange(13),
                count: 0,
                id: setInterval(this.handleTimeout, 1000)
            }
        })
    }

    handleRedClick = () => {
        this.setState( prevState => {
            let id = clearInterval(prevState.id);
            return {
                mat: generateRange(13),
                count: prevState.count + 1,
                id: setInterval(this.handleTimeout, 1000),
            };
        });
    }
    
    render() {
        return (
            <Column>
                { this.state.mat.map(x => <Row>
                                            {x.map(y => y ? <RedDot onClick={this.handleRedClick}/> : <BlueDot/>)}
                                          </Row>)}
                <h1>{this.state.count}</h1>
            </Column>
        );
    }
}

export default App;