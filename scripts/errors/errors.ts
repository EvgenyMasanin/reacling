import type { MissingArgumentError } from '../executors/types'

const MISSING_ARGUMENT = 'Missing argument'

const MISSING_NAME = (layerName: string) =>
  `${MISSING_ARGUMENT}: "${layerName}-name"!`

const MISSING_COMPONENT_NAME = `${MISSING_ARGUMENT}: "component-name"!`

const MISSING_ARGUMENTS = (layerName: string) =>
  `${MISSING_ARGUMENT}s: "${layerName}-name" "component-name"!`

const missingErrorByCount = (argumentCount: number, layerName: string) =>
  argumentCount === 1 ? MISSING_COMPONENT_NAME : MISSING_ARGUMENTS(layerName)

const ErrorHandler = {
  entity: () => MISSING_NAME('entity'),
  entityUI: (argumentCount: number) =>
    missingErrorByCount(argumentCount, 'entity'),

  feature: () => MISSING_NAME('feature'),
  featureUI: (argumentCount: number) =>
    missingErrorByCount(argumentCount, 'feature'),

  page: () => MISSING_NAME('page'),
  widget: () => MISSING_NAME('widget'),
  sharedUI: () => MISSING_COMPONENT_NAME,

  component: () => MISSING_NAME('component'),
  hook: () => MISSING_NAME('hook')
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
