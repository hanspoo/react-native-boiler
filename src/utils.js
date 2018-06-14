import { _ } from "lodash";
import { Toast } from "native-base";

const doFormBody = details => {
  let formBody = [];
  _.forOwn(details, (v, k) => {
    const encodedKey = encodeURIComponent(k);
    const encodedValue = encodeURIComponent(v);
    formBody.push(`${encodedKey}=${encodedValue}`);
  });
  formBody = formBody.join("&");
  return formBody;
};

const toast = (message, duration = 2500) => {
  Toast.show({
    text: message,
    duration,
    position: "bottom",
    textStyle: { textAlign: "center" },
    buttonText: "Okay"
  });
};

export { doFormBody, toast };
