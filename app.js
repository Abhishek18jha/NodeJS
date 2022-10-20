class Rectange{
    constructor (height,width){
        this.height=height
        this.width=width
    }
// Getter
get area(){
    return this.calcArea();
}
//Method
calcArea(){
    return this.height*this.width
}
}

const p = new Rectange(10,20)
console.log(p.height,p.width,p.name,p.area,p.calcArea())

// Generator Methods
class Polygon {
    constructor(...sides){
        this.sides=sides;
    }
    //Method
    *getSides()
    {
        for(const side of this.sides){
            yield side;
        }
    }
}

const pentagon = new Polygon(1,2,3,4,5)
console.log([...pentagon.getSides()])