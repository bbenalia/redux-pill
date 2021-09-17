const INITIAL_STATE = {
  status: "ok",
  filters: {
    type: {},
    room: {},
    bath: {},
    equipment: {},
    condition: {},
    price: {
      min: "",
      max: "",
    },
    publication_date: "",
    moreFilters: {},
    search: "",
    page: 1,
  },
};

export default INITIAL_STATE;
