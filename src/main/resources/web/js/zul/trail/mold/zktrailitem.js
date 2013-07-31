function (out) {

    out.push('<table ', this.domAttrs_(), '>');
    out.push('<tr>');
    out.push('<td class="z-trailitem-left">');
    out.push('<div class="z-trailitem-arrow">');
    out.push('</div>');
    out.push('</td>');
    out.push('<td class="z-trailitem-center">');
    out.push('<div class="z-trailitem-content">');
    out.push(this.domContent_());
    out.push('</div>');
    out.push('</td>');
    out.push('<td class="z-trailitem-right">');
    out.push('<div class="z-trailitem-arrow">');
    out.push('</div>');
    out.push('</td>');
    out.push('</tr>');
    out.push('</table>');

}