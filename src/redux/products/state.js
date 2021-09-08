const INITIAL_STATE = {
  status: "ok",
  data: [],
  filters: {
    typeOfHome: {},
    bedrooms: {},
    bathrooms: {},
    equipment: {},
    condition: {},
    price: {
      min: "",
      max: "",
    },
    publicationDate: {},
    moreFilters: {},
    search: {},
  },
};

export default INITIAL_STATE;
