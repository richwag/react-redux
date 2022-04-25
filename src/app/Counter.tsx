import { useAppSelector, useAppDispatch } from "./hooks";

import { decrement, increment } from "./CounterSlice";

export default function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    // omit rendering logic
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
