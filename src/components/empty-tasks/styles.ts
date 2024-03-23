import { StyleSheet } from "react-native";
import { font, colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 16,

        borderTopColor: colors.gray[400],
        borderTopWidth: 1
    },

    span: {
        color: colors.gray[300],   
        fontFamily: font.bold,
        fontSize: font.size.sm
    },

    textRegular: {
        color: colors.gray[300],
        fontFamily: font.regular,
        fontSize: font.size.sm
    }
})