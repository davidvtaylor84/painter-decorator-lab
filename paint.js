const Paint = function(colour, litres){
    this.litres = litres
    this.colour = colour
}

Paint.prototype.emptyPaintCan = function(){
    this.litres = 0
}

module.exports = Paint