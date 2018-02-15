import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, TextInput  } from 'react-native';
import { Container, Header, Content, Footer, Text, Button, Left, Right, Body, Icon, Title } from 'native-base';
import styles from './style';

class Box extends Component {
	press(){
		Alert.alert('hi')
	}
	
	render() {
		return(
			<Button 
				{...this.props}//
				onPress={this.press}
			/>
		);
	}
}

class H extends Component {
	press(){
		Alert.alert('hi')
	}
	
	render() {
		return(
			<Header brandPrimary='ffffff'>
				<Left>
					<Button transparent>
						<Text>Selecionar</Text>
					</Button>
				</Left>
				<Right>
					<Button transparent>
						<Text>Comodos</Text>
					</Button>
					<Button transparent>
						<Icon name='menu' />
					</Button>
				</Right>
			</Header>
		);
	}
}

export default class App extends Component {
  
	render() {
		return (
			<Container>
				<H />
				<View style={styles.container}>
					<Box title="Press Me"/>
					<Text>oi1</Text>
				</View>
			</Container>

		);
	}
} 

