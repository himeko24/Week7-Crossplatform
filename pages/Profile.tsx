import { Button, Text, View, Image } from "react-native";
import styles from "../App.style";

const Profile = ({ navigation, route }) => {
    const { userName, photo_url, email } = route.params;


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
                source={{ uri: photo_url }}
                style={styles.avatar} />
            <Text>{userName}&apos;s Profile</Text>
            <Text>{email}</Text>
            <Button title="Go Back" onPress={() => navigation.navigate("Email")} />
        </View>
    );
};

export default Profile;