import React, { useState } from "react";
import history from "../history";
import { Link } from "react-router-dom";

const HomeForm = ({ props }) => {
    const [name, setName] = useState("");

    return (
        <div className="container flex items-center justify-center h-32">
            <div className="h-50 w-2/5 flex">
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full leading-normal"
                    name="name"
                    placeholder="Add your name homie!"
                    onChange={e => setName(e.target.value)}
                ></input>
                <Link
                    to={{ pathname: "/movies", state: { name } }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                >
                    Go
                </Link>
            </div>
        </div>
    );
};

export default HomeForm;
