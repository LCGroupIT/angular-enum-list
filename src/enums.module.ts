import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnumsPipe } from './enums.pipe';
import * as EnumsTokens from './enums.tokens';
import { EnumsKeyPipe } from './enumKey.pipe';


@NgModule({
    declarations: [
        EnumsPipe,
        EnumsKeyPipe
    ],
    exports: [
        EnumsPipe,
        EnumsKeyPipe
    ],
    providers: [
        AngularEnumsListModule,
        EnumsPipe,
        EnumsKeyPipe
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
