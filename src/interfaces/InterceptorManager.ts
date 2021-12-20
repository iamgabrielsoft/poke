import PokeOption from './PokeOption'
import { PokeError, PokeSuccess } from './PokeResult'


export interface InterceptorManagerTypes {
    fullfiled: PokeSuccess, 
    reject: PokeError, 
    synchronous: PokeOption<Body> | boolean,
    runWhen: PokeOption<Body> | null 
}  