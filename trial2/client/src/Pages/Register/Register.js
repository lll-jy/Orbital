import React, {useState} from "react";
import FormErrors from "../../Components/FormErrors/FormErrors";
import Button from "../../Components/Button/Button";
import validator from "validator";
import "../../Components/Form/Form.css";

export default function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = async event => {
    event.preventDefault();
    setErrors([]);
    let _errors = [];

    if (!name) _errors.push('Name is required');
    if (!validator.isEmail(email)) _errors.push('Email format is incorrect');
    if (!password) _errors.push('Password is required');
    if (!passwordAgain) _errors.push('Password is required');
    if (password !== passwordAgain) _errors.push('Passwords must match');

    if (_errors.length) return setErrors(_errors);
  };

  return (
    <div className="page">
      <h1 className="page__title">Register</h1>
      <form onSubmit={onSubmit} className="form">
	{!!errors.length && <FormErrors errors={errors} />}
	<div className="form__group">
	  <label className="form__label">Name</label>
	  <input
	    type="text"
	    className="form_input"
	    value={name}
	    onChange={e => setName(e.target.value)}
	  />
	</div>
	<div className="form__group">
	  <label className="form__label">Email</label>
	  <input
	    type="text"
	    className="form_input"
	    value={email}
	    onChange={e => setEmail(e.target.value)}
	  />
	</div>
	<div className="form__group">
	  <label className="form__label">Password</label>
	  <input
	    type="text"
	    className="form_input"
	    value={password}
	    onChange={e => setPassword(e.target.value)}
	  />
	</div>
	<div className="form__group">
	  <label className="form__label">Confirm your password</label>
	  <input
	    type="text"
	    className="form_input"
	    value={passwordAgain}
	    onChange={e => setPasswordAgain(e.target.value)}
	  />
	</div>
	<Button type="submit">Register</Button>
      </form>
    </div>
  )
}
