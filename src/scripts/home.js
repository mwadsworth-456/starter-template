/* global updateProgressBar modForm Modalytics modCarousel*/
/* exported home */

import { siteData } from '../../siteconfig.js';
import { templateData } from '../../template.js';
import { globalFunctions } from '@/scripts/globals.js';

import '../styles/home.scss';

const config = { ...siteData(), ...templateData() };

globalFunctions(config);

export const home = {
	activeStepIndex: 1,
	hasInitializedEvents: false,
	swiperFormClass: '.swiper--form',
	formSwiperInstance: window.modCarousel.init('.swiper--form', {
		speed: 500,
		preventInteractionOnTransition: true,
		a11y: {
			slideLabelMessage: '',
			containerRoleDescriptionMessage: 'carousel',
			slideRole: ''
		}
	}),
	initModForm: function() {
		const _this = this;

		modForm.init({
			vertical: config.service,
			showLoadingOverlay: true,
			showRedirectOverlay: true,
			appendTyToHrcUrl: true,
			hashStepTracking: true,
			useQSApi: true,
			useAutofill: true,
			useSmoothScrolling: true,
			trackZip1ChangeDynamically: true,
			showSecureText: false,
			maskedPhoneFields: window.modForm.opts.form.querySelectorAll('input[name="homePhone"]'),
			formSwiperInstance: _this.formSwiperInstance,
			addAccessibilityUpdates: true,
			useStepNameHash: true,
			isVite: config.isVite,
			useFormsServiceApi: true,
			fetchAndFormatConsentListings: true,
			useGlobalInitCarousel: true,
			stepChangedCallback: function(oldStepId, newStepId) {
				_this.activeStepIndex = parseInt(newStepId.slice(4));

				if (oldStepId === newStepId) {
					return;
				}

				if (oldStepId === 'step1' && newStepId === 'step2') {
					if (!_this.hasInitializedEvents) {
						modForm.initClickToProceed();
						modForm.initBackButtons();
						modForm.zipControlButtonClick();

						_this.hasInitializedEvents = true;
					}
				}

				_this.formSwiperInstance.slideTo(_this.activeStepIndex - 1);

				updateProgressBar(_this.activeStepIndex);

				if (_this.activeStepIndex > 1) {
					document.body.classList.add('form-in-progress');
					document.querySelector(_this.swiperFormClass).setAttribute('tabindex', '-1');
				} else {
					document.body.classList.remove('form-in-progress');
					document.querySelector(_this.swiperFormClass).setAttribute('tabindex', '0');
				}
			}
		});
	},
	init: function() {
		this.initModForm();
	}
};

document.addEventListener('DOMContentLoaded', function() {
	home.init();
});

window.addEventListener('load', function() {
	window.IdlizeQueue.pushTask(() => {
		if (window.Modalytics) {
			Modalytics.initGtm();
		}
	});
});
