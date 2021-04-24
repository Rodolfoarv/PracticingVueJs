import { Pagination } from '../../types/Pagination';
import { Todo } from '../../types/Todo';

export interface GetAllTodosResponse {
  items: Todo[];
  meta: Pagination;
}

export interface GetAllTodosOptions {
  offset: number;
  limit?: number;
  description?: string;
}

const apiUrl = 'http://localhost:3000/api/v1';

export function getAllTodos(
  options: GetAllTodosOptions
): Promise<GetAllTodosResponse> {
  const url = new URL(`${apiUrl}/todo`);
  const parameters = new URLSearchParams({
    offset: options.offset.toString(),
  });

  if (options.limit) parameters.set('limit', options.limit.toString());

  if (options.description) parameters.set('description', options.description);

  url.search = parameters.toString();
  
  return fetch(url.toString()).then((res) =>
    res.json()
  ) as Promise<GetAllTodosResponse>;
}

export async function createTodo(description: string): Promise<Todo> {
  const url = new URL(`${apiUrl}/todo`);

  return fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify({ description }),
    headers: new Headers({ 'Content-type': 'application/json' }),
  }).then((res) => res.json()) as Promise<Todo>;
  
}

export async function deleteTodo(todo: Todo): Promise<boolean> {
  const url = new URL(`${apiUrl}/todo/${todo._id}`);
  let response;

  try{
    response = await fetch(url.toString(), {
      method: 'DELETE',
    });
  } catch (e) {
    console.error(e);
    return false;
  }
  return response.ok;
}


export function updateTodo(todo: Todo): Promise<Todo> {
  const url = new URL(`${apiUrl}/todo/${todo._id}`);

  return fetch(url.toString(), {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: new Headers({ 'Content-type': 'application/json' }),
  }).then((res) => res.json()) as Promise<Todo>;
}

