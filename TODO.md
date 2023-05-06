1. Finish The ReadMe File

Plugin Logic

1. Gather Info From The Users Nuxt Config i.e Their Builder (Webpack / Vite)
2. Install The Vuetify Plugin According To Whether Or Not They Want TreeShaking Enabled
3. If they provide a styles {config: 'path/to/styles.scss'} then we have to perform a fix to the nuxt config's sourceMaps & server/plugins/vuetify.fix.ts. See https://github.com/
4. Document the defineVuxtifyOptions composable & mention the fact that if you make changes to the config when it's outside of the nuxt.config.ts file you have to restart the dev server for the changes to take effect
5. Mention in the docs that the global composables are prefixed with v in order to avoid name conflicts with other global composables
   // TODO: Explain This ->

6. Saas variables for vite && for webpack

Explain that vuetify automatically injects the $vuetify provider on the vueApp (client) but not on the server. 
It can be accessed via `this.$vuetify`using the options api on the client (show example defineNuxtComponent(mounted() {this.$vuetify})).
It will NOT be accessible in the setup function via`const { $vuetify } = useNuxtApp()`Instead, you should use $vuxtify on both the client and server (for consistency). $vuxtify is the same as the $vuetify provider but it's also available on the server on inside the setup function via`const { $vuxtify } = useNuxtApp()`
