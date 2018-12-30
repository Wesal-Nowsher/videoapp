import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mathminStrength'})
export class mathminStrengthPipe implements PipeTransform {
    transform(value) {
        console.log("this is pipe passed value mintues",value)
        let minutes = Math.floor(value / 60);
        let seconds = Math.floor(value- minutes * 60);
        console.log("time in minutes", minutes + ":" + seconds);
        return minutes;
    }
}
@Pipe({name: 'mathsecStrength'})
export class mathsecStrengthPipe implements PipeTransform {
    transform(value) {
        console.log("this is pipe passed value secs",value)
        let minutes = Math.floor(value / 60);
        let seconds = Math.floor(value - minutes * 60);
        console.log("time in secs", minutes + ":" + seconds);
        return seconds;
    }
}