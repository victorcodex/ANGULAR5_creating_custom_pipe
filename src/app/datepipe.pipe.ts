import {Pipe, PipeTransform} from '@angular/core';

@Pipe( {name: 'datepipe'} )
export class PipeforDate implements PipeTransform {

    transform(value: any, getdatetime: any): any {

        // 2018/01/20 9:40am

        var getTime = getdatetime.substr(11, 6);
        return value = getTime;

    }

}