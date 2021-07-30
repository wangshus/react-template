import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { valueChange } from 'src/actions/mianActions';
import { getAuthor } from './../reducer/mainReducer';
import classnames from "classnames/bind";
import style from "./main.scss";
const cx = classnames.bind(style);

const Main = (props) => {

    const dispatch = useDispatch();
    const author = useSelector(getAuthor)


    const clickButton = () => {
        props.history.push("/user")
    }

    const inputChange = (e) => {
        dispatch(valueChange(e.currentTarget.value))
    }


    return (
        <div className={cx("main")}>
            <div>author: {author}</div>
            <input type="text" onChange={inputChange}/>
            <button onClick={clickButton}>Click</button>
        </div>
    )
}

export default Main
