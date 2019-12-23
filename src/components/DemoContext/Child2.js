import React, { Fragment, useContext } from "react";
import Context from "./Context";

const Child2 = () => {
    const state = useContext(Context);
    console.log(state)
    return (
        <Fragment>
            <h3>Welcome to Floor 7</h3>
            <p>
                <strong>Count: </strong>
                {state.count}
            </p>
            <p>
                <strong>Company Name: </strong>
                {state.status}
            </p>
            <button onClick={() => state.updateDeliveryStatus()}>
                Update Delivery Status
            </button>
        </Fragment>

    );
};
export default Child2;