import React from 'react';
import moment from 'moment';

const Transaction = ({from, to, amount, rate, time}) => {
    const timeTransform = () => {
const now = new Date(time);
const hours = now.getHours();
const minutes = now.getMinutes();

const formatter = new Intl.NumberFormat('en-GB', {
  minimumIntegerDigits: 2
});
return `${formatter.format(hours)}:${formatter.format(minutes)}`;
    }
    return (
        <li className="transaction">
    <span className="transaction__date">{moment(time).format('DD MMM')}</span>
    <span className="transaction__time">{timeTransform()}</span>
    <span className="transaction__assets">{from} → {to}</span>
    <span className="transaction__rate">{rate}</span>
    <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
  </li>
    )
}
export default Transaction;