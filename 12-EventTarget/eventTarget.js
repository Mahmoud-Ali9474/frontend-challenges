class EventTarget{
    constructor(){
        this.listener = new Map();
    }
    addEventListener(name, callback){
        if(!this.listener.has(name)){
            this.listener[name] = new Set();
        }
        this.listener[name].add(callback);
    }

    removeEventListener(name, callback){
        this.listener[name]?.delete(callback);
    }

    dispatchEvent(name){
        this.listener[name]?.forEach(callback => {
            callback();
        });
    }
}
