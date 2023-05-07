1. Finish The ReadMe File

Plugin Logic

5. Mention in the docs that the global composables are prefixed with v in order to avoid name conflicts with other global composables
   // TODO: Explain This ->

Explain that vuetify automatically injects the $vuetify provider on the vueApp (client) but not on the server. 
It can be accessed via `this.$vuetify`using the options api on the client (show example defineNuxtComponent(mounted() {this.$vuetify})).
It will NOT be accessible in the setup function via`const { $vuetify } = useNuxtApp()`Instead, you should use $vuxtify on both the client and server (for consistency). $vuxtify is the same as the $vuetify provider but it's also available on the server on inside the setup function via`const { $vuxtify } = useNuxtApp()`
