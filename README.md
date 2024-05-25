# webgpu-text
A library to render text in WebGPU

## Installation

```shell
npm i webgpu-text
```

## How to use it

Let's display:

<b>Hello,</b> <i>World!</i>

```typescript
import {loadFont, Text, Paragraph} from 'webgpu-text';
import yourFont from './path-to-font.tff';

import yourFont400 from './path-to-font-400.tff';
import yourFontItalic400 from './path-to-font-italic-400.tff';

loadFont(yourFont, 'VariableFontName');
loadFont({ 400: yourFont400, italic400: yourFontItalic400} , 'StandardFontName');

Paragraph (
    [
        Text('Hello,', 
            {
                fontSize: 14,
                fontName: 'VariableFontName', // optional, first font loaded is set as default
                fontWeight: 675,
                lineHeight: 14,
                color: '#000',
            }
        ),
        Text(' World!', 
            {
                fontSize: 14,
                fontWeight: 400,
                fontName: 'StandardFontName',
                italic: true,
                lineHeight: 14,
                color: '#000',
            }
        ),
    ],
    {
        
    }
);
```

### BiDi - bidirectional fonts

Let's display:

ABC אבג DEF

```typescript
import {loadFont, Text, Paragraph} from 'webgpu-text';
import yourFont from './path-to-font.tff';

loadFont(yourFont, 'VariableFontName');

Paragraph (
    Text('ABC גבא DEF'), // Provide text as a list of unicode characters, BiDi will automatically rearrange characters
);
```

## Rendering to canvas