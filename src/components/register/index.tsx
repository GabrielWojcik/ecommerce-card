import React, { useState } from "react";
import { Auth } from "aws-amplify"

type User = {
    email: string;
    password: string;
  };
  const RegisterPage:React.FC = () => {
    const [user, setUser] = useState<User>({
      email: "",
      password: "",
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const result = await Auth.signUp({
          username: user.email,
          password: user.password,
          // if custom attribute is added
          attributes: {
            "custom:role": "user",
          },
        })
        return result
      } catch (error) {
        console.error("Error registering user:", error)
      }
      console.log("User registered:", user);
    };
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    );
  };
  export default RegisterPage;