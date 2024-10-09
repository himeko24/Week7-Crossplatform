import { Button, Text, View } from 'react-native';
import UserList from '../UserList';

const Email = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Email List Page</Text>
            <UserList navigation={navigation} />
            <View>
            <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
        </View>
        </View >
    )
}

export default Email;