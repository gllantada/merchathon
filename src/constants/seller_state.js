export const PARA_PREPARAR = 1;
export const EN_PREPARACION = 2;
export const PARA_DESPACHO = 3;
const messages = ["Enviar para preparar", "Enviar a despacho", "Asignar repartidor"]
const succesMessage = ["¡Ordenes en preparación!", "¡Ordenes listas para despacho!", "Ordenes asignadas para su reparto"]
export const getActionText = (nav) => {
  return messages[nav]
}
export const getSuccesMessage = (nav) => {
  return succesMessage[nav]
}