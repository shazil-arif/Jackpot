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
    let dotList = this.dotList;
    return {
        next: function(){
            if (i === dotList.length) return {done: true, value: undefined}
            return {done: false, value: dotList[i++] };
        }
    }
}

export default DotList;