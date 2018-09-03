import { Inject, Injectable, Pipe, PipeTransform } from '@angular/core';
import * as EnumsTokens from './enums.tokens';

@Pipe({
    name: 'enumKey'
})

@Injectable()
export class EnumsKeyPipe implements PipeTransform {
    constructor(@Inject(EnumsTokens.NAMESPACE_NAME) private nameSpaceGlobal: string,
                @Inject(EnumsTokens.SEPARATOR_NAME) private separatorGlobal: string) {
    }

    transform(value: any, {dictName, currentEnum, nameSpace}) {
        const currentNameSpace = nameSpace ? nameSpace : this.nameSpaceGlobal;
        let resultKeyPath = '';
        let key = Object.keys(currentEnum).find(key => currentEnum[key] === value);
        if (currentEnum && key) {
            resultKeyPath =  `${currentNameSpace}${this.separatorGlobal}${dictName}.${key}`;
        }
        return resultKeyPath;
    }
}
