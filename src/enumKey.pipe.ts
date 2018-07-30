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

    transform(key: any, {dictName, currentEnum, nameSpace}) {
        const currentNameSpace = nameSpace ? nameSpace : this.nameSpaceGlobal;
        let resultKeyPath = '';
        if (currentEnum && currentEnum.get('key')) {
            resultKeyPath =  `${currentNameSpace}${this.separatorGlobal}${dictName}.${currentEnum.get('key')}`;
        }
        return resultKeyPath;
    }
}
