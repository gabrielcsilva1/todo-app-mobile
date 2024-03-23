import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { colors } from '../../styles';

type TaskProps = {
    label: string,
    isComplete : boolean,
    onToggleDone: () => void,
    onDelete: () => void,
}

export function Task({label, isComplete, onToggleDone, onDelete}: TaskProps) {
    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.checkBox, isComplete ? styles.checked : styles.unchecked]}
                onPress={onToggleDone}
                hitSlop={{
                    top: 20,
                    left: 20,
                    right: 20,
                    bottom: 20
                }}
            >
                { isComplete  && <AntDesign name="check" size={13} color={colors.gray[100]} />}
            </Pressable>

            <Text style={[styles.text, isComplete ? styles.textComplete : {}]} numberOfLines={2}>{label}</Text>

            <TouchableOpacity style={styles.trash} onPress={onDelete}>
                <FontAwesome name="trash-o" size={20} color={colors.gray[300]} />
            </TouchableOpacity>
        </View>
    )
}