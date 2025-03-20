import { type PropType, defineComponent } from "vue"

export interface MicroTeleportProps {
  to: string | HTMLElement;
  disabled?: boolean;
  defer?: boolean
}

function getElement(to: string | HTMLElement): HTMLElement {
  return to instanceof HTMLElement ? to : document.querySelector(to) as HTMLElement;
}

export const microTeleportProps = {
  to: {
    type: [String, Object] as PropType<string | HTMLElement>,
    required: true,
  },
  disabled: Boolean
}


export const MicroTeleport = defineComponent<MicroTeleportProps>({
  name: "MicroTeleport",
  props: microTeleportProps,
  setup(_, { slots }) {
    const pureDiv = (window as any).microApp.pureCreateElement('div')
    console.log(pureDiv)
    return () => {
      return slots.default?.()
    }
  }
})