import INITIAL_STATE from "./state";

import {
  FILTER_BY_HOME,
  FILTER_BY_PRICE,
  FILTER_BY_CONDITION,
  FILTER_BY_OTHER,
  FILTER_BY_SEARCH,
  FILTER_BY_ROOM,
  FILTER_BY_DATE,
  FILTER_BY_BATH,
  SET_FILTER_BY_URL,
  FILTER_BY_EQUIPMENT,
  RESET_FILTERS,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_HOME: {
      const {
        filters: { type },
      } = state;
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          type: { ...type, ...action.payload },
        },
      };
    }

    case FILTER_BY_CONDITION: {
      const {
        filters: { condition },
      } = state;
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          condition: { ...condition, ...action.payload },
        },
      };
    }

    case FILTER_BY_EQUIPMENT: {
      const { filters } = state;
      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          equipment: action.payload,
        },
      };
    }

    case FILTER_BY_DATE: {
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          publication_date: action.payload,
        },
      };
    }

    case FILTER_BY_OTHER: {
      const {
        filters: { moreFilters },
      } = state;
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          moreFilters: { ...moreFilters, ...action.payload },
        },
      };
    }

    case FILTER_BY_PRICE: {
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          price: action.payload,
        },
      };
    }

    case FILTER_BY_SEARCH: {
      const { filters } = state;
      return {
        ...state,
        status: "ok",
        filters: { ...filters, search: action.payload },
      };
    }

    case FILTER_BY_ROOM: {
      const {
        filters: { room },
      } = state;
      const { filters } = state;
      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          room: { ...room, ...action.payload },
        },
      };
    }

    case FILTER_BY_BATH: {
      const {
        filters: { bath },
      } = state;
      const { filters } = state;
      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          bath: { ...bath, ...action.payload },
        },
      };
    }

    case SET_FILTER_BY_URL: {
      const { filters } = state;
      return {
        ...state,
        status: "ok",
        filters: { ...filters, ...action.payload },
      };
    }

    case RESET_FILTERS: {
      return INITIAL_STATE;
    }

    case LOADING_FILTER_DATA:
      return { ...state, status: "loading" };

    case ERROR_FILTER_DATA:
      return { ...state, status: "error" };

    default:
      return state;
  }
};

export default reducer;
