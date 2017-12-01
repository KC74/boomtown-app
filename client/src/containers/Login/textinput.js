import React from "react";
import { TextField } from "material-ui";

export const userinput = field => (
  <div>
    <TextField
      id="username123"
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

export const shareTitleInput = field => (
  <div>
    <TextField
      id="share-title"
      {...field.input}
      hintText="Title"
      type="text"
      floatingLabelText="Title"
    />
  </div>
);
export const shareDescriptionInput = field => (
  <div>
    <TextField
      id="share-description"
      {...field.input}
      hintText="Description"
      type="text"
      floatingLabelText="Description"
    />
  </div>
);
