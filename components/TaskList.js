// Archivo: components/TaskList.js

import React from 'react';
import { FlatList, View } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onEdit, onDelete, loading, onRefresh }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      // Funcionalidad extra para "deslizar para refrescar"
      refreshing={loading}
      onRefresh={onRefresh}
    />
  );
};

export default TaskList;