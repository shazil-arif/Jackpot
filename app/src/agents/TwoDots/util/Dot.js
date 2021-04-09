class Dot {
    constructor(point, radius){
        this.point = point;
        this.radius = radius;
    }

    getRadius(){
        return this.radius;
    }

    getPoint(){
        return this.point;
    }

    isPointWithinDot(point) {

        let x = this.point.getX();
        let y = this.point.getY();

        let mouseX = point.getX();
        let mouseY = point.getY();
    
		
        let sqrtArgument = (x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY);
        let squareRootOfDistance = Math.sqrt(sqrtArgument);

        if (squareRootOfDistance <= this.radius) return true;
		
		return false;
	}
}
export default Dot;