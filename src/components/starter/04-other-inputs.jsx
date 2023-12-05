import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [user, setUser] = useState(false);
  const [framework, setFramework] = useState("react");
  const handleCheck = (e) => {
    console.log(e.target.checked);
    setUser(e.target.checked);
  };

  const handleFramework = (e) => {
    // e.preventDefault();
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="bg-slate-400 h-600 w-1000 mx-11 my-20">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="name" className="font-semibold mx-3">
            Free Shopping
          </label>
          <input
            type="checkbox"
            name="user"
            checked={user}
            onChange={handleCheck}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="name" className="font-semibold mx-3">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((key) => {
              return (
                <option key={key} className="bg-violet-600">
                  {key}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="bg-purple-900 rounded-full p-2 mx-10">
          submit
        </button>
      </form>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
export default OtherInputs;
