(function() {
    'use strict';

    /**
     * Class constructor for SSN Textfield MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */
    var MaterialCurrencyTextfield = function MaterialCurrencyTextfield(element) {
        this.element_ = element;
        this.maxIntegers = 14;
        this.maxDecimals = 2;
        this.rawValue = "";
        // Initialize instance.
        this.init();
    };
    window['MaterialCurrencyTextfield'] = MaterialCurrencyTextfield;

    /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */
    MaterialCurrencyTextfield.prototype.Constant_ = {
        Pattern: /^\$?((\d*)(\.?\d{0,2})?)?$/,
        CommaPattern: /\B(?=(\d{3})+(?!\d))/g,
        FormattedPattern: /^(\$)?(\d{1,3})?(((\,\d{3})+)|(\d*))?(\.{0,1}\d{2})?$/
    };

    /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */
    MaterialCurrencyTextfield.prototype.CssClasses_ = {
        LABEL: 'mdl-currency-usd__label',
        INPUT: 'mdl-currency-usd__input',
        IS_DIRTY: 'is-dirty',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_INVALID: 'is-invalid',
        IS_UPGRADED: 'is-upgraded'
    };

    /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    MaterialCurrencyTextfield.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
        //Strip any commas prior to matching
        while (this.input_.value.indexOf(",") !== -1) {
            this.input_.value = this.input_.value.replace(",", "");
        }
    };

    /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    MaterialCurrencyTextfield.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
        //Class Updates
        this.updateClasses_();
        //Handle Formatting when valid and value exists
        if (!this.element_.classList.contains(this.CssClasses_.IS_INVALID) && this.element_.classList.contains(this.CssClasses_.IS_DIRTY)) {
            //Strip any commas prior to matching
            while (this.input_.value.indexOf(",") !== -1) {
                this.input_.value = this.input_.value.replace(",", "");
            }
            //match on main expression
            var matches = this.Constant_.Pattern.exec(this.input_.value);
            if ((typeof matches[3] === "undefined" || matches[3].length === 0) && (this.maxDecimals > 0)) {
                matches[3] = ".";
            }
            //add decimal buffer based on defined maxDecimals
            while (matches[3].length <= this.maxDecimals) {
                matches[3] += "0";
            }
            //add 0 integer if none are specified
            if (typeof matches[2] === "undefined" || matches[2] === "." || matches[2] === "") {
                matches[2] = "0";
            }
            this.input_.value = matches[2] + matches[3];
            //Store Numeric representation
            this.rawValue = this.input_.value;
            //Insert commas
            this.input_.value = this.input_.value.toString().replace(this.Constant_.CommaPattern, ",");
        }
    };

    /**
     * Handle Input values
     * 
     * @param {type} event The event that fired.
     * @private
     */
    MaterialCurrencyTextfield.prototype.onInput_ = function (event) {
        //Class Updates
        this.updateClasses_();
        
    };

    /**
     * Handle reset event from out side.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    MaterialCurrencyTextfield.prototype.onReset_ = function (event) {
        this.updateClasses_();
    };

    /**
     * Handle class updates.
     *
     * @private
     */
    MaterialCurrencyTextfield.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkValidity();
        this.checkDirty();
        this.checkFocus();
    };

    // Public methods.

    /**
     * Check the disabled state and update field accordingly.
     *
     * @public
     */
    MaterialCurrencyTextfield.prototype.checkDisabled = function () {
        if (this.input_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialCurrencyTextfield.prototype['checkDisabled'] =
        MaterialCurrencyTextfield.prototype.checkDisabled;

    /**
     * Retrieve the raw value of the field
     * @returns {string} unmasked value
     */
    MaterialCurrencyTextfield.prototype.getValue = function () {
        return this.rawValue;
    };
    MaterialCurrencyTextfield.prototype['getValue'] =
        MaterialCurrencyTextfield.prototype.getValue;

    /**
    * Check the focus state and update field accordingly.
    *
    * @public
    */
    MaterialCurrencyTextfield.prototype.checkFocus = function () {
        if (Boolean(this.element_.querySelector(':focus'))) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
        }
    };
    MaterialCurrencyTextfield.prototype['checkFocus'] =
      MaterialCurrencyTextfield.prototype.checkFocus;

    /**
     * Check the validity state and update field accordingly.
     *
     * @public
     */
    MaterialCurrencyTextfield.prototype.checkValidity = function () {
        
        if (this.input_.validity) {
            if (this.input_.validity.valid && this.isValidLength() && (this.Constant_.Pattern.test(this.input_.value) ||
                this.Constant_.FormattedPattern.test(this.input_.value))) {
                this.element_.classList.remove(this.CssClasses_.IS_INVALID);
            } else {
                this.element_.classList.add(this.CssClasses_.IS_INVALID);
            }
        }
    };
    MaterialCurrencyTextfield.prototype['checkValidity'] =
        MaterialCurrencyTextfield.prototype.checkValidity;

    /**
     * Handle class updates.
     *
     * @private
     */
    MaterialCurrencyTextfield.prototype.isValidLength = function () {
        if (this.maxIntegers > 0) {
            //Strip any commas prior to matching
            while (this.input_.value.indexOf(",") !== -1) {
                this.input_.value = this.input_.value.replace(",", "");
            }
            //match on main expression
            var matches = this.Constant_.Pattern.exec(this.input_.value);
            if (typeof matches !== "undefined" && typeof matches[2] !== "undefined" && matches[2].length > this.maxIntegers) {
                return false;
            }
        }
        return true;
    };

    /**
     * Check the dirty state and update field accordingly.
     *
     * @public
     */
    MaterialCurrencyTextfield.prototype.checkDirty = function () {
        if (this.input_.value && this.input_.value.length > 0) {
            this.element_.classList.add(this.CssClasses_.IS_DIRTY);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
        }
    };
    MaterialCurrencyTextfield.prototype['checkDirty'] =
        MaterialCurrencyTextfield.prototype.checkDirty;

    /**
     * Disable text field.
     *
     * @public
     */
    MaterialCurrencyTextfield.prototype.disable = function () {
        this.input_.disabled = true;
        this.updateClasses_();
    };
    MaterialCurrencyTextfield.prototype['disable'] = MaterialCurrencyTextfield.prototype.disable;

    /**
     * Enable text field.
     *
     * @public
     */
    MaterialCurrencyTextfield.prototype.enable = function () {
        this.input_.disabled = false;
        this.updateClasses_();
    };
    MaterialCurrencyTextfield.prototype['enable'] = MaterialCurrencyTextfield.prototype.enable;

    /**
     * Update text field value.
     *
     * @param {string} value The value to which to set the control (optional).
     * @public
     */
    MaterialCurrencyTextfield.prototype.change = function (value) {

        this.input_.value = value || '';
        this.updateClasses_();
    };
    MaterialCurrencyTextfield.prototype['change'] = MaterialCurrencyTextfield.prototype.change;

    /**
     * Retrieve the raw value of the field
     * @returns {string} unmasked value
     */
    MaterialCurrencyTextfield.prototype.getValue = function () {
        return this.rawValue;
    };
    MaterialCurrencyTextfield.prototype['getValue'] =
        MaterialCurrencyTextfield.prototype.getValue;

    /**
   * Initialize element.
   */
    MaterialCurrencyTextfield.prototype.init = function () {

        if (this.element_) {
            this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
            this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

            if (this.input_) {
                this.boundInputHandler = this.onInput_.bind(this);
                this.boundFocusHandler = this.onFocus_.bind(this);
                this.boundBlurHandler = this.onBlur_.bind(this);
                this.boundResetHandler = this.onReset_.bind(this);
                this.input_.addEventListener('input', this.boundInputHandler);
                this.input_.addEventListener('focus', this.boundFocusHandler);
                this.input_.addEventListener('blur', this.boundBlurHandler);
                this.input_.addEventListener('reset', this.boundResetHandler);

                this.onInput_();
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
                if (this.input_.hasAttribute('autofocus')) {
                    this.element_.focus();
                    this.checkFocus();
                }
                if (this.input_.hasAttribute('maxintegers')) {
                    this.maxIntegers = parseInt(this.input_.attributes["maxintegers"].value,10);
                }
                if (this.input_.hasAttribute('maxdecimals')) {
                    this.maxDecimals = parseInt(this.input_.attributes["maxdecimals"].value,10);
                }
                if (this.element_.classList.contains(this.CssClasses_.IS_DIRTY)) {
                    this.onBlur_();
                }
            }
        }
    };

    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialCurrencyTextfield,
        classAsString: 'MaterialCurrencyTextfield',
        cssClass: 'mdl-js-currency-usd',
        widget: true
    });
})();