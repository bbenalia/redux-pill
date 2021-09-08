export function getFilterParams(filters) {
  //   const query = "?";

  //   for (const property in filters) {
  //     console.log(`${property}: ${object[property]}`);
  //   }

  const arr = Object.values(filters);

  const pr = arr.map((filter) => {
    const arrFilters = Object.values(filter);
    return arrFilters;
  });

  console.log("PPPPPRRR", pr);
}
