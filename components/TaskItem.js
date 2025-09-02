// Archivo: components/TaskItem.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { styles } from '../styles';

// Usamos React.memo para optimizar: este componente solo se re-renderizará si sus props cambian.
const TaskItem = React.memo(({ item, onToggle, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={[styles.prioridadBarra, styles[`prioridadBarra${item.prioridad}`]]} />
      <View style={styles.itemContenido}>
        <TouchableOpacity style={styles.tareaTextoContainer} onPress={() => onToggle(item.id, item.completada)}>
          {item.categoria && (
            <View style={styles.categoriaPill}>
              <Text style={styles.categoriaTexto}>{item.categoria}</Text>
            </View>
          )}
          <Text style={[styles.tarea, item.completada && styles.tareaCompletada]}>
            {item.titulo}
          </Text>
          {item.descripcion ? (
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          ) : null}
          {item.fecha_entrega && (
            <Text style={styles.fecha}>
              Entrega: {new Date(item.fecha_entrega).toLocaleDateString('es-ES')}
            </Text>
          )}
        </TouchableOpacity>
        <View style={styles.acciones}>
          <TouchableOpacity onPress={() => onEdit(item)}>
            <Feather name="edit" size={22} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <AntDesign name="delete" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default TaskItem;