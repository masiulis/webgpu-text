// turns awaited call responses into golang style [errors, date] so I wouldn't have to add try catch everywhere
export const go = async <
  Params,
  InnerReturn,
  Action extends (...params: Params[]) => Promise<InnerReturn>,
  Return extends Awaited<ReturnType<Action>>,
>(
  promise: Action,
  ...params: Params[]
): Promise<[null, Return] | [Error, null]> => {
  try {
    const data = await promise(...params);
    return [null, data as Return];
  } catch (e) {
    return [e as Error, null];
  }
};

/* Example:

const [error, data] = await go(setupCanvas, "canvas");
if (error) {
  console.error(error);
  return;
}
const a = data.toLocaleLowerCase();

 */
