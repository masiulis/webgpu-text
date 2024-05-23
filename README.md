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
import {loadFont, text, paragraph} from 'webgpu-text';
import yourFont from './path-to-font.tff';

import yourFont400 from './path-to-font-400.tff';
import yourFontItalic400 from './path-to-font-italic-400.tff';

loadFont(yourFont, 'VariableFontName');
loadFont({ 400: yourFont400, italic400: yourFontItalic400} , 'StandardFontName');

paragraph (
    text('Hello,', 
        {
            fontSize: 14,
            fontName: 'VariableFontName', // optional, first font loaded is set as default
            fontWeight: 675,
            lineHeight: 14,
            color: '#000',
        }
    ),
    text(' World!', 
        {
            fontSize: 14,
            fontWeight: 400,
            fontName: 'StandardFontName',
            style: 'italic',
            lineHeight: 14,
            color: '#000',
        }
    )
);
```

## Rendering to canvas