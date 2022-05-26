/**
 * Contains a set of generic functions to perform operations
 */
class GeneralFunctions{
    constructor(){}

    /**
     * Evaluate if the given data is invalid
     * @param { any } data The data to be evaluated
     * @returns
     *  A boolean value if the value is valid or not 
     */
    static CheckData(data){
        switch(typeof data){
            case "undefined": return false;
            case "boolean": return data;
            case "number":
                if(Number.isNaN(data)) return false;
                if(!Number.isFinite(data)) return false;
                if(Number.isInteger(data)){
                    return Number.isSafeInteger(data);
                }
                return true;
            case "string":
                if(!data) return false;
                if(data.trim().length === 0) return false;
                if([...data.matchAll(/./g)].length === 0) return false;
                return true;
            case "bigint": return data !== 0n ? true : false;
            case "object":
                if(!data) return false;
                return true;
            default: return true;

        }
    }

}

module.exports = {
    GeneralFunctions,
}