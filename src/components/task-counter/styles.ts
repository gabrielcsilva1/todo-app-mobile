import { StyleSheet } from "react-native";
import { colors, font } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: font.bold,
        fontSize: font.size.sm,
        marginRight: 8,
    },

    counter: {
        backgroundColor: colors.gray[400],
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 2,

        fontFamily: font.bold,
        fontSize: font.size.xs,
        color: colors.gray[200]
    }
})