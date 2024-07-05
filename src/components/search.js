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
            <div className="text-center">  
                <input 
                    value={this.props.strSearch}
                    onChange={event => this.props.setStr(event.target.value)}
                    type="text" 
                    placeholder='Найти ...' />
            </div>
            
        );
    };
};