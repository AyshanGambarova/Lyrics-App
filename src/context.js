import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [],
        heading: "Top 10 Track",
    };

    componentDidMount() {
        axios
            .get(
                `https://fast-dawn-89938.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=aze&f_has_lyrics=1&apikey=c9099e83fb765f4580c3ff5b3bb36b22`
            )
            .then((res) => {
             this.setState({track_list:res.data.message.body.track_list});
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer = Context.Consumer;
