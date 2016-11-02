/*global require*/
var React = require('react');
require('./style.scss');
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions.js';
const _Example = ({count, dispatch}) => {

  return (

    <div className={'mainContainer'}>

      <Button onClick={() => dispatch(actions.exampleActionIncrease())}>Increase Count</Button>

      <div className={'currentCount'}>Current count: {count}
      </div>

    </div>
  );
};

export const Example = connect((state) => state.exampleState)(_Example);
