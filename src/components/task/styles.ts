import { StyleSheet } from "react-native";
import { font, colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

        backgroundColor: colors.gray[500],
        borderColor: colors.gray[400],
        borderWidth: 1,
        borderRadius: 8,
        padding:12
    },

    checkBox: {
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 999,
        height: 18,
        width: 18,
    },

    checked: {
        backgroundColor: colors.purple[500]
    },

    unchecked: {
        borderColor: colors.blue[400],
        borderWidth: 2
    },

    text: {
        flex: 1,

        color: colors.gray[100],
        fontFamily: font.regular,
        fontSize: font.size.sm,
        lineHeight: 1.4*font.size.sm
    },

    textComplete: {
        color: colors.gray[300],
        textDecorationLine: 'line-through'
    },

    trash: {
        padding: 9,
        borderRadius: 8
    }
})