// En producción ejecutar
// export REACT_APP_MODE=dev en el ambiente
// https://serverless-stack.com/chapters/manage-environments-in-create-react-app.html

const dev = {
  endPoint: "https://reqres.in/api/login"
};

const casa = {
  endPoint: "http://192.168.1.44:9000"
};

const prod = {
  endPoint: "http://localhost:9000"
};

// Default to dev if not set
let config = dev;
if (process.env.REACT_APP_MODE) {
  switch (process.env.REACT_APP_MODE) {
    case "prod":
      config = prod;
      break;
    case "casa":
      config = casa;
      break;
    default:
      config = dev;
  }
  config = process.env.REACT_APP_MODE === "prod" ? prod : dev;
}
config = process.env.REACT_APP_MODE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
