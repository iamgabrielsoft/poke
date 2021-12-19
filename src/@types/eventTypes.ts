

import { WriteStream } from 'fs'
import { ServerResponse } from 'http'
import  { PokeSuccess, PokeError } from '../interfaces/PokeResult'

/**
 * Defines protocol js.Poke supports
 */
export type Protocol = 'http'|'https';

/**
  * Callback event name
*/

export type CallbackEvent = 'data'|'error'|'response'|'end'
 
/**
  * Defines types of stream
*/
export type Stream = WriteStream|ServerResponse
 
/**
  * Defines container for different callbacks
*/
export type EventCallbacksContainer = {
     data?: (chunk:string|Buffer) => void
     error?: (result:PokeError) => void
     response?: (param?:PokeSuccess) => void
     end?: () => void
 }
 
export type EventCallbackFunctions = EventCallbacksContainer[keyof EventCallbacksContainer]
 