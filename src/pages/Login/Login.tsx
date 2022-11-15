import { FC, useState } from "react";
import useStore from "src/store";
import { Form, Input } from "./Login.styles";

export const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useStore((state) => state.login);

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Form>
      <Input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
      />
      <br />
      <br />
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </Form>
  );
};
