import INITIAL_STATE from "../redux/filters/state";

export default function getFiltersFromQueryParams(entriesURL) {
  const obj = { ...INITIAL_STATE.filters };

  // eslint-disable-next-line no-restricted-syntax
  for (const pair of entriesURL) {
    if (
      pair[0] === "type" ||
      pair[0] === "room" ||
      pair[0] === "bath" ||
      pair[0] === "condition"
    ) {
      obj[pair[0]] = { ...obj[pair[0]], [pair[1]]: true };
    } else if (pair[0] === "room_gte") {
      obj.room = { ...obj.room, 4: true };
    } else if (pair[0] === "bath_gte") {
      obj.bath = { ...obj.bath, 3: true };
    } else if (pair[0] === "price_lte") {
      obj.price = { ...obj.price, max: pair[1] };
    } else if (pair[0] === "price_gte") {
      obj.price = { ...obj.price, min: pair[1] };
    } else if (pair[0] === "publication_date_gte") {
      const qDate = new Date(pair[1]);
      const now = new Date();
      if (now.getDate() - qDate.getDate() > 1)
        obj.publication_date = "Last week";
      else obj.publication_date = "Last 24 hours";
    } else if (pair[0] === "equipment") {
      obj.equipment = pair[1];
    } else if (pair[0] === "q") {
      obj.search = pair[1];
    } else {
      obj.moreFilters = { ...obj.moreFilters, [pair[0]]: true };
    }
  }

  return obj;
}
