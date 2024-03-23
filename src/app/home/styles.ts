import { StyleSheet } from "react-native";
import { font, colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        alignItems: 'center',

        backgroundColor: colors.gray[700], 
        paddingVertical: 70,
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,

        
        height:54,
        marginTop: -52/2,
        marginHorizontal: 24
    },

    input: {
        flex: 1,

        backgroundColor: colors.gray[500],
        borderColor: colors.gray[700],
        borderRadius: 6,
        borderWidth: 1,
        padding: 16,
        
        color: colors.gray[100],
        fontFamily: font.regular,
        fontSize: font.size.base
    },

    button: {
        backgroundColor: colors.blue[500],
        borderRadius: 6,
        padding: 18
    },

    taskCounters: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 32,
        marginBottom: 20
    }
})