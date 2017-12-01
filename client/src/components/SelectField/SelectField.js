import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
  marginTop: 8
};

const BoomSelectField = ({ values, handleChange, labels }) => {
  const menuItems = values => {
    return labels.map(name => {
      return (
        <MenuItem
          key={name}
          insetChildren={true}
          checked={values && values.indexOf(name) > -1}
          value={name}
          primaryText={name}
        />
      );
    });
  };

  return (
    <SelectField
      multiple={true}
      hintText="Filter Tag By"
      value={values}
      onChange={handleChange}
      style={styles}
    >
      {menuItems(values)}
    </SelectField>
  );
};

export default BoomSelectField;
