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

  if (filters.price.min || filters.price.max) {
    const { min, max } = filters.price;
    query += `price_gte=${min}&price_lte=${max}&`;
  }

  if (filters.condition) {
    Object.entries(filters.condition).map(([key, value]) => {
      if (value) query += `condition=${key}&`;
      return value;
    });
  }

  if (filters.moreFilters) {
    Object.entries(filters.moreFilters).map(([key, value]) => {
      if (value) query += `${key}=${value}&`;
      return value;
    });
  }

  return query;
}
