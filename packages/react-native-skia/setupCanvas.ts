export const setupCanvas = async (id: string) => {
  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) {
    throw new Error("WebGPU not supported");
  }

  return "Hello";
};
