// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import DefaultLayout from '~/layouts/Default.vue'
import AltLayout from '~/layouts/AltLayout.vue';

export default function(Vue, { router, head, isClient }) {
	head.htmlAttrs = { lang: 'pl' };
	head.bodyAttrs = { class: 'body' };
	head.htmlAttrs = {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1'
	};
	// Set default layout or its alternative ie. in this case it is AltLayout as a global component
	Vue.component('Layout', AltLayout);
}
