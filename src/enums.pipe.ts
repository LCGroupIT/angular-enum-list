import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enum'
})
export class EnumsPipe implements PipeTransform {
    constructor() {
    }

    transform(currentEnum: any, {dictName, canBeEmpty = true, nameSpace = 'enums'}) {

        const resultArray = [];

        if (currentEnum) {
            Object.keys(currentEnum)
                .filter((x) => Number.isNaN(parseInt(x, 10)))
                .map((key) => {
                    resultArray.push({id: currentEnum[key], name: `${nameSpace}:${dictName}.${key}`})
                })
        }
        return resultArray;
    }
}
