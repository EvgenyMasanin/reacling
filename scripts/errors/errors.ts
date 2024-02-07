import type { MissingArgumentError } from '../executors/types'

export const CONTROLLABLE_EXIT = 'Controllable exit!'
export const UNKNOWN_COMMAND = 'Unknown command!'

export const MISSING_ARGUMENT = 'Missing argument'

const MISSING_NAME = (layerName: string) =>
  `${MISSING_ARGUMENT}: "${layerName}-name"!`

export const MISSING_COMPONENT_NAME = `${MISSING_ARGUMENT}: "component-name"!`

const MISSING_ARGUMENTS = (layerName: string) =>
  `${MISSING_ARGUMENT}s: "${layerName}-name", "component-name"!`

const missingErrorByCount = (argumentCount: number, layerName: string) =>
  argumentCount === 1 ? MISSING_COMPONENT_NAME : MISSING_ARGUMENTS(layerName)

const ErrorHandler = {
  entity: () => MISSING_NAME('entity'),
  entityUI: (argumentCount: number) =>
    missingErrorByCount(argumentCount, 'entity'),

  feature: () => MISSING_NAME('feature'),
  featureUI: (argumentCount: number) =>
    missingErrorByCount(argumentCount, 'feature'),

  page: () => MISSING_NAME('pag'),
  widget: () => MISSING_NAME('widget'),
  sharedUI: () => MISSING_COMPONENT_NAME,

  component: () => MISSING_NAME('component'),
  hook: (argumentCount: number) => {
    return argumentCount === 1
      ? `${MISSING_ARGUMENT}: "slice-path"`
      : `${MISSING_ARGUMENT}s: "hook-name", "slice-name"`
  }
}

export const missingArgumentError: MissingArgumentError = {
  e: ErrorHandler.entity,
  eu: ErrorHandler.entityUI,
  entity: ErrorHandler.entity,
  'entity-ui': ErrorHandler.entityUI,
  f: ErrorHandler.feature,
  fu: ErrorHandler.featureUI,
  feature: ErrorHandler.feature,
  'feature-ui': ErrorHandler.featureUI,
  w: ErrorHandler.widget,
  widget: ErrorHandler.widget,
  su: ErrorHandler.sharedUI,
  'shared-ui': ErrorHandler.sharedUI,
  p: ErrorHandler.page,
  page: ErrorHandler.page,
  c: ErrorHandler.component,
  component: ErrorHandler.component,
  h: ErrorHandler.hook,
  hook: ErrorHandler.hook
}
