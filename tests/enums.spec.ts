import { EnumsKeyPipe, EnumsPipe } from '../src';


describe('EnumsPipes', () => {
    let enumsPipe;
    let enumsKeyPipe: EnumsKeyPipe;
    let enumName: string = 'myEnum';

    enum testEnum {
        Name = 'Ivan',
        Surname = 'Ivanov',
        None = 'None',
        Number = '12',
        Spaces = 'We are the champions'
    }
    const resultArray = [{id: 'Ivan', name: 'enums:myEnum.Name'},
        {id: 'Ivanov', name: 'enums:myEnum.Surname'},
        {id: 'None', name: 'enums:myEnum.None'},
        {id: '12', name: 'enums:myEnum.Number'},
        {id: 'We are the champions', name: 'enums:myEnum.Spaces'}];

    beforeEach(() => {
        enumsPipe = new EnumsPipe('enums', ':');
        enumsKeyPipe = new EnumsKeyPipe('enums', ':');
    });

    it('enumsPipe should be created', () => {
        expect(enumsPipe.transform(testEnum, {dictName: enumName})).toBeTruthy();
    });

    it('enumsKeyPipe should be created', () => {
        expect(enumsKeyPipe.transform(
            'Ivan',
            {dictName: enumName, currentEnum: testEnum, nameSpace: 'enums'}
        )).toBeTruthy();
    });

    it('enumsPipe should be equal', () => {
        expect(JSON.stringify(enumsPipe.transform(
            testEnum,
            {dictName: enumName}
        ))).toEqual(JSON.stringify(resultArray));
    });

    it('enumsKeyPipe should be equal', () => {
        expect(enumsKeyPipe.transform(
            'Ivan',
            {dictName: enumName, currentEnum: testEnum, nameSpace: 'enums'}
        )).toEqual('enums:myEnum.Name');
    });

    it('enumsPipe and ignored fields', () => {
        expect(enumsPipe.transform(
                testEnum,
                {dictName: enumName, ignored: ['None']}
            ).find(item => item.name === 'enums:myEnum.None')
        ).toBeFalsy();
    });

    it('enumsPipe and full ignored fields', () => {
        expect(JSON.stringify(enumsPipe.transform(
                testEnum,
                {dictName: enumName, ignored: []}
            ))).toEqual(JSON.stringify(resultArray));
    });
});
