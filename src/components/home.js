import React, { useState } from "react";

const HomeForm = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <h1>test here</h1>
            <input
                className="test"
                name="name"
                onChange={e => setName(e.target.value)}
            ></input>
        </div>
    );
};

export default HomeForm;
