import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

interface InitialType {
  count: number;
}

interface ActionType {
  type: typeof INCREMENT | typeof DECREMENT;
}

const initialState: InitialType = {
  count: 0,
};

const reducer = (state: InitialType, action: ActionType) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
  }
};

export const Counter = () => {
  const [{ count }, dispatch] = useReducer<InitialType, [action: ActionType]>(
    reducer,
    initialState
  );
  return (
    <div className="p-5 flex gap-10 flex-wrap-reverse">
      <p>Count : {count}</p>
      <div className="flex justify-between gap-5">
        <button
          onClick={() => dispatch({ type: INCREMENT })}
          className="cursor-pointer"
        >
          <FaPlus />
        </button>
        <button
          onClick={() => dispatch({ type: DECREMENT })}
          className="cursor-pointer"
        >
          <FiMinus />
        </button>
      </div>
    </div>
  );
};
