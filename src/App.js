import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
    state = {
        persons: [
            { id: 'sdasf', name: 'Duong', age: 22 },
            { id: 'qwdqas', name: 'Duong2', age: 21 },
            { id: 'rgwwe', name: 'Duong3', age: 20 }
        ],
        otherState: 'some other text',
        showPersons: false
    };
    switchNameHandler = () => {
        console.log('Was clicked');
        this.setState({
            persons: [
                { name: 'Duong4', age: 23 },
                { name: 'Duong5', age: 24 },
                { name: 'Duong6', age: 25 }
            ]
        });
    };
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.find(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.person[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons });
    };
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };
    deletePersonHandler = personIndex => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };
    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person key={person.id} name={person.name} age={person.age} changed={event => this.nameChangedHandler(event, person.id)} />;
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hello</h1>
                {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
                <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
