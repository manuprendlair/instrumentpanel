function Digital(selector) {
  var svg = d3.select(selector).append('svg')
    .attr('height', '100%')
    .attr('width', '100%')
    .attr('viewBox', "0 0 20 40")

  this.value = svg.append('text')
    .attr('x', 10)
    .attr('y', 24)
    .attr('text-anchor', 'middle')
    .attr('font-size', 22)
    .attr('dominan-baseline', 'middle');

  this.label = svg.append('text')
    .attr('x', 10)
    .attr('y', 4)
    .attr('text-anchor', 'middle')
    .attr('font-size', 5)
    .attr('dominan-baseline', 'middle');
}


Digital.prototype.setValue = function(value) {
  this.value.text(value);
}

Digital.prototype.setLabel = function(label) {
  this.label.text(label);
}

module.exports = Digital;