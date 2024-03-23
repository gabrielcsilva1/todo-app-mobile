import { View, Text } from 'react-native';
import { styles } from './styles';

type TaskCounterProps = {
    label: string,
    counter: number,
    color: string,
}

export function TaskCounter({label, counter, color}: TaskCounterProps){
    return (
        <View style={styles.container}>
            <Text style={[styles.label, {color}]}>{label}</Text>
            <Text style={styles.counter}>{counter}</Text>
        </View>
        )
}