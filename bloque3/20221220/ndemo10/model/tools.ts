import { promisify } from "util";
import bodyParser from "body-parser";

/** 
 * Convertir un body de un IncomingMessage a un JSON
*/
export const getBody = promisify(bodyParser.urlencoded({extended: true}));