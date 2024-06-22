const MyError = require("../models/MyError");
//const dynamicModule = require("../schema/");
const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");
const ajv = new Ajv({ allErrors: true });
addFormats(ajv); // Add formats to Ajv instance
// const checkSchema = (schemaModule) => {
//   console.log(schemaModule);
//   return (req, res, next) => {
//     console.log(schemaModule);
//   };
// };
const checkSchema = (schemaModule) => {
  console.log(schemaModule, "here");
  return (req, res, next) => {
    try {
      if (!schemaModule) {
        const err = new MyError("missing schema", 500);
        next(err);
      }
      const dynamicModule = require(`../schema/${schemaModule}`);
      console.log("before");

      const validate_schema = ajv.compile(dynamicModule);
      console.log("after");

      if (!validate_schema(req.body)) {
        console.log(validate_schema.errors, "here");
        const formattedErrors = transformErrors(validate_schema.errors);
        const err = new MyError("Schema Error", 400, formattedErrors);
        err.errors = formattedErrors;
        next(err);
      }
      console.log("SchemaOK");
      next();
    } catch (error) {
      console.log(error);

      const err = new MyError("Internal Error", 500);
      next(err);
    }
  };
};

module.exports = {
  checkSchema,
};
const transformErrors = (errors) => {
  const errorObj = {};
  errors.forEach((err) => {
    const field = err.instancePath.slice(1); // Remove the leading slash
    const result = err.message.replace(/"/g, "");
    errorObj[field] = result;
  });
  return errorObj;
};
