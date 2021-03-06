import React from 'react';
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };

    onDatesChange =({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))

    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    render() {
        return (
            <div>
        <input type="text" 
        defaultValue={this.props.filters.text} 
        onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
        }}/>
    
    <select 
    value = {this.props.filters.sortBy}
    onChange={(e)=>{
            if (e.target.value === 'date') {
                this.props.dispatch(sortByDate(e.target.value))
            } else if (e.target.value === 'amount')
                this.props.dispatch(sortByAmount(e.target.value))
    }} >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
    </select>
    <DateRangePicker 
        startDate ={this.props.filters.startDate}
        startDateId="1"
        endDate ={this.props.filters.endDate}
        endDateId = "1"
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
    />
    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);