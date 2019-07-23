import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("./service-worker.ts").then(
            function(registration) {
                // Registration was successful
                console.log("ServiceWorker registration successful with scope: ", registration.scope);
            },
            function(err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            },
        );
    });
}
/* use hydrate instead of render for SSR */
if (process.env.NODE_ENV === "production") {
    ReactDOM.hydrate(<App />, document.querySelector("#app"));
} else {
    ReactDOM.render(<App />, document.querySelector("#app"));
    module.hot.accept();
}
