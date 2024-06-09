// esse arquivo linka e transfere os dados necessários entre os componentes
import { calculateTimeLived } from "../age_/calculateTimeLived";
import { Bottom } from "../components/Bottom"
import { Error } from "./error";

// chama o cálculo da idade
var timelived = {
    years:"--",
    months:"--",
    days:"--"
}
export function send_button(){
    if(!Error(date_data.DAY, date_data.MONTH, date_data.YEAR)){
        return calculateTimeLived(`${date_data.MONTH}/${date_data.DAY}/${date_data.YEAR}`)
    }
    else return {
        years:"--",
        months:"--",
        days:"--"
    }
}
  
// guarda os dados inseridos em cada input
var date_data = {
    DAY:0,
    MONTH:0,
    YEAR:0
}
export function update_data(evt, name){
    if(Number(evt.target.value) || evt.target.value == ""){
        date_data[name] = Number(evt.target.value);
        console.log(date_data)
    }
    else{
        evt.target.value = date_data[name];
    }
}