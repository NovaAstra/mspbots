import { type Component, type App, createApp } from 'vue'
import micro from '@micro-zoe/micro-app'

export interface MicroAppOptions {
  namespace: string | 'app';

  store?: (app: App) => Promise<void>;

  router?: (app: App) => Promise<void>;

  plugins?: (app: App) => Promise<void>;
}

function createAppName(input: string) {
  return input
    .replace(/\//g, '-') // 将 / 替换为 -
    .replace(/[^a-zA-Z0-9-_]/g, '') // 移除其他非法字符
    .replace(/@/g, '') // 直接删除 @
    .toLowerCase(); // 转换为小写
}

function createRootElement(input: string): HTMLElement {
  const name = createAppName(input)
  const root = document.createElement('div');
  root.id = name;
  return root
}

function getOptions(options: Partial<MicroAppOptions> = {}): MicroAppOptions {
  return Object.assign({}, { namespace: 'app' }, options)
}

export async function createMicroApp(component: Component, options?: Partial<MicroAppOptions>) {
  const opts = getOptions(options);

  const app = createApp(component)

  await opts.store?.(app)

  await opts.router?.(app)

  await opts.plugins?.(app)

  micro.start()

  const root = createRootElement(opts.namespace)
  app.mount(root)
  document.body.appendChild(root);

  return app;
}