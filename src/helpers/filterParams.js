export function getFilterParams(filters) {
  let query = "?";

  if (filters.type) {
    Object.entries(filters.type).map(([key, value]) => {
      if (value) query += `type=${key}&`;
      return value;
    });
  }

  if (filters.search.length > 0) {
    query += `q=${filters.search}&`;
  }

  return query;
}
