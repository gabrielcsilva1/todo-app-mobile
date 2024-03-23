import { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import { styles } from './styles';
import { colors } from '../../styles';

import { TaskCounter } from '../../components/task-counter';
import { EmptyTask } from '../../components/empty-tasks';
import { Task } from '../../components/task';

type Tasks = {
    id: string;
    description: string;
    isComplete: boolean;
}

export default function Home() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const tasksComplete = tasks.filter((task) => task.isComplete).length;

    function handleAddTask(){
        const data = newTask.trim();

        if (data){
            const task = {
                id: Date.now().toString(),
                description: data,
                isComplete: false
            }

            setTasks([...tasks, task])
            setNewTask('')
        }
    }

    function handleToggleDone(id: string){
        setTasks((prevTasks) => prevTasks.map((task) => {
            if (task.id === id){
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        }))
    }

    function handleDelete(id: string){
        Alert.alert("Excluir Tarefa?", "Tem certeza que deseja excluir essa tarefa?", [{
            text: "Sim",
            onPress: () => 
            setTasks((prevTasks) => prevTasks.filter( (task) => task.id !== id ))
        },
        {
            text: "Não",
            style: 'cancel'
        }]);
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={{width:110.34, height:32}}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Adicione uma tarefa" 
                    placeholderTextColor={colors.gray[300]}
                    onChangeText={setNewTask}
                    value={newTask}
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleAddTask}>
                    <AntDesign name="pluscircleo" size={16} color={colors.gray[100]} />
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 24, flex: 1}}>
                <View style={styles.taskCounters}>
                    <TaskCounter label='Criadas' counter={tasks.length} color={colors.blue[400]}/>
                    <TaskCounter label='Concluídas' counter={tasksComplete} color={colors.purple[400]}/>
                </View>

                <FlatList 
                    data={tasks}
                    renderItem={
                        ({item}) => (
                            <Task 
                            label={item.description} 
                            isComplete={item.isComplete} 
                            onToggleDone={() => handleToggleDone(item.id)}
                            onDelete={() => handleDelete(item.id)}
                            />
                        )
                    } 
                    ListEmptyComponent={<EmptyTask/>} contentContainerStyle={{gap: 8, paddingVertical: 16}} 
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}