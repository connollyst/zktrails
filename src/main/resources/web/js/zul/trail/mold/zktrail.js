function (out) {

    out.push('<ol ', this.domAttrs_(), '>')
    for (var w = this.firstChild; w; w = w.nextSibling)
        w.redraw(out);
    out.push('</ol>');

}