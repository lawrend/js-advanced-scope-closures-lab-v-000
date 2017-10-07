function produceDrivingRange(blockRange) {
    return function(start, end) {
        let startNum = start[0]+start[1];
        let endNum = end[0]+end[1];
        dist = Math.abs(startNum-endNum)
        if(dist <= blockRange) {
            return `within range by ${blockRange - dist}`
        } else {
            return `${dist - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(tipPercent) {
    return function(fare) {
        return tipPercent * fare
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}

