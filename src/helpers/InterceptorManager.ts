
import { PokeClass } from '..'
import { InterceptorManagerTypes } from '../interfaces/InterceptorManager'
import { PokeError, PokeSuccess } from '../interfaces/PokeResult'




export class InterceptorManagerClass extends PokeClass {
    private handlers:Array<InterceptorManagerTypes> = [] 

    public create = (fulfilled:PokeSuccess, reject:PokeError) => {
        this.handlers.push({
            fullfiled: fulfilled, 
            reject: reject, 
            synchronous: this.options ? this.options.synchronous : false, 
            runWhen: this.options ? this.options.runWhen : null
        })

        return this.handlers.length - 1
    }

    public eject = (id:number):void | null => {
        if(this.handlers[id]){
            return null //this.handlers[id] = null
        }
    }; 
}