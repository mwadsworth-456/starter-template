/**
 * Site-content that is used
 * inside HTML templates using Handlebars
 */
export let templateData = function () {
	const assetsPath = '/src/assets/images/';

	return {
		page: {
			themeFile: '',
			headConfig: {
				title: 'Compare {trade} Prices',
				description: 'Find local {trade} prices by zip code.',
				keywords: '',
				faviconPath: assetsPath + 'favicon.ico',
				useDynamicGtm: true,
				useModAnalytics: true,
				disableOgTags: true,
				vwoSetup: {
					vwoPathArray: ['none'],
				}
			},
			footAssetsConfig: {
				disableFormJs: true,
				disableJquery: true
			}
		},
		header: {
			logo: {
				picture: {

				}
			},
			additionalLogos: [
				{
					picture: {
						svg: {
							attributes: {
								class: 'header__bbb-logo'
							},
							title: {
								text: 'BBB Accredited Business'
							},
							use: {
								attributes: {
									href: assetsPath + 'sprite.svg#bbb'
								}
							}
						}
					},
				}
			]
		},
		hero: {
			attributes: {
				id: 'hero'
			},
			formTemplateInclude: 'src/templates/_partials/form.html',
			background: {
				includeOverlay: true,
				picture: {

				}
			},
			title: {
				attributes: {
					data: {
						template: 'hero-headline'
					}
				},
				text: ''
			},
			valueProps: {
				items: [
					{
						picture: {
							svg: {
								attributes: {
									role: 'presentation',
									aria: {
										hidden: true
									}
								},
								use: {
									attributes: {
										href: assetsPath + 'sprite.svg#'
									}
								}
							}

						},
						description: ''
					},
					{
						picture: {
							svg: {
								attributes: {
									role: 'presentation',
									aria: {
										hidden: true
									}
								},
								use: {
									attributes: {
										href: assetsPath + 'sprite.svg#'
									}
								}
							}
						},
						description: ''
					},
					{
						picture: {
							svg: {
								attributes: {
									role: 'presentation',
									aria: {
										hidden: true
									}
								},
								use: {
									attributes: {
										href: assetsPath + 'sprite.svg#'
									}
								}
							}
						},
						description: ''
					},
					{
						picture: {
							svg: {
								attributes: {
									role: 'presentation',
									aria: {
										hidden: true
									}
								},
								use: {
									attributes: {
										href: assetsPath + 'sprite.svg#'
									}
								}
							}
						},
						description: ''
					}
				]
			}
		},
		progressbar: {
			includePercentage: 'fill',
			showPercentageOnAllDevices: true
		},
		steps: {
			textAlignment: 'left',
			template: 'src/accessible-components/steps/steps.html',
			carouselOptions: {
				attributes: {
					id: 'swiperForm',
					class: 'swiper--form swiper--dynamic-step-height',
					role: 'group',
					tabindex: '0',
					aria: {
						label: 'Multi-Step Form',
						describedby: 'steps-description'
					}
				},
				description: 'Use the buttons on each slide (Go, Next, or Back) or click Enter to move throughout the form steps. Use tab to navigate between input fields. On the final step, the form information will be submitted. When your results load, you will be redirected to a new web page.'
			},
			items: [
				{
					attributes: {
						data: {
							'step-name': 'zip'
						}
					},
					stepHeader: {
						title: {
							attributes: {
								data: {
									template: 'form-title'
								}
							},
							text: ''
						}
					},
					stepContent: {
						title: {
							text: 'What is your zip code?'
						},
						fields: [
							{
								attributes: {
									name: 'zip',
									class: 'form-input--centered'
								},
								icon: 'icon-stroke-pin'
							}
						],
						button: {
							attributes: {
								class: 'btn--primary'
							},
							text: 'Go'
						}
					}
				},
				{
					attributes: {
						data: {
							'step-name': ''
						}
					},
					stepContent: {
						fields: [

						],
						button: {
							attributes: {
								class: 'btn--primary',
							},
							text: 'Next'
						}
					}
				},
				{
					attributes: {
						data: {
							'step-name': 'personalInfo'
						}
					},
					stepContent: {
						title: {
							text: 'Almost Done!'
						},
						fields: [
							{
								attributes: {
									name: 'firstName'
								}
							},
							{
								attributes: {
									name: 'lastName'
								}
							},
							{
								attributes: {
									name: 'address'
								}
							},
							{
								formGroup: {
									attributes: {
										class: 'zip-control-content',
										style: 'display:none;'
									}
								},
								attributes: {
									name: 'zip1'
								}
							},
							{
								fieldType: 'zip-control'
							}
						],
						secureText: {
							text: 'Encrypted form, free and competitive quotes'
						},
						button: {
							attributes: {
								class: 'btn--primary'
							},
							text: 'Next'
						}
					}
				},
				{
					attributes: {
						data: {
							'step-name': 'contactInfo'
						}
					},
					stepContent: {
						title: {
							text: 'The Last Step!'
						},
						fields: [
							{
								attributes: {
									name: 'email'
								}
							},
							{
								attributes: {
									name: 'homePhone'
								}
							}
						],
						tcpa: {},
						secureText: {
							text: 'Encrypted form, free and competitive quotes'
						},
						button: {
							attributes: {
								class: 'btn--primary',
								type: 'submit'
							},
							text: 'Compare Prices'
						}
					}
				}
			]
		},
		featuredBlock: {
			columns: [
				{
					picture: {

					}
				},
				{
					title: {
						text: ''
					},
					description: {
						text: ''
					},
					button: {
						tag: 'a',
						attributes: {
							class: 'btn--primary',
							href: '#hero'
						},
						text: 'Start Now'
					}
				}
			]
		},
		information: {
			expandCollapse: {
				attributes: {
					id: 'information-expand-collapse-btn',
					class: 'information__header expand-collapse__trigger',
					aria: {
						controls: 'information-content',
						expanded: false
					}
				},
				label: {
					collapsed: 'Show more info',
					expanded: 'Show less info'
				},
				icon: {
					collapsed: 'icon-add',
					expanded: 'icon-subtract'
				},
				collapsedByDefault: true,
				scrollToTop: true
			},
			content: {
				attributes: {
					class: 'container',
					id: 'information-content',
					role: 'region',
					tabindex: '-1'
				},
				items: [
					{
						title: {
							text: ''
						},
						summary: [
							{
								text: ''
							}
						]
					},
				]
			}
		}
	};
};
