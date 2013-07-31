zul.trail.TrailItem = zk.$extends(zul.LabelImageWidget, {

    _dir: "normal",
    _disabled: false,

    $define: {
        /** Returns whether it is disabled.
         * <p>Default: false.
         * @return boolean
         */
        /** Sets whether it is disabled.
         * @param boolean disabled
         */
        disabled: function () {
            this.rerender(); //bind and unbind
        },
        /** Returns the direction.
         * <p>Default: "normal".
         * @return String
         */
        /** Sets the direction.
         * @param String dir either "normal" or "reverse".
         */
        dir: _zkf = function () {
            var n = this.$n();
            if (n) n.innerHTML = this.domContent_();
        }
    },

    // public //
    getZclass: function () {
        var zcls = this._zclass;
        return zcls != null ? zcls : "z-trailitem";
    },

    // protected //
    bind_: function () {
        this.$supers(zul.trail.TrailItem, 'bind_', arguments);
    },
    unbind_: function () {
        this.$supers(zul.trail.TrailItem, 'unbind_', arguments);
    },
    domContent_: function () {
        var label = zUtl.encodeXML(this.getLabel());
        var img = this.domImage_();
        if (!img) {
            return label;
        } else {
            return this.getDir() == 'reverse' ? label + img : img + label;
        }
    },
    domClass_: function (no) {
        var sclass = this.$supers('domClass_', arguments);
        if (this.getDisabled() && (!no || !no.zclass)) {
            var zclass = this.getZclass();
            if (zclass) {
                sclass += (sclass ? ' ' : '') + zclass + '-disd';
            }
        }
        return sclass;
    },

}, {

});