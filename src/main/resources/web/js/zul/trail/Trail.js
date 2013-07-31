zul.trail.Trail = zk.$extends(zk.Widget, {

    // public //
    getZclass: function () {
        var zcls = this._zclass;
        return zcls != null ? zcls : "z-trail";
    }

}, {

});