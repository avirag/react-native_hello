import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red'
  }
});

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={this.props.style}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Type here to translate"
          onChangeText={text => this.setState({text})}
        />
        <Text>
          {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class FetchExample extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({
          isLoading: false,
          dataSource: jsonResponse.movies
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title} {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

export default class HelloWorldScreen extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center', height: 200}}>
          <Text style={styles.bigBlue}>Hello World!</Text>
          <Greeting style={styles.red} name="Reader" />
          <FixedDimensionsBasics />
        </View>

        <View>
          <PizzaTranslator />
        </View>

        <View>
          <Button onPress={() => alert('You tapped the button')} title='Press Me' />
        </View>

        <View>
          <FetchExample />
        </View>
      </View>
    );
  }
}
