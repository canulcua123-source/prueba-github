// Archivo: App.js (Versión Final Corregida)

import { StatusBar } from "expo-status-bar";
// 👇 La importación de TouchableOpacity se ha corregido aquí
import { View, Text, Alert, Modal, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback } from "react";

// Componentes
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

// Servicios y Estilos
import * as SupabaseService from './services/supabaseService';
import { styles } from "./styles";

// Componentes de terceros
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

// El objeto TAREA_INICIAL es una constante, por lo que va fuera del componente principal
const TAREA_INICIAL = {
  id: null,
  titulo: '',
  descripcion: '',
  fecha_entrega: new Date(),
  categoria: 'General',
  prioridad: 'Baja',
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(TAREA_INICIAL);
  
  // Estados del Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerActivo, setPickerActivo] = useState('');

  const loadTasks = useCallback(async () => {
    setLoading(true);
    const data = await SupabaseService.fetchTasks();
    setTasks(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleSave = async () => {
    if (!currentTask.titulo.trim()) {
      Alert.alert("Error", "El título no puede estar vacío.");
      return;
    }
    const taskToSave = { ...currentTask, fecha_entrega: new Date(currentTask.fecha_entrega).toISOString() };
    
    if (currentTask.id) {
      await SupabaseService.updateTask(currentTask.id, taskToSave);
    } else {
      // Al crear, eliminamos el id nulo para que Supabase lo genere
      delete taskToSave.id; 
      await SupabaseService.addTask(taskToSave);
    }
    
    setCurrentTask(TAREA_INICIAL);
    await loadTasks();
  };

  const handleEdit = (task) => {
    setCurrentTask({
      ...task,
      fecha_entrega: task.fecha_entrega ? new Date(task.fecha_entrega) : new Date()
    });
  };

  const handleDelete = (id) => {
    Alert.alert("Eliminar Tarea", "¿Estás seguro?", [
      { text: "Cancelar" },
      { text: "Eliminar", style: "destructive", onPress: async () => {
          await SupabaseService.deleteTask(id);
          await loadTasks();
        }}
    ]);
  };

  const handleToggle = async (id, status) => {
    await SupabaseService.toggleTaskComplete(id, status);
    await loadTasks();
  };
  
  const updateCurrentTask = (field, value) => {
    setCurrentTask(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📌 Mis Tareas</Text>

      <TaskForm
        task={currentTask}
        onTituloChange={(text) => updateCurrentTask('titulo', text)}
        onDescripcionChange={(text) => updateCurrentTask('descripcion', text)}
        onPrioridadChange={(p) => updateCurrentTask('prioridad', p)}
        onOpenModal={(type) => { setPickerActivo(type); setModalVisible(true); }}
        onSave={handleSave}
      />
      
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
        onRefresh={loadTasks}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContenido}>
            {pickerActivo === 'fecha' && (
              <DateTimePicker
                value={new Date(currentTask.fecha_entrega)}
                mode={'date'}
                display="inline"
                onChange={(e, date) => date && updateCurrentTask('fecha_entrega', date)}
                locale="es-ES"
              />
            )}
            {pickerActivo === 'categoria' && (
              <Picker
                selectedValue={currentTask.categoria}
                onValueChange={(value) => updateCurrentTask('categoria', value)}
              >
                <Picker.Item label="📚 General" value="General" />
                <Picker.Item label="🧮 Matemáticas" value="Matemáticas" />
                <Picker.Item label="🧪 Ciencias" value="Ciencias" />
              </Picker>
            )}
            <TouchableOpacity style={styles.botonCerrarModal} onPress={() => setModalVisible(false)}>
              <Text style={styles.textoBoton}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}