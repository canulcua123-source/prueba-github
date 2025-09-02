// Archivo: services/supabaseService.js

import { supabase } from '../supabase';

// LEER todas las tareas
export const fetchTasks = async () => {
  const { data, error } = await supabase.from('tareas').select('*').order('created_at', { ascending: true });
  if (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
  return data;
};

// AÑADIR una nueva tarea
export const addTask = async (taskData) => {
  return await supabase.from('tareas').insert([taskData]);
};

// ACTUALIZAR una tarea existente
export const updateTask = async (id, taskData) => {
  return await supabase.from('tareas').update(taskData).eq('id', id);
};

// BORRAR una tarea
export const deleteTask = async (id) => {
  return await supabase.from('tareas').delete().eq('id', id);
};

// CAMBIAR estado de completada
export const toggleTaskComplete = async (id, currentStatus) => {
  return await supabase.from('tareas').update({ completada: !currentStatus }).eq('id', id);
};