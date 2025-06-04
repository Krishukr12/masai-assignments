import { useReducer } from "react";
import { UserDetails } from "./components/UserDetails";
import { NoDetailsFound } from "./components/NoDetailsFound";

const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const RESET_FORM = "RESET_FORM";
const IS_FORM_SUBMITTED = "IS_FORM_SUBMITTED";

type ActionType =
  | { type: typeof UPDATE_EMAIL; payload: { email: string } }
  | { type: typeof UPDATE_PASSWORD; payload: { password: string } }
  | { type: typeof RESET_FORM }
  | { type: typeof IS_FORM_SUBMITTED };

interface StateType {
  email: string;
  password: string;
  isFormSubmitted: boolean;
}
const initialState: StateType = {
  email: "",
  password: "",
  isFormSubmitted: false,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.payload.email,
      };
    }

    case UPDATE_PASSWORD: {
      return {
        ...state,
        password: action.payload.password,
      };
    }

    case IS_FORM_SUBMITTED: {
      return {
        ...state,
        isFormSubmitted: true,
      };
    }

    case RESET_FORM:
      return initialState;

    default:
      return state;
  }
};

export const App = () => {
  const [{ email, password, isFormSubmitted }, dispatch] = useReducer<
    StateType,
    [action: ActionType]
  >(reducer, initialState);

  const isFormSubmittedAndHavingData =
    isFormSubmitted && Boolean(email) && Boolean(password);

  const handleFormSubmit = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: IS_FORM_SUBMITTED });
  };

  return (
    <main className="flex justify-center items-center h-screen flex-col gap-5">
      <form className=" shadow rounded flex flex-col p-5 gap-2.5">
        <input
          onChange={(e) =>
            dispatch({ type: UPDATE_EMAIL, payload: { email: e.target.value } })
          }
          value={email}
          placeholder="Enter email"
          type="email"
          name="email"
          className="outline-none p-1 border"
        />
        <input
          onChange={(e) =>
            dispatch({
              type: UPDATE_PASSWORD,
              payload: { password: e.target.value },
            })
          }
          value={password}
          placeholder="Enter password"
          type="password"
          name="password"
          className="outline-none p-1 border"
        />
        <section className=" flex gap-5">
          <input
            onClick={(e) => handleFormSubmit(e)}
            className=" shadow cursor-pointer px-2"
            type="submit"
          />
          <input
            onClick={() => dispatch({ type: RESET_FORM })}
            className="px-2 shadow cursor-pointer"
            type="reset"
          />
        </section>
      </form>

      {isFormSubmittedAndHavingData ? (
        <UserDetails email={email} password={password} />
      ) : (
        <NoDetailsFound />
      )}
    </main>
  );
};
