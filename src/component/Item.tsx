import { Component } from "react";


interface State{
    data:number
}


class Item extends Component<{},State> {

    constructor(props:{}) {
        super(props);
        this.state  = { data: 1 };
    }

    componentDidMount() {
        console.log("componentDidMount");

    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

    }

    add = () => {
        this.setState((prevState) => ({ data: this.state.data + 1 }));
    }

    render() {
        return (
            <div>
                <h1>Example Component</h1>
                <p>Count: {this.state.data} </p>
                <button onClick={this.add}>Click me</button>
            </div>
        );
    }
}

export default Item;

