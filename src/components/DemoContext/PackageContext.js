import React, { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
    const initState = {
        count: 0,
        status: 'approve',
    };

    initState.updateCounterIncrement = () => {
        setData({ ...state, count: state.count++ });
        if (state.count === 5 ) {
            state.status = 'pedding'
        }
    }

    initState.updateCounterDecrement = () => {
        setData({ ...state, count: state.count-- });
    }

    initState.updateDeliveryStatus = () => {
        state.status = "pending";
        setData({ ...state});
    }

    const [state, setData] = useState(initState);


    return (
        <div>
            <h2>Parent: {state.count}</h2>
            <PackageContext.Provider
                value={state}
            >
                {props.children}
            </PackageContext.Provider>
           
        </div>
    );
};

export default Provider;