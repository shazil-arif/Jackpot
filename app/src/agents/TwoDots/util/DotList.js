function DotList(){
    this.dotList = [];
}

DotList.prototype.add = function(point) {
    this.dotList.push(point);
}

/**
 * @description support iteration for the list of points
 * @returns {Iterator}
 */
DotList.prototype[Symbol.iterator] = function(){
    let i = 0;
    return {
        next: function(){
            if (i === this.dotList.length) return {done: true, value: undefined}
            return {done: false, value: this.dotlist[i++] };
        }
    }
}

export default DotList;