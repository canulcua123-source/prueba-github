// Archivo: styles.js (Versión Final Organizada)

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // --- Contenedor Principal y Título ---
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: "#f9f9f9" },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: '#333' },

  // --- Formulario ---
  input: { borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 10, backgroundColor: "#fff", marginBottom: 10, fontSize: 16 },
  botonAgregar: { backgroundColor: "#007bff", justifyContent: "center", alignItems: "center", padding: 14, borderRadius: 10, marginTop: 10, marginBottom: 20 },
  textoBoton: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  // --- Selector de Prioridad (Formulario) ---
  prioridadSelectorContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  botonPrioridad: { flex: 1, padding: 12, borderRadius: 10, alignItems: 'center', borderWidth: 2, borderColor: 'transparent', marginHorizontal: 4 },
  textoBotonPrioridad: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  prioridadBaja: { backgroundColor: '#28a745' },
  prioridadMedia: { backgroundColor: '#ffc107' },
  prioridadAlta: { backgroundColor: '#dc3545' },
  prioridadSeleccionada: { borderColor: '#343a40', transform: [{ scale: 1.05 }] },
  
  // --- Item Individual de la Lista de Tareas ---
  item: { flexDirection: 'row', alignItems: 'stretch', backgroundColor: '#fff', marginBottom: 10, borderRadius: 12, shadowColor: "#000", shadowOpacity: 0.05, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 2, overflow: 'hidden' },
  itemContenido: { flex: 1, flexDirection: 'row', padding: 15, alignItems: 'center' },
  tareaTextoContainer: { flex: 1 },
  tarea: { fontSize: 18, color: "#333", fontWeight: '500' },
  tareaCompletada: { textDecorationLine: "line-through", color: "gray", fontWeight: 'normal' },
  descripcion: { fontSize: 14, color: "#555", marginTop: 4 },
  acciones: { flexDirection: "row", gap: 15, marginLeft: 10 },
  fecha: { fontSize: 13, color: "#888", marginTop: 6, fontStyle: 'italic' },
  categoriaPill: { backgroundColor: '#e0e0e0', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, alignSelf: 'flex-start', marginBottom: 8 },
  categoriaTexto: { color: '#333', fontSize: 12, fontWeight: 'bold' },
  prioridadBarra: { width: 10 },
  prioridadBarraBaja: { backgroundColor: '#28a745' },
  prioridadBarraMedia: { backgroundColor: '#ffc107' },
  prioridadBarraAlta: { backgroundColor: '#dc3545' },

  // --- Modal y Selectores ---
  pickerTrigger: { borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 10 },
  pickerTriggerTexto: { fontSize: 16, color: '#333' },
  modalContainer: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContenido: { backgroundColor: '#f7f7f7', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, maxHeight: '50%' },
  botonCerrarModal: { backgroundColor: "#007bff", justifyContent: "center", alignItems: "center", padding: 14, borderRadius: 10, marginTop: 20 },
});