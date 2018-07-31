# angular-enum-list

This package can be used for transformation enum's values to array where names are your own path with namespace and dictionary name to localizate word.



 - [Installation](#installation)
 - [Usage](#usage)
 - [Dictionary](#dictionary)
 
 
# Installation

**1.** Install package
    npm install angular-enum-list --save
    

**2.** Import AngularEnumListModule to AppModule

```typescript

import { AngularEnumListModule } from 'angular-enum-list';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [   
    AppComponent
  ],
  import: [
    AngularEnumListModule.forRoot('enums') // first parameter is localization namespace name,
                                           // second parameter is separator, default ':'
  ]
})
export class AppModule {}

```

You can configurate name of localize namespase for global context and separator which break namespace and path from localize key



# Usage

### Pipes

Use **"enumList"** pipe to get the array with translation keys:

    <div *ngFor="let item of myEnum | enumList: { dictName: 'list' }" [id]="item.id">{{ item.name | i18next }}</div>
    
Pipe has one required parameter "dictName". It's name of dictionary in localization file.
Other params are optional. You can add the folowing parametrs:

**canBeEmpty**
```html
<div *ngFor="let item of myEnum | enumList: { dictName: 'list', canBeEmpty: true }" [id]="item.id">
 {{ item.name | i18next }}
</div>
```

If in your enum is "Undefined" field, will be ignored this one.

**nameSpace**
```html
<div *ngFor="let item of myEnum | enumList: { dictName: 'list', nameSpace: 'my-favorite-enums' }" [id]="item.id">
 {{ item.name | i18next }}
</div>
```

You can specify nameSpace parameter for particularly pipes.

**nullFields**
```html
<div *ngFor="let item of myEnum | enumList: { dictName: 'list', nullFields: ['Unknown', 'Undefined'], canBeEmpty: false }" [id]="item.id">
 {{ item.name | i18next }}
</div>
```

This parameter is array of ignored fields in your enum. It will be worked is you assign 
```typescript
canBeEmpty = true
```


Use **"enumKey"** to get the key of your enum field with all localization path.

```html
 <div>{{ 'keyOfMyEnum' | enumKey: { dictName: 'list', currentEnum: _enums.myEnum, nameSpace: "my-enums"} | i18nextCap}}</div>
```

Pipe has  two required parameters: "dictName" and "currentEnum".
"dictName" is the name of dictionary in localization file.
"currentEnum" is original enum, where we search the key.

in the end you get result string looks like:
```html
<div>{{ my-enum:list.keyOfMyEnum | i18nextCap }}</div>
```


**nameSpace**
```html
<div *ngFor="let item of myEnum | enumList: { dictName: 'list', nameSpace: 'my-favorite-enums' }" [id]="item.id">
 {{ item.name | i18next }}
</div>
```


# Dictionary

Your own dictionary must be looks like:

ru.enums.json

```typescript
{
"SexKind": {
    "Undefined": "Не выбрано",
    "Male": "Мужской",
    "Female": "Женский"
  }
}
```
 
 For example you can use this list in native select in html-file:
```html
 <select class="form-control" 
         formControlName="SexKind" 
         [(ngModel)]="model.SexKind">
    <option *ngFor='let status of enums.SexKind | enumList : { canBeEmpty: false, dictName: "SexKind" }'
            [ngValue]='status.id'>
        {{ status.name | i18nextCap }}
    </option>
 </select>
```
"enums" is public variable which contains enums you need to use in your template:

```typescript 
public enums = { SexKind, RaceKind };
```
