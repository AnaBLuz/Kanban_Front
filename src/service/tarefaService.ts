import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const getTasks = () => axios.get(`${API_URL}/tasks`);

export const createTask = (data: {
  title: string;
  description?: string;
  status?: string;
}) => axios.post(`${API_URL}/tasks`, data);

export const updateTask = (id: number, data: any) =>
  axios.put(`${API_URL}/tasks/${id}`, data);

export const deleteTask = (id: number) =>
  axios.delete(`${API_URL}/tasks/${id}`);

export const getTasksByStatus = (status: string) =>
  axios.get(`${API_URL}/tasks/status/${status}`);