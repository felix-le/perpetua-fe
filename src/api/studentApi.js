import { get } from './baseApi';

export async function getStudentsApi() {
  return get(`/students`);
}
