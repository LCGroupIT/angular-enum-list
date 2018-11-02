import {} from 'jasmine';
import { EnumsKeyPipe, EnumsPipe } from '../src';


describe('EnumsPipes', () => {
    let enumsPipe;
    let enumsKeyPipe: EnumsKeyPipe;
    let enumName: string = 'myEnum';
    enum testEnum {
        Name = 'Ivan',
        Surname = 'Ivanov'
    }

    const resultArray = [{id: 'Ivan', name: 'enums:myEnum.Name'}, {id: 'Ivanov', name: 'enums:myEnum.Surname'}]

    beforeEach(() => {
        enumsPipe = new EnumsPipe('enums', ':');
        enumsKeyPipe = new EnumsKeyPipe('enums', ':');
    });

    it('enumsPipe should be created', () => {
        expect(enumsPipe.transform(
            testEnum,
            {dictName: enumName}
        )).toBeTruthy();
    });

    it('enumsKeyPipe should be created', () => {
        expect(enumsKeyPipe.transform(
            'Ivan',
            { dictName: enumName, currentEnum: testEnum, nameSpace: 'enums' }
        )).toEqual('enums:myEnum.Name');
    });
});
