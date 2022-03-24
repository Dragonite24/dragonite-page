import { breakpoints } from './breakpoints'

export type ScreenType = 'mobile' | 'tablet' | 'desktop' | 'original'

type Values = {
  type: ScreenType
  isDesktop: boolean
}

type Events = Extract<keyof Values, string>

type Callbacks = {
  [K in keyof Values]: (value: Values[K]) => void
}

type Listeners = {
  [K in keyof Callbacks]: Callbacks[K][]
}

const listeners: Listeners = {
  type: [],
  isDesktop: []
}

export let values: Values = getValues()

export function on<K extends Events>(ev: K, cb: Callbacks[K]): void {
  const list = listeners[ev]
  const index = list.indexOf(cb as any)
  if (index === -1) list.push(cb as any)
}

export function off<K extends Events>(ev: K, cb: Callbacks[K]): void {
  const list = listeners[ev]
  const index = list.indexOf(cb as any)
  if (index !== -1) list.splice(index, 1)
}

const emit = <K extends Events>(ev: K, value: Values[K]): void => {
  listeners[ev].forEach((cb: any) => cb(value))
}

function getValues(): Values {
  const width = document.body.clientWidth
  let type: ScreenType

  if (width >= breakpoints.original) type = 'original'
  else if (width >= breakpoints.desktop) type = 'desktop'
  else if (width >= breakpoints.mobile) type = 'tablet'
  else type = 'mobile'

  return {
    type,
    isDesktop: type === 'original' || type === 'desktop'
  }
}

window.addEventListener('resize', () => {
  const oldValues = values
  values = getValues()
  if (values.type !== oldValues.type) emit('type', values.type)
  if (values.isDesktop !== oldValues.isDesktop) emit('isDesktop', values.isDesktop)
})
