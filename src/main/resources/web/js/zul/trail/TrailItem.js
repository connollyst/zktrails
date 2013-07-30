zul.trail.TrailItem = zk.$extends(zul.LabelImageWidget, {

    _dir: "normal",

    $define: {
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

    // super//
    bind_: function(){
        this.$supers(zul.trail.TrailItem, 'bind_', arguments);
    },
    unbind_: function(){
        this.$supers(zul.trail.TrailItem, 'unbind_', arguments);
    },
    domContent_: function () {
        var label = zUtl.encodeXML(this.getLabel()), img = this.getImage();
        if (!img) {
            return label;
        } else {
            img = '<img src="' + img + '" align="absmiddle" />';
            return this.getDir() == 'reverse' ? label + img : img + label;
        }
    }

}, {

});