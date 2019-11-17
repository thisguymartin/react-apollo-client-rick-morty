import React, { useState } from "react";

const HomeForm = (props) => {
    const [name, setName] = useState("")

    const RouteCharacters = (d) => {
            
            console.log(props)
    }

    return (
        <div className="container flex items-center justify-center h-32">
            <div className="h-50 w-2/5 flex">
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full leading-normal"
                    name="name"
                    placeholder="Add your name homie!"
                    onChange={e => setName(e.target.value)}
                ></input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={RouteCharacters}>
                    Button
                </button>
            </div>
        </div>
    )
}

export default HomeForm;
