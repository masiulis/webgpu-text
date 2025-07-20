let nextAssetId = 1;
const assets = new Map();

function registerAsset(asset) {
  const id = nextAssetId++;
  assets.set(id, asset);
  return id;
}

function getAssetByID(assetId) {
  return assets.get(assetId);
}

function resolveAssetSource(source) {
  if (typeof source === "number") {
    const asset = assets.get(source);
    return asset ? { uri: asset.uri, ...asset } : null;
  }

  if (typeof source === "string") {
    return { uri: source };
  }

  if (source && typeof source === "object") {
    return source;
  }

  return null;
}

export { registerAsset, getAssetByID, resolveAssetSource };
