import React, {PureComponent} from 'react';
import PropTypes, { number } from 'prop-types';

class Numbers extends PureComponent {
 render() {
    return (
        <div className="number">
    <span className="number__title">{this.props.title}</span>
    <span className="number__value">{this.props.number}</span>
  </div>
    )
 }
}
export default Numbers;