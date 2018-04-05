import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

     

//const expenseOne = store.dispatch(addExpense({description: 'Water Bill',amount: 400, createdAt: -21000}))
store.dispatch(addExpense({description: 'Water Bill', amount: 40000, createdAt: 21000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 5000, createdAt: 130000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 1000}));


const state = store.getState();
     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
     console.log(visibleExpenses);

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))  