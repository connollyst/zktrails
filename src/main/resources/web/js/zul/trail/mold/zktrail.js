function (out) {

    out.push('<table ', this.domAttrs_(), '>');
    out.push('<tr>');
    for (var w = this.firstChild; w; w = w.nextSibling) {
        out.push('<td ', this.domAttrs_(), '>');
        w.redraw(out);
        out.push('</td>');
    }
    out.push('</tr>');
    out.push('</table>');

}