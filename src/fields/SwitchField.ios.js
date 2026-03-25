'use strict';

import React from 'react';
let { View, StyleSheet, Text, Switch} = require('react-native');

import {SwitchComponent} from '../lib/SwitchComponent';

export class SwitchField extends React.Component{
  constructor(props) {
    super(props);
    this.fieldComponent = React.createRef();
  }
  setValue(value){
    this.fieldComponent.current.setValue(value)
  }
  render(){

    return(<SwitchComponent
      {...this.props}
      ref={this.fieldComponent}
      containerStyle={[
        formStyles.fieldContainer,
        formStyles.horizontalContainer,
        this.props.containerStyle
      ]}

      labelStyle = {[
        formStyles.fieldText,
        this.props.labelStyle
      ]}
      switchStyle={[
        {marginTop: 7, position:'absolute', right: 10},
        this.props.switchStyle
      ]}
      />

    )
  }

}



  let formStyles = StyleSheet.create({
    fieldContainer:{
      borderBottomWidth: 1,
      borderBottomColor: '#C8C7CC',
      backgroundColor: 'white',
      justifyContent: 'center',
      height: 45
    },
    horizontalContainer:{
      flexDirection: 'row',

      justifyContent: 'flex-start'
    },
    fieldText:{
      fontSize: 34/2,
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'center',
      lineHeight: 32
    },

  });
