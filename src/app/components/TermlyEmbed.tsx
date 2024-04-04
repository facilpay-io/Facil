import React, { useEffect } from "react";

const policies = {
  "terms-of-service": "5f9f09ae-2de7-4968-8e0c-f12dbe33064a",
  privacy: "5f9f09ae-2de7-4968-8e0c-f12dbe33064a",
  "cookie-policy": "5f9f09ae-2de7-4968-8e0c-f12dbe33064a",
};

export function TermlyEmbed(props: { policy: keyof typeof policies }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div
      // @ts-ignore
      name="termly-embed"
      data-id={policies[props.policy]}
      data-type="iframe"
    ></div>
  );
}