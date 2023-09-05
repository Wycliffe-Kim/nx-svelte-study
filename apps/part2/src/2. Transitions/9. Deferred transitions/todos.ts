import { writable } from 'svelte/store';
import { TodoData } from './TodoData';
import { isEqual } from 'lodash';

type TodoDataWithId = TodoData & { id: number };

export const createTodoStore = (initial: TodoData[]) => {
  let uid = 1;

  const todos = initial.map(({ done, description }) => ({
    id: uid++,
    done,
    description,
  }));

  const { subscribe, update } = writable(todos);

  return {
    subscribe,
    add: (description: string) => {
      const todo = {
        id: uid++,
        done: false,
        description,
      };

      update(($todos) => [...$todos, todo]);
    },
    remove: (todo: TodoDataWithId) => {
      update(($todos) => $todos.filter((t) => !isEqual(t, todo)));
    },
    mark: (todo: TodoDataWithId, done: boolean) => {
      update(($todos) => [
        ...$todos.filter((t) => t !== todo),
        { ...todo, done },
      ]);
    },
  };
};

export type TodoStore = ReturnType<typeof createTodoStore>;
