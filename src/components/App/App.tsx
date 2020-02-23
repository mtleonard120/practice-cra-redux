import React from 'react'

// components
import {Counter, Todos} from 'components'

// styles
import styles from './App.module.scss'

export const App = () => {
    return (
        <div className={styles.app}>
            <h1>Practice - Create-React-App Redux Template (with TS)</h1>
            <div className={styles.learnMore}>
                <span>Learn </span>
                <a className='App-link' href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
                    React
                </a>
                <span>, </span>
                <a className='App-link' href='https://redux.js.org/' target='_blank' rel='noopener noreferrer'>
                    Redux
                </a>
                <span>, </span>
                <a className='App-link' href='https://redux-toolkit.js.org/' target='_blank' rel='noopener noreferrer'>
                    Redux Toolkit
                </a>
                ,<span> and </span>
                <a className='App-link' href='https://react-redux.js.org/' target='_blank' rel='noopener noreferrer'>
                    React Redux
                </a>
                .
            </div>
            <Counter />
            <Todos />
        </div>
    )
}
