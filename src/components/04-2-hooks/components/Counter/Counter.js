import { useState, useReducer } from 'react';
import styles from './Counter.module.css';
import Button from 'styles/ui/Button/Button';

// !=============useState========

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <p className={styles.value}>{count}</p>
      <Button
        className={styles.btn}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Увеличить
      </Button>

      <Button
        className={styles.btn}
        type="button"
        onClick={() => setCount(count - 1)}
      >
        Уменьшить
      </Button>
    </div>
  );
}

// !=============useReducer========

function countReducer1(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;

    default:
      throw new Error(`Unsopported action typee ${action.type}`);
  }
}

export function Counter1() {
  const [count, dispatch] = useReducer(countReducer1, 0);

  return (
    <div className={styles.container}>
      <p className={styles.value}>{count}</p>
      <Button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Увеличить
      </Button>

      <Button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Уменьшить
      </Button>
    </div>
  );
}

// !=============if dispatch is object========

function countReducer2(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

export function Counter2() {
  const [state, dispatch] = useReducer(countReducer2, {
    count: 0,
  });

  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <Button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Увеличить
      </Button>

      <Button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Уменьшить
      </Button>
    </div>
  );
}
