import type { Promisable } from "@sphere/typing";

export async function interopDefault<T>(module: Promisable<T>): Promise<T> {
  try {
    let resolved = await module

    if (typeof resolved === 'object' && resolved !== null) {
      if ('default' in resolved && Object.keys(resolved).length === 1) {
        return (resolved as { default: T }).default;
      }

      return resolved
    }

    return resolved
  } catch (error) {
    throw new Error(`Failed to import module: ${error instanceof Error ? error.message : String(error)}`);
  }
}