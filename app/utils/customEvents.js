export const triggerCustomEvent = (eventName = "show-signup", detail = { show: true }) => {
  const event = new CustomEvent(eventName, {
    detail: detail,
  });

  window.dispatchEvent(event);
};

export const triggerSignUpEvent = ({ detail = {} }) => {
  triggerCustomEvent("show-signup", detail);
};
