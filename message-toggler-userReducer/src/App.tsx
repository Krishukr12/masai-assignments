import { useReducer } from "react";

const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";

interface ActionType {
  type: typeof TOGGLE_VISIBILITY;
}

interface InitialStateType {
  isVisible: boolean;
}

const initialState: InitialStateType = {
  isVisible: true,
};

const reducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case TOGGLE_VISIBILITY: {
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    }
    default: {
      return state;
    }
  }
};

export const App = () => {
  const [{ isVisible }, dispatch] = useReducer<
    InitialStateType,
    [action: ActionType]
  >(reducer, initialState);

  return (
    <main className="border border-red-400 h-screen flex justify-center items-center">
      <section className="flex flex-col gap-5">
        {isVisible ? <p>Hello World!</p> : null}
        <button
          onClick={() => dispatch({ type: TOGGLE_VISIBILITY })}
          className="p-2 border rounded-sm cursor-pointer"
        >
          Toggle Message
        </button>
      </section>
    </main>
  );
};
