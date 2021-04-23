import { Pagination } from '../../types/Pagination';
import { Todo } from '../../types/Todo';

export interface FetchTodosResponse {
  items: Todo[];
  meta: Pagination;
}

export interface FetchTodosOptions {
  offset: number;
  limit?: number;
  description?: string;
}

//Change this to .env later on
const apiUrl = 'http://localhost:3000/api/v1';

export function fetchTodos(
  options: FetchTodosOptions
): Promise<FetchTodosResponse> {
  const url = new URL(`${apiUrl}/todo`);
  const params = new URLSearchParams({
    offset: options.offset.toString(),
  });

  if (options.limit) params.set('limit', options.limit.toString());

  if (options.description) params.set('description', options.description);

  url.search = params.toString();

  return fetch(url.toString()).then((res) =>
    res.json()
  ) as Promise<FetchTodosResponse>;
}
