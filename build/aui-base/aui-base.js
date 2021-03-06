;(function() {
	YUI.AUI_config = {
		filter: 'raw',

		io: {
			method: 'GET'
		},

        combine: false,

		groups: {
            alloy: {
				combine: false,
                modules: {
						'aui-ace-editor': {submodules: {'aui-ace-editor-theme-textmate': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-groovy': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-twilight': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-keybinding-vim': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-clojure': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-merbivore_soft': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-scala': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-csharp': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-css': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-pastel_on_dark': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-worker-javascript': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-crimson_editor': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-cobalt': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-eclipse': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-clouds_midnight': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-worker-coffee': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-scss': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-clouds': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-c_cpp': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-kr_theme': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-scad': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-perl': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-textile': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-json': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-solarized_light': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-mono_industrial': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-merbivore': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-svg': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-java': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-vibrant_ink': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-dawn': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-python': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-keybinding-emacs': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-javascript': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-monokai': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-ruby': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-worker-css': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-coffee': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-html': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-idle_fingers': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-ocaml': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-theme-solarized_dark': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-php': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-mode-xml': {requires:['aui-ace-editor-base'], skinnable:false}, 'aui-ace-editor-base': {requires:['aui-component', 'aui-node'], skinnable:false} }, skinnable:false, use:['aui-ace-editor-base','aui-ace-editor-mode-xml','aui-ace-editor-mode-php','aui-ace-editor-theme-solarized_dark','aui-ace-editor-mode-ocaml','aui-ace-editor-theme-idle_fingers','aui-ace-editor-mode-html','aui-ace-editor-mode-coffee','aui-ace-editor-worker-css','aui-ace-editor-mode-ruby','aui-ace-editor-theme-monokai','aui-ace-editor-mode-javascript','aui-ace-editor-keybinding-emacs','aui-ace-editor-mode-python','aui-ace-editor-theme-dawn','aui-ace-editor-theme-vibrant_ink','aui-ace-editor-mode-java','aui-ace-editor-mode-svg','aui-ace-editor-theme-merbivore','aui-ace-editor-theme-mono_industrial','aui-ace-editor-theme-solarized_light','aui-ace-editor-mode-json','aui-ace-editor-mode-textile','aui-ace-editor-mode-perl','aui-ace-editor-mode-scad','aui-ace-editor-theme-kr_theme','aui-ace-editor-mode-c_cpp','aui-ace-editor-theme-clouds','aui-ace-editor-mode-scss','aui-ace-editor-worker-coffee','aui-ace-editor-theme-clouds_midnight','aui-ace-editor-theme-eclipse','aui-ace-editor-theme-cobalt','aui-ace-editor-theme-crimson_editor','aui-ace-editor-worker-javascript','aui-ace-editor-theme-pastel_on_dark','aui-ace-editor-mode-css','aui-ace-editor-mode-csharp','aui-ace-editor-mode-scala','aui-ace-editor-theme-merbivore_soft','aui-ace-editor-mode-clojure','aui-ace-editor-keybinding-vim','aui-ace-editor-theme-twilight','aui-ace-editor-mode-groovy','aui-ace-editor-theme-textmate']},
						'aui-aria': {requires:['aui-base','plugin'], skinnable:false},
						'aui-autocomplete': {requires:['aui-base','aui-overlay-base','datasource','dataschema','aui-form-combobox'], skinnable:true},
						'aui-base': {skinnable:false, requires:['aui-node','aui-component','aui-debounce','aui-delayed-task','aui-selector','aui-event-base','oop','yui-throttle']},
						'aui-button-item': {requires:['aui-base','aui-state-interaction','widget-child'], skinnable:true},
						'aui-calendar': {requires:['aui-base','aui-datatype','widget-stdmod','datatype-date','widget-locale'], skinnable:true},
						'aui-carousel': {requires:['aui-base','aui-template','anim'], skinnable:true},
						'aui-char-counter': {requires:['aui-base','aui-event-input'], skinnable:false},
						'aui-chart': {requires:['datasource','aui-swf','json'], skinnable:false},
						'aui-classnamemanager': {condition: {trigger: 'classnamemanager', test: function(){return true;}}, skinnable:false, requires:['classnamemanager']},
						'aui-color-picker': {submodules: {'aui-color-picker-grid-plugin': {requires:['aui-color-picker','plugin'], skinnable:true}, 'aui-color-picker-base': {requires:['aui-overlay-context','dd-drag','slider','substitute','aui-button-item','aui-color-util','aui-form-base','aui-panel'], skinnable:true} }, use:['aui-color-picker-base','aui-color-picker-grid-plugin'], skinnable:true},
						'aui-color-util': {skinnable:false},
						'aui-component': {requires:['widget','aui-classnamemanager'], skinnable:false},
						'aui-data-browser': {requires:['aui-base','aui-datasource-control-base','aui-input-text-control','aui-tree','aui-panel'], skinnable:true},
						'aui-data-set': {requires:['oop','collection','base'], skinnable:false},
						'aui-datasource-control': {submodules: {'aui-input-text-control': {requires:['aui-base','aui-datasource-control-base','aui-form-combobox']}, 'aui-datasource-control-base': {requires:['aui-base','datasource','dataschema']} }, use:['aui-datasource-control-base','aui-input-text-control'], skinnable:true},
						'aui-datatable': {submodules: {'aui-datatable-selection': {requires:['aui-datatable-base'], skinnable:true}, 'aui-datatable-edit': {requires:['aui-calendar','aui-datatable-events','aui-toolbar','aui-form-validator','overlay','sortable'], skinnable:true}, 'aui-datatable-events': {requires:['aui-datatable-base']}, 'aui-datatable-base': {requires:['aui-base','datatable','plugin']} }, use:['aui-datatable-base','aui-datatable-events','aui-datatable-edit','aui-datatable-selection'], skinnable:false},
						'aui-datatype': {requires:['aui-base'], skinnable:false},
						'aui-datepicker': {submodules: {'aui-datepicker-select': {requires:['aui-datepicker-base','aui-button-item'], skinnable:true}, 'aui-datepicker-base': {requires:['aui-calendar','aui-overlay-context'], skinnable:true} }, use:['aui-datepicker-base','aui-datepicker-select'], skinnable:true},
						'aui-debounce': {skinnable:false},
						'aui-delayed-task': {skinnable:false},
						'aui-diagram-builder': {submodules: {'aui-diagram-builder-connector': {requires:['aui-base','arraylist-add','arraylist-filter','json','graphics','dd'], skinnable:true}, 'aui-diagram-builder-impl': {requires:['aui-diagram-builder-base','overlay'], skinnable:true}, 'aui-diagram-builder-base': {requires:['aui-tabs','aui-property-list','collection','dd'], skinnable:true} }, use:['aui-diagram-builder-base','aui-diagram-builder-impl','aui-diagram-builder-connector'], skinnable:true},
						'aui-dialog-iframe': {requires:['aui-base','aui-loading-mask','aui-resize-iframe','plugin'], skinnable:true},
						'aui-dialog': {requires:['aui-panel','dd-constrain','aui-button-item','aui-overlay-manager','aui-overlay-mask','aui-io-plugin','aui-resize'], skinnable:true},
						'aui-drawing': {submodules: {'aui-drawing-fonts': {requires:['aui-drawing-base']}, 'aui-drawing-drag': {requires:['aui-drawing-base','event-gestures']}, 'aui-drawing-animate': {requires:['aui-drawing-base']}, 'aui-drawing-base': {requires:['aui-base','aui-color-util','substitute']} }, plugins:{'aui-drawing-vml': {condition: {trigger: 'aui-drawing-base',test: function(A){return A.UA.vml;}}},'aui-drawing-svg': {condition: {trigger: 'aui-drawing-base',test: function(A){return A.UA.svg;}}}, 'aui-drawing-safari': {condition: {trigger: 'aui-drawing-base',test: function(A){var UA = A.UA; return UA.safari && (UA.version.major < 4 || (UA.iphone || UA.ipad));}}}}, use:['aui-drawing-base', 'aui-drawing-animate', 'aui-drawing-drag', 'aui-drawing-fonts'], skinnable:false},
						'aui-editable': {requires:['aui-base','aui-form-combobox'], skinnable:true},
						'aui-editor': {submodules: {'aui-editor-creole-plugin': {requires:['aui-base','editor-base','aui-editor-html-creole','aui-editor-creole-parser']}, 'aui-editor-creole-parser': {requires:['aui-base']}, 'aui-editor-bbcode-plugin': {requires:['aui-base','editor-base']}, 'aui-editor-toolbar-plugin': {requires:['aui-base','aui-button-item','aui-color-picker','aui-editor-menu-plugin','aui-editor-tools-plugin','aui-form-select','aui-overlay-context-panel','aui-panel','aui-toolbar','createlink-base','editor-lists','editor-base','plugin']}, 'aui-editor-menu-plugin': {requires:['aui-base','editor-base','aui-overlay-context','aui-panel','aui-editor-tools-plugin']}, 'aui-editor-tools-plugin': {requires:['aui-base','editor-base']}, 'aui-editor-base': {requires:['aui-base','editor-base','aui-editor-toolbar-plugin']} }, use:['aui-editor-base','aui-editor-tools-plugin','aui-editor-menu-plugin','aui-editor-toolbar-plugin','aui-editor-bbcode-plugin','aui-editor-creole-parser','aui-editor-creole-plugin'], skinnable:true},
						'aui-event': {submodules: {'aui-event-input': {requires:['aui-base']}, 'aui-event-base': {requires:['event']} }, use:['aui-event-base','aui-event-input'], skinnable:false},
						'aui-form-builder': {submodules: {'aui-form-builder-field': {requires:['aui-datatype','aui-form','aui-panel','aui-tooltip','io','substitute'], skinnable:true}, 'aui-form-builder-base': {requires:['aui-base','aui-button-item','aui-data-set','aui-nested-list','aui-tabs','substitute'], skinnable:true} }, use:['aui-form-builder-base','aui-form-builder-field'], skinnable:true},
						'aui-form': {submodules: {'aui-form-validator': {requires:['aui-base','aui-event-input','selector-css3','substitute']}, 'aui-form-textfield': {requires:['aui-form-field']}, 'aui-form-textarea': {requires:['aui-form-textfield'], skinnable:true}, 'aui-form-select': {requires:['aui-form-field']}, 'aui-form-field': {requires:['aui-base','aui-component','substitute']}, 'aui-form-combobox': {requires:['aui-form-textarea','aui-toolbar'], skinnable:true}, 'aui-form-base': {requires:['aui-base','aui-data-set','aui-form-field','querystring-parse','io-form']} }, use:['aui-form-base','aui-form-combobox','aui-form-field','aui-form-select','aui-form-textarea','aui-form-textfield','aui-form-validator'], skinnable:false},
						'aui-image-viewer': {submodules: {'aui-media-viewer-plugin': {requires:['aui-image-viewer-base'], skinnable:false}, 'aui-image-viewer-gallery': {requires:['aui-image-viewer-base','aui-paginator','aui-toolbar'], skinnable:true}, 'aui-image-viewer-base': {requires:['anim','aui-overlay-mask','substitute'], skinnable:true} }, use:['aui-image-viewer-base','aui-image-viewer-gallery','aui-media-viewer-plugin'], skinnable:true},
						'aui-io': {submodules: {'aui-io-plugin': {requires:['aui-overlay-base','aui-parse-content','aui-io-request','aui-loading-mask']}, 'aui-io-request': {requires:['aui-base','io-base','json','plugin','querystring-stringify']} }, use:['aui-io-request','aui-io-plugin'], skinnable:false},
						'aui-live-search': {requires:['aui-base'], skinnable:false},
						'aui-loading-mask': {requires:['aui-overlay-mask','plugin','substitute'], skinnable:true},
						'aui-messaging': {requires:['aui-base','aui-task-manager','querystring'], skinnable:false},
						'aui-nested-list': {requires:['aui-base','dd-drag','dd-drop','dd-proxy'], skinnable:false},
						'aui-node': {submodules: {'aui-node-html5-print': {requires:['aui-node-html5']}, 'aui-node-html5': {requires:['collection','aui-base']}, 'aui-node-base': {requires:['node','aui-classnamemanager']} }, use:['aui-node-base','aui-node-html5','aui-node-html5-print'], skinnable:false},
						'aui-overlay': {submodules: {'aui-overlay-mask': {requires:['aui-base','aui-overlay-base','event-resize'], skinnable:true}, 'aui-overlay-manager': {requires:['aui-base','aui-overlay-base','overlay','plugin']}, 'aui-overlay-context-panel': {requires:['aui-overlay-context','anim'], skinnable:true}, 'aui-overlay-context': {requires:['aui-overlay-manager','aui-delayed-task','aui-aria']}, 'aui-overlay-base': {requires:['aui-component','widget-position','widget-stack','widget-position-align','widget-position-constrain','widget-stdmod']} }, use:['aui-overlay-base','aui-overlay-context','aui-overlay-context-panel','aui-overlay-manager','aui-overlay-mask'], skinnable:true},
						'aui-paginator': {requires:['aui-base','substitute'], skinnable:true},
						'aui-panel': {requires:['aui-component','widget-stdmod','aui-toolbar','aui-aria'], skinnable:true},
						'aui-parse-content': {requires:['async-queue','aui-base','plugin'], skinnable:false},
						'aui-portal-layout': {requires:['aui-base','dd-drag','dd-delegate','dd-drop','dd-proxy'], skinnable:true},
						'aui-progressbar': {requires:['aui-base','aui-aria'], skinnable:true},
						'aui-property-list': {requires:['aui-datatable'], skinnable:true},
						'aui-rating': {requires:['aui-base'], skinnable:true},
						'aui-resize-iframe': {requires:['aui-base','aui-task-manager','plugin'], skinnable:true},
						'aui-resize': {submodules: {'aui-resize-constrain': {requires:['aui-resize-base','dd-constrain','plugin'], skinnable:false}, 'aui-resize-base': {requires:['aui-base','dd-drag','dd-delegate','dd-drop','substitute'], skinnable:true} }, use:['aui-resize-base','aui-resize-constrain'], skinnable:true},
						'aui-scheduler': {submodules: {'aui-scheduler-calendar': {requires:['aui-scheduler-event'], skinnable:true}, 'aui-scheduler-event': {requires:['aui-base','aui-color-util','aui-datatype','aui-overlay-context-panel','substitute'], skinnable:true}, 'aui-scheduler-view': {requires:['aui-scheduler-event','aui-calendar','aui-button-item','substitute','dd-drag','dd-delegate','dd-drop','dd-constrain'], skinnable:true}, 'aui-scheduler-base': {requires:['aui-scheduler-view','datasource'], skinnable:true} }, use:['aui-scheduler-base','aui-scheduler-view','aui-scheduler-event','aui-scheduler-calendar'], skinnable:true},
						'aui-scroller': {requires:['aui-base','aui-simple-anim'], skinnable:true},
						'aui-selector': {requires:['selector-css3'], skinnable:false},
						'aui-simple-anim': {requires:['aui-base'], skinnable:false},
						'aui-skin-base': {type: 'css', path: 'aui-skin-base/css/aui-skin-base.css'},
						'aui-skin-classic-all': {type: 'css', path: 'aui-skin-classic/css/aui-skin-classic-all.css'},
						'aui-skin-classic': {path: 'aui-skin-classic/css/aui-skin-classic.css', requires:['aui-skin-base'], type: 'css'},
						'aui-sortable': {requires:['aui-base','dd-constrain','dd-drag','dd-drop','dd-proxy'], skinnable:true},
						'aui-state-interaction': {requires:['aui-base','plugin'], skinnable:false},
						'aui-swf': {requires:['aui-base','querystring-stringify-simple'], skinnable:false},
						'aui-tabs': {submodules: {'aui-tabs-menu-plugin': {requires:['aui-component','aui-state-interaction','aui-tabs-base','aui-overlay-context','plugin']}, 'aui-tabs-base': {requires:['aui-component','aui-state-interaction'], skinnable:true} }, use:['aui-tabs-base','aui-tabs-menu-plugin'], skinnable:true},
						'aui-task-manager': {requires:['aui-base'], skinnable:false},
						'aui-template': {requires:['aui-base'], skinnable:false},
						'aui-text': {submodules: {'aui-text-unicode': {requires:['aui-text-data-unicode'], skinnable:false}, 'aui-text-data-unicode': {requires:['text'], skinnable:false} }, use:['aui-text-data-unicode', 'aui-text-unicode'], skinnable:false},
						'aui-textboxlist': {requires:['anim-node-plugin','aui-autocomplete','node-focusmanager'], skinnable:true},
						'aui-toolbar': {requires:['aui-base','aui-button-item','aui-data-set','widget-parent'], skinnable:true},
						'aui-tooltip': {requires:['aui-overlay-context-panel'], skinnable:true},
						'aui-tpl-snippets': {submodules: {'aui-tpl-snippets-checkbox': {requires:['aui-tpl-snippets-base'], skinnable:false}, 'aui-tpl-snippets-textarea': {requires:['aui-tpl-snippets-base'], skinnable:false}, 'aui-tpl-snippets-input': {requires:['aui-tpl-snippets-base'], skinnable:false}, 'aui-tpl-snippets-select': {requires:['aui-tpl-snippets-base'], skinnable:false}, 'aui-tpl-snippets-base': {requires:['aui-template'], skinnable:false} }, use:['aui-tpl-snippets-base','aui-tpl-snippets-select','aui-tpl-snippets-input','aui-tpl-snippets-textarea','aui-tpl-snippets-checkbox'], skinnable:false},
						'aui-tree': {submodules: {'aui-tree-view': {requires:['aui-tree-node','dd-drag','dd-drop','dd-proxy'], skinnable:true}, 'aui-tree-node': {requires:['aui-tree-data','aui-io','json','querystring-stringify'], skinnable:false}, 'aui-tree-data': {requires:['aui-base'], skinnable:false} }, use:['aui-tree-data', 'aui-tree-node', 'aui-tree-view'], skinnable:true},
						'aui-video': {requires:['aui-base','querystring-stringify-simple'], skinnable:true},
						'aui-viewport': {requires:['aui-base'], skinnable:false}
				}
		    }
		}
	}
})();
;(function() {
	/*
	 * Alloy JavaScript Library v@VERSION@
	 * http://alloy.liferay.com/
	 *
	 * Copyright (c) 2010 Liferay Inc.
	 * http://alloy.liferay.com/LICENSE.txt
	 *
	 * Nate Cavanaugh (nathan.cavanaugh@liferay.com)
	 * Eduardo Lundgren (eduardo.lundgren@liferay.com)
	 *
	 * Attribution/Third-party licenses
	 * http://alloy.liferay.com/ATTRIBUTION.txt
	 *
	 * Date: @DATE@
	 * Revision: @REVISION@
	 */

	YUI.AUI_config = YUI.AUI_config || {};

	var defaults = YUI.AUI_config;

	YUI.prototype.ready = function() {
		var instance = this;

		var slice = Array.prototype.slice;
		var args = slice.call(arguments, 0), index = args.length - 1;

		var fn = args[index];

		var modules = slice.call(arguments, 0, index);

		modules.push('event');

		modules.push(
			function(instance) {
				var args = arguments;

				instance.on(
					'domready',
					function() {
						fn.apply(this, args);
					}
				);
			}
		);

		instance.use.apply(instance, modules);
	};

	var ALLOY;

	if (typeof A != 'undefined') {
		ALLOY = A;
	}
	else {
		ALLOY = YUI(defaults);
	}

	var guidExtensions = function(A) {
		A.Env._guidp = ['aui', A.version, A.Env._yidx].join('_').replace(/\./g, '_');
	};

	guidExtensions(ALLOY);

	var originalConfig = ALLOY.config;

	ALLOY.config = ALLOY.merge(originalConfig, YUI.AUI_config);

	YUI.AUI = function(o) {
		var instance = this;

		if (o || instance instanceof AUI) {
			var args = ALLOY.Array(arguments);

			args.unshift(ALLOY.config);

			var newInstance = YUI.apply(ALLOY.config.win, args);

			AUI._uaExtensions(newInstance);
			AUI._guidExtensions(newInstance);

			return newInstance;
		}

		return ALLOY;
	};

	var AUI = YUI.AUI;

	AUI._guidExtensions = guidExtensions;

	window.AUI = AUI;

	var UA = ALLOY.UA;

	ALLOY.mix(AUI, YUI, true, null, 2);

	ALLOY.mix(
		AUI,
		{
			__version: '@VERSION',

			defaults: defaults,

			html5shiv: function(frag) {
				var instance = this;
				var doc = frag || document;

				if (UA.ie && doc && doc.createElement) {
					var elements = AUI.HTML5_ELEMENTS, length = elements.length;

					while (length--) {
						doc.createElement(elements[length]);
					}
				}

				return frag;
			},

			setDefaults: function(defaults) {
				var instance = this;

				ALLOY.mix(AUI.defaults, defaults, true, null, 0, true);
				ALLOY.mix(ALLOY.config, defaults, true, null, 0, true);
			},

			HTML5_ELEMENTS: 'abbr,article,aside,audio,canvas,command,datalist,details,figure,figcaption,footer,header,hgroup,keygen,mark,meter,nav,output,progress,section,source,summary,time,video'.split(',')
		},
		true
	);

	/*
	* HTML5 Compatability for IE
	*/

	AUI.html5shiv();

	/*
		UA extensions
	*/

	(function() {
		var REGEX_VERSION_DOT = /\./g;

		var parseVersionNumber = function(str) {
			var count = 0;

			return parseFloat(
				str.replace(
					REGEX_VERSION_DOT,
					function() {
						return (count++ == 1) ? '' : '.';
					}
				)
			);
		};

		var DEFAULTS_VERSION = ['0','0'];

		var getVersion = function(regex, userAgent) {
			var version = (userAgent.match(regex) || DEFAULTS_VERSION)[1];

			return parseVersionNumber(version);
		};

		var MAP_OS_SELECTORS = {
			windows: 'win',
			macintosh: 'mac'
		};

		var BROWSERS = [
			'ie',
			'opera',
			'chrome',
			'aol',
			'camino',
			'firefox',
			'flock',
			'mozilla',
			'netscape',
			'icab',
			'konqueror',
			'safari'
		];

		AUI._uaExtensions = function(A) {
			var nav = navigator;

			var userAgent = nav.userAgent;

			var UA = A.UA;
			var OS = UA.os;

			var UAX = {
				aol: 0,

				camino: 0,
				firefox: 0,
				flock: 0,
				mozilla: 0,
				netscape: 0,

				icab: 0,
				konqueror: 0,

				safari: 0,

				browser: 0,

				win: OS == 'windows',
				mac: OS == 'macintosh',
				rhino: OS == 'rhino',

				agent: userAgent
			};

			if (UA.ie) {
				UAX.aol = getVersion(/America Online Browser ([^\s]*);/, userAgent);
			}
			else if (UA.gecko) {
				UAX.netscape = getVersion(/(Netscape|Navigator)\/([^\s]*)/, userAgent);
				UAX.flock = getVersion(/Flock\/([^\s]*)/, userAgent);
				UAX.camino = getVersion(/Camino\/([^\s]*)/, userAgent);
				UAX.firefox = getVersion(/Firefox\/([^\s]*)/, userAgent);
			}
			else if (UA.webkit) {
				UAX.safari = getVersion(/Version\/([^\s]*) Safari/, userAgent);
			}
			else {
				UAX.icab = getVersion(/iCab(?:\/|\s)?([^\s]*)/, userAgent);
				UAX.konqueror = getVersion(/Konqueror\/([^\s]*)/, userAgent);
			}

			if (!UAX.win && !UAX.mac) {
				var linux = /Linux/.test(userAgent);
				var sun = /Solaris|SunOS/.test(userAgent);

				if (linux) {
					UA.os = 'linux';
					UAX.linux = linux;
				}
				else if (sun) {
					UA.os = 'sun';
					UAX.sun = sun;
				}
			}

			var CONFIG = A.config,
				DOC = CONFIG.doc;

			UAX.touch = ('ontouchstart' in DOC);

			A.mix(UA, UAX);

			var browserList = [];
			var versionMajor = 0;

			var browser;
			var version;
			var uaVersionMajor;
			var uaVersionMinor;

			var versionObj = {
				string: '',
				major: versionMajor
			};

			var i = BROWSERS.length;

			while (i--) {
				browser = BROWSERS[i];
				version = UA[browser];

				if (version > 0) {
					versionMajor = parseInt(version, 10);
					uaVersionMajor = browser + versionMajor;

					uaVersionMinor = (browser + version);

					if (String(version).indexOf('.') > -1) {
						uaVersionMinor = uaVersionMinor.replace(/\.(\d).*/, '-$1');
					}
					else {
						uaVersionMinor += '-0';
					}

					browserList.push(browser, uaVersionMajor, uaVersionMinor);

					versionObj.string = browser + '';
					versionObj.major = versionMajor;
				}
			}

			UA.version = versionObj;

			UA.renderer = '';

			var documentElement = DOC.documentElement;

			UA.dir = documentElement.getAttribute('dir') || 'ltr';

			if (UA.ie) {
				UA.renderer = 'trident';
			}
			else if (UA.gecko) {
				UA.renderer = 'gecko';
			}
			else if (UA.webkit) {
				UA.renderer = 'webkit';
			}
			else if (UA.opera) {
				UA.renderer = 'presto';
			}

			A.UA = UA;

			/*
			* Browser selectors
			*/

			var selectors = [
				UA.renderer,
				UA.dir,
				'js'
			].concat(browserList);

			var osSelector = MAP_OS_SELECTORS[UA.os] || UA.os;

			selectors.push(osSelector);

			if (UA.mobile) {
				selectors.push('mobile');
			}

			if (UA.secure) {
				selectors.push('secure');
			}

			if (UA.touch) {
				selectors.push('touch');
			}

			UA.selectors = selectors.join(' ');

			// The methods in this if block only run once across all instances
			if (!documentElement._yuid) {
				documentElement.className += ' ' + UA.selectors;

				var vml,
					svg;

				vml = !(svg = !!(CONFIG.win.SVGAngle || DOC.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')));

				if (vml) {
					var div = DOC.createElement('div');
					var behaviorObj;

					div.innerHTML = '<v:shape adj="1"/>';

					behaviorObj = div.firstChild;

					behaviorObj.style.behavior = 'url(#default#VML)';

					if (!(behaviorObj && typeof behaviorObj.adj == 'object')) {
						vml = false;
					}

					div = null;
				}

				AUI._VML = vml;
				AUI._SVG = svg;

				A.stamp(documentElement);
			}

			UA.vml = AUI._VML;
			UA.svg = AUI._SVG;
		};
	})();

	AUI._uaExtensions(ALLOY);

	/*
	* Disable background image flickering in IE6
	*/

	if (UA.ie && UA.version.major <= 6) {
		try {
			document.execCommand('BackgroundImageCache', false, true);
		}
		catch (e) {
		}
	}
})();
AUI.add('aui-base', function(A) {
var Lang = A.Lang,
	isArray = Lang.isArray,
	isFunction = Lang.isFunction,
	isNumber = Lang.isNumber,
	isString = Lang.isString,
	isUndefined = Lang.isUndefined,

	AArray = A.Array,
	LString = A.namespace('Lang.String'),
	arrayIndexOf = AArray.indexOf,

	STR_BLANK = '',

	DOC = A.config.doc,
	FIRST_CHILD = 'firstChild',
	INNER_HTML = 'innerHTML',
	NODE_VALUE = 'nodeValue',
	NORMALIZE = 'normalize',
	REGEX_DASH = /-([a-z])/gi,
	REGEX_ESCAPE_REGEX = /([.*+?^$(){}|[\]\/\\])/g,
	REGEX_NL2BR = /\r?\n/g,
	REGEX_STRIP_SCRIPTS = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/gi,
	REGEX_STRIP_TAGS = /<\/?[^>]+>/gi,
	REGEX_UNCAMELIZE = /([a-zA-Z][a-zA-Z])([A-Z])([a-z])/g,
	REGEX_UNCAMELIZE_REPLACE_SEPARATOR = /([a-zA-Z][a-zA-Z])([A-Z])([a-z])/g,

	STR_AMP = '&',
	STR_CHEVRON_LEFT = '<',
	STR_ELLIPSIS = '...',
	STR_END = 'end',
	STR_HASH = '#',
	STR_MIDDLE = 'middle',
	STR_START = 'start',
	STR_ZERO = '0',

	STR_G = 'g',
	STR_S = 's',

	mathBuffer = ['return value ', null, ';'],
	htmlUnescapedValues = [],

	cachedMathFn = A.cached(
		function(mathArgs) {
			mathBuffer[1] = mathArgs;

			return new Function('value', mathBuffer.join(STR_BLANK));
		}
	),

	MAP_HTML_CHARS_ESCAPED = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&#034;',
		'\'': '&#039;',
		'/': '&#047;',
		'`': '&#096;'
	},
	MAP_HTML_CHARS_UNESCAPED = {};

	for (var i in MAP_HTML_CHARS_ESCAPED) {
		if (MAP_HTML_CHARS_ESCAPED.hasOwnProperty(i)) {
			var escapedValue = MAP_HTML_CHARS_ESCAPED[i];

			MAP_HTML_CHARS_UNESCAPED[escapedValue] = i;

			htmlUnescapedValues.push(i);
		}
	}

	var REGEX_HTML_ESCAPE = new RegExp('[' + htmlUnescapedValues.join(STR_BLANK) + ']', 'g'),
		REGEX_HTML_UNESCAPE = /&([^;]+);/g;

A.mix(
	LString,
	{
		camelize: A.cached(
			function(str, separator) {
				var regex = REGEX_DASH;

				str = String(str);

				if (separator) {
					regex = new RegExp(separator + '([a-z])', 'gi');
				}

				return str.replace(regex, LString._camelize);
			}
		),

		capitalize: A.cached(
			function(str) {
				if (str) {
					str = String(str);

					str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
				}

				return str;
			}
		),

		contains: function(s, ss) {
		  return s.indexOf(ss) != -1;
		},

		defaultValue: function(str, defaultValue) {
			if (isUndefined(str) || str == STR_BLANK) {
				if (isUndefined(defaultValue)) {
					defaultValue = STR_BLANK;
				}

				str = defaultValue;
			}

			return str;
		},

		endsWith: function(str, suffix) {
			var length = (str.length - suffix.length);

			return ((length >= 0) && (str.indexOf(suffix, length) == length));
		},

		escapeHTML: function(str) {
			return str.replace(REGEX_HTML_ESCAPE, LString._escapeHTML);
		},

		// Courtesy of: http://simonwillison.net/2006/Jan/20/escape/
		escapeRegEx: function(str) {
			return str.replace(REGEX_ESCAPE_REGEX, '\\$1');
		},

		math: function(value, mathArgs) {
			return cachedMathFn(mathArgs)(value);
		},

		nl2br: function(str) {
			var instance = this;

			return String(str).replace(REGEX_NL2BR, '<br />');
		},

		padNumber: function(num, length, precision) {
			var str = precision ? Number(num).toFixed(precision) : String(num);
			var index = str.indexOf('.');

			if (index == -1) {
				index = str.length;
			}

			return LString.repeat(STR_ZERO, Math.max(0, length - index)) + str;
		},

		pluralize: function(count, singularVersion, pluralVersion) {
			var suffix;

			if (count == 1) {
				suffix = singularVersion;
			}
			else {
				suffix = pluralVersion || singularVersion + STR_S;
			}

			return count + ' ' + suffix;
		},

		remove: function(s, substitute, all) {
			var re = new RegExp(LString.escapeRegEx(substitute), all ? STR_G : STR_BLANK);

			return s.replace(re, STR_BLANK);
		},

		removeAll: function(s, substitute) {
			return LString.remove(s, substitute, true);
		},

		repeat: function(string, length) {
			return new Array(length + 1).join(string);
		},

		round: function(value, precision) {
			value = Number(value);

			if (isNumber(precision)) {
				precision = Math.pow(10, precision);
				value = Math.round(value * precision) / precision;
			}

			return value;
		},

		startsWith: function(str, prefix) {
			return (str.lastIndexOf(prefix, 0) == 0);
		},

		stripScripts: function(str) {
			if (str) {
				str = String(str).replace(REGEX_STRIP_SCRIPTS, STR_BLANK);
			}

			return str;
		},

		stripTags: function(str) {
			var instance = this;

			if (str) {
				str = String(str).replace(REGEX_STRIP_TAGS, STR_BLANK);
			}

			return str;
		},

		substr: function(str, start, length) {
			return String(str).substr(start, length);
		},

		uncamelize: A.cached(
			function(str, separator) {
				separator = separator || ' ';

				str = String(str);

				str = str.replace(REGEX_UNCAMELIZE, '$1' + separator + '$2$3');
				str = str.replace(REGEX_UNCAMELIZE_REPLACE_SEPARATOR, '$1' + separator + '$2');

				return str;
			}
		),

		toLowerCase: function(str) {
			return String(str).toLowerCase();
		},

		toUpperCase: function(str) {
			return String(str).toUpperCase();
		},

		trim: Lang.trim,

		truncate: function(str, length, where) {
			str = String(str);

			var strLength = str.length;

			if (str && strLength > length) {
				where = where || STR_END;

				if (where == STR_END) {
					str = str.substr(0, length - STR_ELLIPSIS.length) + STR_ELLIPSIS;
				}
				else if (where == STR_MIDDLE) {
					var middlePoint = Math.floor(length / 2);

					str = str.substr(0, middlePoint) + STR_ELLIPSIS + str.substr(strLength - middlePoint);
				}
				else if (where == STR_START) {
					str = STR_ELLIPSIS + str.substr(strLength - length);
				}
			}

			return str;
		},

		undef: function(str) {
			if (isUndefined(str)) {
				str = STR_BLANK;
			}

			return str;
		},

		// inspired from Google unescape entities
		unescapeEntities: function(str) {
			if (LString.contains(str, STR_AMP)) {
				if (DOC && !LString.contains(str, STR_CHEVRON_LEFT)) {
					str = LString._unescapeEntitiesUsingDom(str);
				}
				else {
					str = LString.unescapeHTML(str);
				}
			}

			return str;
		},

		unescapeHTML: function(str) {
			return str.replace(REGEX_HTML_UNESCAPE, LString._unescapeHTML);
		},

		_camelize: function(match0, match1) {
			return match1.toUpperCase();
		},

		_escapeHTML: function(match) {
			return MAP_HTML_CHARS_ESCAPED[match];
		},

		_unescapeHTML: function(match) {
			var value = MAP_HTML_CHARS_UNESCAPED[match];

			if (!value && entity.charAt(0) == STR_HASH) {
				var charCode = Number(STR_ZERO + entity.substr(1));

				if (!isNaN(charCode)) {
					value = String.fromCharCode(charCode);
				}
			}

			return value;
		},

		_unescapeEntitiesUsingDom: function(str) {
			var el = LString._unescapeNode;

			el[INNER_HTML] = str;

			if (el[NORMALIZE]) {
				el[NORMALIZE]();
			}

			str = el.firstChild.nodeValue;

			el[INNER_HTML] = STR_BLANK;

			return str;
		},

		_unescapeNode: DOC.createElement('a')
	}
);

A.mix(
	AArray,
	{
		remove: function(a, from, to) {
		  var rest = a.slice((to || from) + 1 || a.length);
		  a.length = (from < 0) ? (a.length + from) : from;

		  return a.push.apply(a, rest);
		},

		removeItem: function(a, item) {
			var index = arrayIndexOf(a, item);

			return AArray.remove(a, index);
		}
	}
);

A.mix(
	Lang,
	{
		emptyFn: function() {},

		emptyFnFalse: function() {
			return false;
		},

		emptyFnTrue: function() {
			return true;
		},

		isGuid: function(id) {
			var instance = this;

			return String(id).indexOf(A.Env._guidp) === 0;
		}
	}
);

A.fn = function(fn, context, args) {
	var wrappedFn;

	// Explicitly set function arguments
	if (!isNumber(fn)) {
		var xargs = arguments;

		if (xargs.length > 2) {
			xargs = AArray(xargs, 2, true);
		}

		var dynamicLookup = (isString(fn) && context);

		wrappedFn = function() {
			var method = (!dynamicLookup) ? fn : context[fn];

			return method.apply(context || fn, xargs);
		};
	}
	else {
		// Set function arity
		var argLength = fn;

		fn = context;
		context = args;

		var dynamicLookup = (isString(fn) && context);

		wrappedFn = function() {
			var method = (!dynamicLookup) ? fn : context[fn];
			context = context || method;

			var returnValue;

			if (argLength > 0) {
				returnValue = method.apply(context, AArray(arguments, 0, true).slice(0, argLength));
			}
			else {
				returnValue = method.call(context);
			}

			return returnValue;
		};
	}

	return wrappedFn;
};

}, '@VERSION@' ,{skinnable:false, requires:['aui-node','aui-component','aui-debounce','aui-delayed-task','aui-selector','aui-event-base','oop','yui-throttle']});
