import { View, Text, Image } from 'react-native';
import clipboardPng from '../../assets/clipboard.png'
import { styles } from './styles';

export function EmptyTask(){
    return (
        <View style={styles.container}>
            <Image source={clipboardPng} height={56} width={56} style={{marginTop: 48}}/>
            <View>
                <Text style={styles.span}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textRegular}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}