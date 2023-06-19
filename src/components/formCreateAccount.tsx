import React, { FunctionComponent, useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../model/auth";
import { AuthContext } from "../model/context/authContext";

import { Form, FormField, TextInput, Text, Box, Button } from "grommet";
import * as Icons from "grommet-icons";

import { useNavigate } from "react-router-dom";

interface Hueta {
  login: string;
  pass: string;
}

export const FormCreateAccount: FunctionComponent = () => {
  const [value, setValue] = useState<Hueta>({ login: "", pass: "" });
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const reset = () => {
    setValue({ login: "", pass: "" });
  };

  const createAcc = () => {
    createUserWithEmailAndPassword(auth, value.login, value.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsAuth(true);
        localStorage.setItem("isAuth", "true");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <Box gap="medium">
      <Box onClick={() => navigate("/login")}>
        <Icons.FormPrevious size="large" />
      </Box>
      <Form
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onReset={reset}
        onSubmit={createAcc}
      >
        <FormField label="Login">
          <TextInput
            name="login"
            size="small"
            placeholder={
              <Text size="small" weight="normal" color="dark-3">
                example@gmail.com
              </Text>
            }
          />
        </FormField>
        <FormField label="Password" margin={{ top: "small" }}>
          <TextInput
            name="pass"
            size="small"
            placeholder={
              <Text size="small" weight="normal" color="dark-3">
                enter your password
              </Text>
            }
          />
        </FormField>
        <Box direction="row" gap="medium" margin={{ top: "large" }}>
          <Button
            type="submit"
            primary
            label={<Text weight="bold">Create an account</Text>}
          />
          <Button type="reset" label={<Text weight="normal">Reset</Text>} />
        </Box>
      </Form>
    </Box>
  );
};
