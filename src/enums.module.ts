import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnumsPipe } from './enums.pipe';
import * as EnumsTokens from './enums.tokens';


@NgModule({
    declarations: [
        EnumsPipe
    ],
    exports: [
        EnumsPipe
    ]
})


export class AngularEnumsListModule {
    static forRoot(namespace: string = null, separator: string = null): ModuleWithProviders {
        return {
            ngModule: AngularEnumsListModule,
            providers: [
                {
                    provide: EnumsTokens.NAMESPACE_NAME,
                    useValue: namespace || 'enums'
                },
                {
                    provide: EnumsTokens.SEPARATOR_NAME,
                    useValue: separator || ':'
                }
            ]
        };
    }
}
