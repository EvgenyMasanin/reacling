import { type AvailableCommands } from './types'

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
  shearedUI: () => MISSING_COMPONENT_NAME
}

type MissingArgumentError = Record<
  Exclude<AvailableCommands, 'init'>,
  (argumentCount: number) => string
>

export const missingArgumentError: MissingArgumentError = {
  e: ErrorHandler.entity,
  eu: ErrorHandler.entityUI,
  entity: ErrorHandler.entity,
  'entity-ui': ErrorHandler.entityUI,
  f: ErrorHandler.feature,
  fu: ErrorHandler.featureUI,
  feature: ErrorHandler.feature,
  'feature-ui': ErrorHandler.featureUI,
  p: ErrorHandler.page,
  page: ErrorHandler.page,
  w: ErrorHandler.widget,
  widget: ErrorHandler.widget,
  su: ErrorHandler.shearedUI,
  'sheared-ui': ErrorHandler.shearedUI
}
