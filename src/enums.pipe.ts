import { Inject, Injectable, Pipe, PipeTransform } from '@angular/core';
import * as EnumsTokens from './enums.tokens';
import { SelectorOptionalsModel } from './selectorOptionals.model';

@Pipe({
    name: 'enumList'
})

@Injectable()
export class EnumsPipe implements PipeTransform {
    constructor(@Inject(EnumsTokens.NAMESPACE_NAME) private nameSpaceGlobal: string,
                @Inject(EnumsTokens.SEPARATOR_NAME) private separatorGlobal: string) {
    }

    transform(currentEnum: any, {dictName, canBeEmpty = true, nameSpace = '', nullFields = ['Undefined']}): SelectorOptionalsModel[] {
        const currentNameSpace = nameSpace ? nameSpace : this.nameSpaceGlobal;
        const resultArray = [];

        if (currentEnum) {
            Object.keys(currentEnum)
                .filter((x) => Number.isNaN(parseInt(x, 10)))
                .map((key) => {
                    if (!(!canBeEmpty && nullFields.find((field) => field === key))) {
                        resultArray.push(new SelectorOptionalsModel(currentEnum[key], `${currentNameSpace}${this.separatorGlobal}${dictName}.${key}`));
                    }
                });
        }
        return resultArray;
    }
}
