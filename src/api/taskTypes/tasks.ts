import axios from "axios";

export interface Task {
  name: string,
  description: string,
  taskTypeId: number,
  taskTypeName: string, 

}

export async function saveTask(entity: Task): Promise<Task> {
  const response = axios
    .post('http://localhost:8080/api/tasks', entity);
  return (await response).data;
}
