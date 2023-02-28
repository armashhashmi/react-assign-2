import React, { useEffect, useState } from "react";
import "./Card.css";
function Card() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: [],
  });

  const onChangeHandler = (event) => {
    if (event.target.name === "skills") {
      let copy = { ...formData };
      if (copy.skills.indexOf(event.target.value) == -1) {
        copy.skills.push(event.target.value);
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const [header, setHeader] = useState(
    "  Try it free 7 days then Rs.180/mo thereafter"
  );

  const claimTrail = (event) => {
    setFormData({
      name: "",
      email: "",
      password: "",
      skills: [],
    });
    setActive(false);
    setHeader("You have successfully subscribed to our plan");
  };

  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log("yess");
    if (
      formData.skills.length > 0 &&
      formData.name != "" &&
      formData.password != "" &&
      formData.email != ""
    ) {
      setActive(true);
    }
  }, [formData]);

  return (
    <>
      <div className="right-container">
        <div className="alert-box">{header}</div>
        <div className="form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChangeHandler}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            onChange={onChangeHandler}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <select
            name="skills"
            onChange={onChangeHandler}
            value={formData.skills}
          >
            <option value="">Choose Your Skills</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
          </select>
          <div className="chip-box">
            {formData.skills.map((ele) => (
              <div className="chip">{ele}</div>
            ))}
          </div>
          {active ? (
            <button className="btn-active" onClick={claimTrail}>
              CLAIM YOUR FREE TRAIL
            </button>
          ) : (
            <button
              className="btn-disabled"
              onClick={() => console.log(formData)}
            >
              CLAIM YOUR FREE TRAIL
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
