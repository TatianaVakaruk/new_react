import React, {PureComponent} from 'react';
import PropTypes, { number } from 'prop-types';

class Numbers extends PureComponent {
 render() {
    return (
        <div class="number">
    <span class="number__title">{this.props.title}</span>
    <span class="number__value">{this.props.number}</span>
  </div>
    )
 }
}
export default Numbers;