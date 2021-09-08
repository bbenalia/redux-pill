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

  if (filters.price) {
    const { min, max } = filters.price;
    query += `price_gte=${min}&price_lte=${max}&`;
  }

  // console.log(query);

  return query;
}
