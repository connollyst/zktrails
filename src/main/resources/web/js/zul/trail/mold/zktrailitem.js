function (out) {

    out.push('<table class="z-trailitem"', this.domAttrs_(), '>');
    out.push('<tr class="z-trailitem-container">');
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