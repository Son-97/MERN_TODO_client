import React from 'react'
import Provider from "./PackageContext";
import Child1 from "./Child1"

const Parent = () => {
    return (
        <Provider>
            <Child1 />
        </Provider>
    )
};
export default Parent
