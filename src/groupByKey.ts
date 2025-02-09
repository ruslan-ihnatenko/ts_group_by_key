type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const keyValue = String(item[key]);

    result[keyValue] = result[keyValue] ?? []; // Initialize if not present
    result[keyValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
