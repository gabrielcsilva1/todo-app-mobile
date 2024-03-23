import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "../../styles";

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={colors.gray[100]}/>
        </View>
    )
}