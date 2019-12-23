import React, { Fragment, useContext } from "react";
import Child2 from './Child2';
import Context from "./Context";

const Child1 = () => {
    const state = useContext(Context);
    return (
        <Fragment>
            <h2>Child1</h2>
            <div>Child1: {state.count}</div>
            <button onClick={() => state.updateCounterIncrement()}>+</button>
            <button onClick={() => state.updateCounterDecrement()}>-</button>
            <h2>Child2</h2>
            <Child2 />
        </Fragment>

    );
};
export default Child1;