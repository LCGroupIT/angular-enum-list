# angular-enum-list

This package can be used for transformation enum's values to array where names are your own path with namespace and dictionary name to localizate word.



 - [Installation](#installation)
 - [Usage](#usage)
 
 
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

Use "enumList" pipe to get the array with translation keys:

    <div>{{ myEnum | enumList: { dictName: 'list' } }}</div>
    
Pipe has one required parameter "dictName". It's name of dictionary in localization file.
Other params are optional. You can add the folowing parametrs:

canBeEmpty 

If in your enum is "Undefined" field, will be ignored this one.

nameSpace

You can specify nameSpace parameter for particularly pipes.
