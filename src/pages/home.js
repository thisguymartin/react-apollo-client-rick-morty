import React from "react";
import Layout from "../layout/default";
import Home from "../components/home";

const HomePage = ({ props }) => (
    <Layout>
        <p className="text-3xl text-center font-sans">
            This is a Demo of React Apollo App using GraphQl
        </p>
        <p className="text-1xl text-center m-3 font-sans">
            Lets start with your name for fun
        </p>
        <div className="">
            <img
                className="object-contain h-48 w-full"
                src="http://screenprism.com/assets/img/article/Morty.JPG"
            />
        </div>
        <Home props={props} />
    </Layout>
);

export default HomePage;
