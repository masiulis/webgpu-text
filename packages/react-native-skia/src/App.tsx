import React from "react";
import { Text } from "react-native";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

import CanvasKitWasm from "canvaskit-wasm/bin/full/canvaskit.wasm?url";

const App = () => {
  return (
    <WithSkiaWeb
      getComponent={() => import("./Canvas.tsx")}
      fallback={<Text>Loading Skia...</Text>}
      opts={{
        locateFile: () => CanvasKitWasm,
      }}
    />
  );
};

export default App;
