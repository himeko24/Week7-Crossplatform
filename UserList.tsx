import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { SlideInLeft, useSharedValue, withTiming, withDelay, useAnimatedStyle } from "react-native-reanimated";
import styles from "./App.style";
import userData from "./data.json";

const UserList = ({ navigation }) => {

    return (
        <ScrollView>
            {userData.users.map((user, i) => {
                return (
                    <Animated.View entering={SlideInLeft.duration(1000).delay(i * 100)} style={styles.container} key={user.name} >
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Profile", { userName: user.name, photo_url: user.photo_url, email: user.email })}>
                            <Image
                                source={{ uri: user.photo_url }}
                                style={styles.avatar} />
                            <View>
                                <Text style={styles.boldText}>{user.name}</Text>
                                <Text>{user.email}</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                );
            })}
        </ScrollView >
    );
};

export default UserList;