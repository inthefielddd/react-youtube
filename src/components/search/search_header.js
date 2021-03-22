import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
    //ref를통해서 input에 적은값을 가져올 것이다.
    const inputRef = useRef();
    const handleSearch = () => {
        //검색하는 결과 값 value
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    };

    const onClick = () => {
        //검색 버튼을 클릭했을때
        handleSearch();
    };
    const onKeyPress = (event) => {
        //엔터를 클릭했을때
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    console.log("Header!!!!!!!");
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src='/images/logo.png' alt='logo' />
                <h1 className={styles.title}>YouTube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress} />
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImg} src='/images/search.png' alt='search' />
            </button>
        </header>
    );
});

export default SearchHeader;
