function credStore(){
    let ds = {};
    
    function set(key, val){
        function isSameType(a, b) {
            return (typeof a === typeof b);
        }
        function isSameArrayType(a, val){
            if (a.length==0) return true;
            else {
                return typeof a[0] === typeof val;
            }
        }
        function isSameSetType(s, val) {
            let iter = s.values();
            return (typeof iter.next().value === typeof val);
        }
        if (!ds[key]) {
            ds[key] = val;
        } else {
            if (Array.isArray(ds[key])) {
                if(isSameArrayType(ds[key], val)){
                    ds[key].push(val);
                } else {
                    console.log("CANT SET, DIFFERENT TYPE");
                }
            } 
            else if (ds[key] instanceof Set) {
                if (isSameSetType(ds[key], val)){
                    ds[key].add(val);
                }
                else {
                    console.log("CANT SET, DIFFERENT TYPE");
                }
            } 
            else {
                if (isSameType(ds[key], val)) {
                    ds[key] = val;
                }
                else {
                    console.log("CANT SET, DIFFERENT TYPE");
                }
            }
        }
        console.log(ds);
    }
    function get(key) {
        return ds[key];
    }
    function deleteKey(key) {
        if (ds[key])
            delete ds[key];
        else
            console.log("KEY DOESNT EXIST");
        console.log(ds);
    }
    function deleteVal(key) {
        ds[key] = undefined;
        console.log(ds);
    }
    return {
        set,
        get,
        deleteKey,
        deleteVal
    }
}
module.exports = credStore();




