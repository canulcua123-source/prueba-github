// Archivo: components/TaskForm.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const TaskForm = ({
  task,
  onTituloChange,
  onDescripcionChange,
  onPrioridadChange,
  onOpenModal,
  onSave,
}) => {
  const { titulo, descripcion, prioridad, categoria, fecha_entrega, id } = task;

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={titulo}
        onChangeText={onTituloChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción (opcional)"
        value={descripcion}
        onChangeText={onDescripcionChange}
      />
      <View style={styles.prioridadSelectorContainer}>
        <TouchableOpacity style={[styles.botonPrioridad, styles.prioridadBaja, prioridad === 'Baja' && styles.prioridadSeleccionada]} onPress={() => onPrioridadChange('Baja')}><Text style={styles.textoBotonPrioridad}>Baja</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.botonPrioridad, styles.prioridadMedia, prioridad === 'Media' && styles.prioridadSeleccionada]} onPress={() => onPrioridadChange('Media')}><Text style={styles.textoBotonPrioridad}>Media</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.botonPrioridad, styles.prioridadAlta, prioridad === 'Alta' && styles.prioridadSeleccionada]} onPress={() => onPrioridadChange('Alta')}><Text style={styles.textoBotonPrioridad}>Alta</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.pickerTrigger} onPress={() => onOpenModal('categoria')}>
        <Text style={styles.pickerTriggerTexto}>📚 Categoría: {categoria}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pickerTrigger} onPress={() => onOpenModal('fecha')}>
        <Text style={styles.pickerTriggerTexto}>📅 Fecha de Entrega: {new Date(fecha_entrega).toLocaleDateString('es-ES')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonAgregar} onPress={onSave}>
        <Text style={styles.textoBoton}>{id ? "✏️ Actualizar" : "➕ Agregar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskForm;