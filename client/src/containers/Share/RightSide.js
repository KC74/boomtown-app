import React, { Component } from "react";
import PropTypes from "prop-types";
import { Step, Stepper, StepButton, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { shareDescriptionInput, shareTitleInput } from "../Login/textinput";
import { Form, Field, reduxForm } from "redux-form";
import BoomSelectField from "../../components/SelectField/";
import { setTags } from "../../redux/modules/tags";
import "./styles.css";

class RightSide extends Component {
  state = {
    stepIndex: 0
  };

  _handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 3) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  _handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  _renderStepActions(step) {
    return (
      <div style={{ margin: "12px 0" }}>
        {step === 3 ? (
          <RaisedButton
            label="Confirm"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this._handleNext}
            style={{ marginRight: 12 }}
          />
        ) : (
          <RaisedButton
            label="Next"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this._handleNext}
            style={{ marginRight: 12 }}
          />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            backgroundColor="black"
            hoverColor={"grey"}
            labelStyle={{ color: "white" }}
            onClick={this._handlePrev}
          />
        )}
      </div>
    );
  }
  render() {
    const { stepIndex } = this.state;
    const { tags, selectedTags, handleChange } = this.props;
    return (
      <Form>
        <div style={{ maxWidth: 380, maxHeight: 400, margin: "auto" }}>
          <Stepper activeStep={stepIndex} linear={false} orientation="vertical">
            <Step>
              <StepButton>Add an Image</StepButton>
              <StepContent className="step-content">
                <p>
                  We live in a visual culture. Upload an image of the item
                  you're sharing.
                </p>
                <RaisedButton
                  label="Select an image"
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  onClick={this.handleNext}
                  style={{
                    marginRight: 12,
                    textTransform: "uppercase",
                    marginTop: 12
                  }}
                />
                {this._renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton>Add a Title & Description</StepButton>
              <StepContent className="step-content">
                <p>
                  Folks need to know what you're sharing. Give them a clue by
                  adding a title & description.
                </p>
                <Field name="title" component={shareTitleInput} />
                <Field name="description" component={shareDescriptionInput} />
                {this._renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton>Categorize Your Item</StepButton>
              <StepContent className="step-content">
                <p>
                  To share an item, you'll add it to our list of categories. You
                  can select multiple categories.
                </p>
                <BoomSelectField
                  values={selectedTags}
                  handleChange={handleChange}
                  labels={tags}
                />
                {this._renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepButton>Confirm Things!</StepButton>
              <StepContent className="step-content">
                <p>Great! If you're happy with everything, tap the button.</p>
                {this._renderStepActions(3)}
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </Form>
    );
  }
}

RightSide.propTypes = {};

const shareForm = reduxForm({
  // a unique name for the form
  form: "shareForm"
})(RightSide);

export default shareForm;
