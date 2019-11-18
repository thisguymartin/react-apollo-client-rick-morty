import React, { Component } from "react";
import Layout from "../layout/default";
import Characters from "../components/characters";

class MoviesPage extends Component {
    render() {
        return (
            <Layout>
                <Characters />
            </Layout>
        );
    }
}

export default MoviesPage;
