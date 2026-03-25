'use strict';

import React from 'react';
import ReactNative from 'react-native';
import {InputComponent} from '../lib/InputComponent';

const {StyleSheet} = ReactNative;

export class InputField extends React.Component{
  constructor(props) {
    super(props);
    this.fieldComponent = React.createRef();
  }
  handleValidation(isValid, validationErrors){
    this.valid = isValid;
    this.validationErrors = validationErrors;
  }
  setValue(value){
    this.fieldComponent.current.setValue(value)
  }
  focus(){
    this.fieldComponent.current.focus()
  }
  render(){
    return(<InputComponent
      {...this.props}
      ref={this.fieldComponent}
      onValidation={this.handleValidation.bind(this)}
      //onChange={this.handleChange.bind(this)}
      //ref={this.props.fieldRef}
      />
    );
  }
}
