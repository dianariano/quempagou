import React, { Component } from 'react';
import './App.css';
import Firebase from './Firebase'
import Adapter from './Adapter'

class App extends Component {

    state = {
        list: [],
    }

    componentDidMount() {
        Firebase.read().then(res => {
            this.setState({
              list: Adapter(res).reverse()
            })
        })
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <input placeholder='onde' id='onde'/>
                <input placeholder='quem' id='quem'/>
                <input placeholder='quanto' id='quanto'/>
                <button onClick={() => {
                    Firebase.save({
                        quempagou: document.querySelector('#quem').value,
                        quanto: document.querySelector('#quanto').value,
                        onde: document.querySelector('#onde').value,
                    }).then(() => {
                        document.querySelector('#quem').value = ''
                        document.querySelector('#quanto').value = ''
                        document.querySelector('#onde').value = ''

                        Firebase.read().then(res => {
                            this.setState({
                                list: Adapter(res).reverse()
                            })
                        })
                    })


                }}>insert</button>
                {this.state.list.map((val, index) =>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '300px',
                        border: '1px solid black',
                        marginTop: '10px',
                        padding: '10px'
                    }}
                    key={index}>
                        <span>onde: { val.onde }</span>
                        <span>quem: { val.quempagou }</span>
                        <span>quanto: { val.quanto }</span>
                    </div>
                )}
            </div>
        );
}
}

export default App;
