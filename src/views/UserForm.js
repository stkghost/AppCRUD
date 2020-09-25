import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';



export default ({route, navigation}) => {
    // console.warn(Object.keys(props))
    const [user, setUser]= useState(route.params ? props.route.params : {})
    return (
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput 
            style={styles.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput 
            style={styles.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={user.email}
            />
             <Text>URL do Avatar</Text>
            <TextInput 
            style={styles.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() =>{
                    navigation.goBack()
                }}
            />
        </View>
        
    )
}
const styles = StyleSheet.create({
    form: {
        padding: 10,
        margin: 10
    },
    input: {
        height: 40, 
        borderColor: '#ccc',
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 10
    }
})