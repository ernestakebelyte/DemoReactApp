import axios from "axios";

export interface TaskType {
  id: number;
  name: string;
}

export async function fetchTaskTypes(): Promise<TaskType[]> {
  const response = axios.get('http://localhost:8080/api/taskTypes');
  return (await response).data;
} 