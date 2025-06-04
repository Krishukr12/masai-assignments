import { useReducer } from "react";

export const TOGGLE_THEME = "TOGGLE_THEME";

interface ActionType {
  type: typeof TOGGLE_THEME;
}

type Theme = "light" | "dark";

interface InitialStateType {
  theme: Theme;
}

const initialState: InitialStateType = {
  theme: "light",
};

const reducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    }
    default:
      return state;
  }
};

export const App = () => {
  const [{ theme }, dispatch] = useReducer<
    InitialStateType,
    [action: ActionType]
  >(reducer, initialState);

  return (
    <main
      className={`h-screen flex justify-center items-center ${
        theme === "light"
          ? "bg-sky-100 text-gray-900"
          : "bg-gray-600 text-white"
      }`}
    >
      <button
        onClick={() => dispatch({ type: TOGGLE_THEME })}
        className="shadow p-2.5 cursor-pointer rounded-xs"
      >
        Toggle Theme
      </button>
    </main>
  );
};
