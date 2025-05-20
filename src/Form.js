import React from 'react';
let {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  SliderIOS,
  TouchableWithoutFeedback,
} = require('react-native');

// import {Separator} from './fields/Separator';

export class Form extends React.Component {
  constructor(props) {
    super();

    this.values = {};
  }

  handleFieldFocused(event, inputHandle) {
    this.props.onFocus && this.props.onFocus(event, inputHandle);
  }
  handleFieldChange(field_ref, value) {
    this.values[field_ref] = value;
    this.props.onChange && this.props.onChange(this.values);
  }
  getValues() {
    return this.values;
  }

  underscoreToSpaced(str) {
    var words = str.split('_');
    var res = [];
    words.map(function (word, i) {
      res.push(word.charAt(0).toUpperCase() + word.slice(1));
    });

    return res.join(' ');
  }

  render() {
    let wrappedChildren = [];

    React.Children.map(
      this.props.children,
      (child, i) => {
        if (!child) {
          return;
        }

        // Assuming child.ref is the string identifier you need (e.g., "username")
        const childRefString = child.ref;

        const propsForClonedChild = {
          key: childRefString || child.type + i, // Use string ref for key
          fieldRef: childRefString, // Pass string ref for your internal logic
          // DO NOT pass 'ref: childRefString' here if childRefString is a string.
          // React.cloneElement will handle the original child's ref appropriately.
          onFocus: this.handleFieldFocused.bind(this),
          onChange: this.handleFieldChange.bind(this, childRefString), // Pass string ref
        };

        wrappedChildren.push(React.cloneElement(child, propsForClonedChild));
      },
      this
    );

    return <View style={this.props.style}>{wrappedChildren}</View>;
  }
}
