import "./bootstrap";

import { createApp } from "vue";
import Counter from "./components/Counter.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp();

app.component("counter", Counter);

app.use(vuetify);

app.mount("#app");
