// 26. Lesson 26: Practice HTML DOM
// - Validation form
function Validator(options) {
  var formRules = {};

  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(".form-message");
    var errorMessage;

    var rules = formRules[rule.selector];
    if (rules) {
      for (var i = 0; i < rules.length; ++i) {
        switch (inputElement.type) {
          case "radio":
            errorMessage = rules[i](
              formElement.querySelector(rule.selector + ":checked")
            );
            break;
          case "checkbox":
            if(!input.matches(":checked")) return values;
            if(Array.isArray(value[input.name])) {
              value[input.name] = [];
            } 
            value[input.name].push(input.value);
            break;
            
          default:
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
      }
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      errorElement.style.color = "red";
    } else {
      errorElement.innerText = "";
      errorElement.style.color = "";
    }

    return !errorMessage;
  }

  var formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;

      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) isFormValid = false;
      });

      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll(
            "[name]:not([disabled])"
          );
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            switch (input.type) {
              case "radio":
                values[input.name] = formElement.querySelector(
                  "input[name='" + input.name + "']:checked"
                ).value;
                break;
              case "checkbox":
                if (!input.matches(":checked")) {
                  values[input.name] = "";
                  return values;
                }
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case "file":
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }
            return values;
          },
          {});
          options.onSubmit(formValues);
        } else {
          formElement.submit();
        }
      }
    };

    options.rules.forEach(function (rule) {
      if (!Array.isArray(formRules[rule.selector])) {
        formRules[rule.selector] = [];
      }

      formRules[rule.selector].push(rule.test);

      var inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach(function (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          var errorElement = getParent(
            inputElement,
            ".form-group"
          ).querySelector(".form-message");
          errorElement.innerText = "";
          errorElement.style.color = "";
        };
      });
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Please enter this field!";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return regex.test(value)
        ? undefined
        : message || "This field must be an email!";
    },
  };
};

Validator.minLength = function (selector, minLength, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= minLength
        ? undefined
        : message || `Please enter at least ${minLength} characters!`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "The input value does not match!";
    },
  };
};
