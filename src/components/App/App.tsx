import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/UserSlice";

function App() {
    const {count} = useAppSelector(state => state.userReducer);
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className="App">
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment(2))}>increment</button>
        </div>
    );
}

export default App;
