import React, { Component } from 'react';

class List extends Component {

    state = {
        isEdit: false
    }

    renderc = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => { this.toggle() }}>Edit</button>
                <button onClick={() => { this.props.delete(this.props.index) }}>Delete</button>
            </li>
        )
    }

    toggle = () => {
        let { isEdit } = this.state
        this.setState({
            isEdit: !isEdit
        })
    }

    update = (e) => {
        e.preventDefault();
        this.props.edit(this.props.index, this.input.value);
        this.toggle();
    }

    reUpf = () => {
        return (
            <form onSubmit={this.update}>
                <input type="text" ref={(v) => { this.input = v }} defaultValue={this.props.details.name} />
                <button>Update</button>
            </form>
        )
    }

    render() {
        let { isEdit } = this.state;
        return (
            <React.Fragment>
                {isEdit ? this.reUpf() : this.renderc()}
            </React.Fragment>
        );
    }
}

export default List;