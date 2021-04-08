function BoardMoves(){
    this.pointList = []
}

BoardMoves.prototype.add(point){
    this.pointList.push(point);
}

/**
 * @description support iteration for the list of points
 * @returns {Iterator}
 */
BoardMoves.prototype[Symbol.iterator] = function(){
    let i = 0;
    return {
        next: function(){
            if (i === this.pointList.length) return {done: true, value: undefined}
            return {done: false, value: this.pointList[i++] };
        }
    }
}