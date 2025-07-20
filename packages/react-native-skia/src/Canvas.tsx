import React from "react";
import { useFonts } from "@shopify/react-native-skia";
import RobotoVariable from "./assets/Roboto-Variable.ttf?url";
import NotoEmoji from "./assets/NotoColorEmoji-Regular.ttf?url";

import {
  Canvas as SkiaCanvas,
  Paragraph,
  Skia,
  TextAlign,
} from "@shopify/react-native-skia";

const Canvas = () => {
  const fontManager = useFonts({
    Roboto: [{ __esModule: true, default: RobotoVariable }],
    Noto: [{ __esModule: true, default: NotoEmoji }],
  });

  if (!fontManager) {
    return null;
  }

  const text = "hello world!";

  const paragraphStyle = {
    textAlign: TextAlign.Left,
  };
  const textStyle = {
    color: Skia.Color("red"),
    fontFamilies: ["Roboto"],
    fontSize: 64,
    fontStyle: { weight: 400 },
  };
  const paragraph = Skia.ParagraphBuilder.Make(paragraphStyle, fontManager)
    .pushStyle(textStyle)
    .addText(text)
    .pop()
    .build();

  return (
    <SkiaCanvas
      style={{ width: window.innerWidth, height: window.innerHeight }}
      id={"skia-canvas"}
    >
      <Paragraph paragraph={paragraph} x={100} y={100} width={200} />
    </SkiaCanvas>
  );
};

export default Canvas;
