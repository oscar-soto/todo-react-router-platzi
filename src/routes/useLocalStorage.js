import { useEffect, useReducer } from 'react';

const initialState = ({ initialValue }) => ({
  item: initialValue,
  loading: true,
  error: false,
  sincrnizedItem: true,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincrnizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincrnizedItem: false,
  },
});

const reducer = (state, action) =>
  reducerObject(state, action.payload)[action.type] || state;

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { item, loading, error, sincrnizedItem } = state;

  // Actions creators
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onSuccess = (items) => {
    dispatch({ type: actionTypes.success, payload: items });
  };
  const onSave = (items) => {
    dispatch({ type: actionTypes.save, payload: items });
  };
  const onSincronize = () => {
    dispatch({ type: actionTypes.sincronize });
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        // Consulta a Local Storage
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        onSuccess(parsedItems);
      } catch (error) {
        onError(error);
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincrnizedItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    loading,
    error,
    saveItem,
    sincronizeItem,
  };
}

export { useLocalStorage };
