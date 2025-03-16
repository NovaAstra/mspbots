import type { Arrayable, Promisable } from "@sphere/typing";
import type { ESLintConfig } from "./typings";

export type CreateConfigFunction<O = void, E extends ESLintConfig = ESLintConfig> =
  O extends void
  ? () => Arrayable<E>
  : (options?: O) => Promisable<Arrayable<E>>

export function createConfig<E extends ESLintConfig = ESLintConfig>(config: ESLintConfig): () => E
export function createConfig<E extends ESLintConfig = ESLintConfig>(config: ESLintConfig[]): () => E[]

export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options?: O) => ESLintConfig
): (options?: O) => E
export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options?: O) => ESLintConfig[]
): (options?: O) => E[]

export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options?: O) => Promise<ESLintConfig>
): (options: O) => Promise<E>
export function createConfig<O = void, E extends ESLintConfig = ESLintConfig>(
  config: (options?: O) => Promise<ESLintConfig[]>
): (options?: O) => Promise<E[]>

export function createConfig<
  O = void,
  E extends ESLintConfig = ESLintConfig
>(
  config: Arrayable<E> | CreateConfigFunction<O, E>
): CreateConfigFunction<O, E> {
  return typeof config === 'function'
    ? config
    : (() => config) as unknown as CreateConfigFunction<O, E>;
}
