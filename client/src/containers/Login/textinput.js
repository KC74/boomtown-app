import React from "react";
import { TextField } from "material-ui";

export const userinput = field => (
  <div>
    <TextField 
        id="username" 
        {...field.input} 
        hintText="Email"
        type="email"
        floatingLabelText="Email"
    />
  </div>
);

export const passwordinput = field => (
  <div>
    <TextField
      id="password"
      {...field.input}
      hintText="Password"
      type="password" 
      floatingLabelText="Password"
    />
  </div>
);
