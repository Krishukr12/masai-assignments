import { useReducer, useState } from "react";

interface FormState {
  name: string;
  establishment_year: string;
  address: {
    building: string;
    street: string;
    city: {
      name: string;
      locality: {
        pinCode: string;
        landmark: string;
      };
    };
    state: string;
    coordinates: { latitude: number; longitude: number };
  };
  courses_offered: string[];
  error: string | null;
}

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_ESTABLISHMENT_YEAR"; payload: string }
  | { type: "SET_BUILDING"; payload: string }
  | { type: "SET_STREET"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_STATE"; payload: string }
  | { type: "SET_PINCODE"; payload: string }
  | { type: "SET_LANDMARK"; payload: string }
  | { type: "SET_COURSE"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "RESET" };

const initialState: FormState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: { latitude: 0, longitude: 0 },
  },
  courses_offered: [],
  error: null,
};

function formReducer(state: FormState, action: FormAction): FormState {
  try {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload, error: null };
      case "SET_ESTABLISHMENT_YEAR":
        return { ...state, establishment_year: action.payload, error: null };
      case "SET_BUILDING":
        return {
          ...state,
          address: { ...state.address, building: action.payload },
          error: null,
        };
      case "SET_STREET":
        return {
          ...state,
          address: { ...state.address, street: action.payload },
          error: null,
        };
      case "SET_CITY":
        return {
          ...state,
          address: {
            ...state.address,
            city: { ...state.address.city, name: action.payload },
          },
          error: null,
        };
      case "SET_STATE":
        return {
          ...state,
          address: { ...state.address, state: action.payload },
          error: null,
        };
      case "SET_PINCODE":
        return {
          ...state,
          address: {
            ...state.address,
            city: {
              ...state.address.city,
              locality: {
                ...state.address.city.locality,
                pinCode: action.payload,
              },
            },
          },
          error: null,
        };
      case "SET_LANDMARK":
        return {
          ...state,
          address: {
            ...state.address,
            city: {
              ...state.address.city,
              locality: {
                ...state.address.city.locality,
                landmark: action.payload,
              },
            },
          },
          error: null,
        };
      case "SET_COURSE":
        return {
          ...state,
          courses_offered: [...state.courses_offered, action.payload],
          error: null,
        };
      case "CLEAR_ERROR":
        return { ...state, error: null };
      case "RESET":
        return initialState;
      default:
        throw new Error("Invalid action type");
    }
  } catch (error) {
    return {
      ...state,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-2xl mx-auto flex gap-2">
      <form onSubmit={handleSubmit} className="shadow p-5 flex flex-col gap-2">
        {state.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{state.error}</span>
            <button
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => dispatch({ type: "CLEAR_ERROR" })}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </button>
          </div>
        )}
        <section className="flex flex-col">
          <label htmlFor="collegeName">College</label>
          <input
            className="outline-none border p-0.5 rounded"
            type="text"
            id="collegeName"
            name="collegeName"
            placeholder="Enter college name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="establishmentYear">Establishment year</label>
          <input
            className="outline-none border p-0.5 rounded"
            type="number"
            id="establishmentYear"
            name="establishmentYear"
            placeholder="Establishment year"
            min="1800"
            max={new Date().getFullYear()}
            value={state.establishment_year}
            onChange={(e) =>
              dispatch({
                type: "SET_ESTABLISHMENT_YEAR",
                payload: e.target.value,
              })
            }
          />
        </section>
        <section className="flex flex-col gap-2.5">
          <label>Address</label>
          <input
            placeholder="Building"
            className="outline-none border p-0.5 rounded"
            type="text"
            value={state.address.building}
            onChange={(e) =>
              dispatch({ type: "SET_BUILDING", payload: e.target.value })
            }
          />
          <input
            placeholder="Street"
            className="outline-none border p-0.5 rounded"
            type="text"
            value={state.address.street}
            onChange={(e) =>
              dispatch({ type: "SET_STREET", payload: e.target.value })
            }
          />
          <input
            placeholder="City"
            className="outline-none border p-0.5 rounded"
            type="text"
            value={state.address.city.name}
            onChange={(e) =>
              dispatch({ type: "SET_CITY", payload: e.target.value })
            }
          />
          <input
            placeholder="State"
            className="outline-none border p-0.5 rounded"
            type="text"
            value={state.address.state}
            onChange={(e) =>
              dispatch({ type: "SET_STATE", payload: e.target.value })
            }
          />
          <input
            placeholder="Pincode"
            className="outline-none border p-0.5 rounded"
            type="number"
            value={state.address.city.locality.pinCode}
            onChange={(e) =>
              dispatch({ type: "SET_PINCODE", payload: e.target.value })
            }
          />
          <input
            placeholder="Landmark"
            className="outline-none border p-0.5 rounded"
            type="text"
            value={state.address.city.locality.landmark}
            onChange={(e) =>
              dispatch({ type: "SET_LANDMARK", payload: e.target.value })
            }
          />
        </section>
        <section className="flex flex-col">
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            name="course"
            className="p-2 border rounded outline-none"
            value=""
            onChange={(e) =>
              dispatch({ type: "SET_COURSE", payload: e.target.value })
            }
          >
            <option value="">Select a course</option>
            <option value="computer-science">Computer Science</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business Administration</option>
            <option value="medicine">Medicine</option>
            <option value="arts">Arts & Humanities</option>
            <option value="law">Law</option>
            <option value="education">Education</option>
            <option value="science">Science</option>
          </select>
        </section>
        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="mt-8 shadow p-5 rounded">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Submitted College Details</h2>
            <button
              onClick={handleReset}
              className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 text-sm"
            >
              Reset Form
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">Basic Information</h3>
              <p>
                <span className="font-medium">College Name:</span> {state.name}
              </p>
              <p>
                <span className="font-medium">Establishment Year:</span>{" "}
                {state.establishment_year}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p>
                <span className="font-medium">Building:</span>{" "}
                {state.address.building}
              </p>
              <p>
                <span className="font-medium">Street:</span>{" "}
                {state.address.street}
              </p>
              <p>
                <span className="font-medium">City:</span>{" "}
                {state.address.city.name}
              </p>
              <p>
                <span className="font-medium">State:</span>{" "}
                {state.address.state}
              </p>
              <p>
                <span className="font-medium">Pincode:</span>{" "}
                {state.address.city.locality.pinCode}
              </p>
              <p>
                <span className="font-medium">Landmark:</span>{" "}
                {state.address.city.locality.landmark}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Courses Offered</h3>
              {state.courses_offered.length > 0 ? (
                <ul className="list-disc list-inside">
                  {state.courses_offered.map((course, index) => (
                    <li key={index} className="capitalize">
                      {course.replace(/-/g, " ")}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No courses selected</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Coordinates</h3>
              <p>
                <span className="font-medium">Latitude:</span>{" "}
                {state.address.coordinates.latitude}
              </p>
              <p>
                <span className="font-medium">Longitude:</span>{" "}
                {state.address.coordinates.longitude}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
