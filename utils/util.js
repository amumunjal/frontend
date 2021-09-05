
class Util {

    getFixVal(val){
    return parseFloat(val.substring(val.indexOf(":")+2,val.lastIndexOf("%")));
    
    }

    getAttVal(element){
    return element.getAttribute('style')
    }

}

module.exports = new Util()
