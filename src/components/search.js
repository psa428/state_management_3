import { Component } from "react";

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            strSearch: props.strSearch
        };
    };

    render() {
        return (
            <div className="container mx-auto">  
                <input className="text-center m-4 border-solid border-2"
                    value={this.props.strSearch}
                    onChange={event => this.props.setStr(event.target.value)}
                    type="text" 
                    placeholder='Найти ...' />
            </div>
            
        );
    };
};