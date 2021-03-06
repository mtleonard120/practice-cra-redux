import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// store
import {decrement, increment, incrementByAmount, selectCount} from 'store'

// styles
import styles from './Counter.module.scss'

// primary component
export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    // local state
    const [incrementAmount, setIncrementAmount] = useState('2')

    return (
        <div className={styles.counter}>
            <h2>Counter Example (comes with template)</h2>
            <div className={styles.row}>
                <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount({amount: Number(incrementAmount) || 0}))}
                >
                    Add Amount
                </button>
            </div>
        </div>
    )
}
