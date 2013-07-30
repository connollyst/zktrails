zul.trail.TrailItem = zk.$extends(zul.LabelImageWidget, {


    $define: {

    },

    // super//
    bind_: function(){
        console.log ( 'binding TrailItem' );
        this.$supers(zul.trail.TrailItem, 'bind_', arguments);
    },
    unbind_: function(){
        console.log ( 'unbinding TrailItem' );
        this.$supers(zul.trail.TrailItem, 'unbind_', arguments);
    },
    domContent_: function () {
        console.log ( 'getting dom content' );
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