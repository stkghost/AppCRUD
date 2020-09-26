import React, { useContext } from 'react';
import {View,  FlatList, Alert} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import {ListItem, Button, Icon} from 'react-native-elements';
import UsersContext from '../context/UsersContext.js';

export default props => {

    const {state, dispatch} = useContext(UsersContext)
    // console.warn(Object.keys(ctx.state))

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                    // console.warn('delete')
                }
            },{
                text: 'Não'
            }
        ])
    }


    function getActions(user){
        return(
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon = {<Icon name="edit" size={25} color="green" />}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon = {<Icon name="delete" size={25} color="red" />}
                />
            </>    
        )
    }

    function getUserItem ({item: user }) {
        // return <Text>{user.name} - {user.email} </Text>
        return (            
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}} 
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions()}
                onPress={()=> props.navigation.navigate("UserForm")}
            />
        )    
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}  
                data={state.users}
                renderItem={getUserItem}
            />
        </View>   
    )
}