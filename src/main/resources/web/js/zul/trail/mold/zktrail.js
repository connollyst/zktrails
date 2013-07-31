function (out) {

    out.push('<div ', this.domAttrs_(), '>');
    out.push('<table class="z-trail-inner">');
    out.push('<tr>');
    for (var w = this.firstChild; w; w = w.nextSibling) {
        out.push('<td>');
        w.redraw(out);
        out.push('</td>');
    }
    out.push('</tr>');
    out.push('</table>');
    out.push('</div>');

}