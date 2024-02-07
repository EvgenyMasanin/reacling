# reacling

## Description

It is a cli utility that generates various parts of your React project such as component folders, hooks, etc. Also it can be used fo generate Feature Sliced Design structure.

## Usage

```bash
# Command example
$ yarn reacling c <component name>

# Options:
 --help  Show available commands
```

## Commands for simple project

- Generate a component: `$ yarn reacling c <component name> `
- Generate a page: `$ yarn reacling p <page name> `
- Generate a hook: `$ yarn reacling h <hook name> `
- Generate a config file: `$ yarn config`
- Get help: `$ yarn reacling --help`
- Get help for command: `$yarn reacling <command> --extended-help`

## Commands for Feature-Sliced Design project

- Generate FSD structure: `$ yarn reacling init`
- Generate a page: `$ yarn reacling p <page name>`
- Generate a widget: `$ yarn reacling w <widget name>`
- Generate a entity: `$ yarn reacling e <entity name>`
- Generate a feature: `$ yarn reacling f <feature name>`
- Generate a component shortcut: `$ yarn reacling eu | fu | su <component path>`
- Generate a component for entity: `$ yarn reacling eu <entity name> <component name>`
- Generate a component for feature: `$ yarn reacling fu <feature name> <component name>`
- Generate a component for shared: `$ yarn reacling su <component name>`
- Generate a hook for slice: `$ yarn reacling h <hook name> <slice-path>`
- Generate a config file: `$ yarn config`
- Get help: `$ yarn reacling --help`
- Get help for command: `$yarn reacling <command> --extended-help`

## Feature-Sliced Design

You can generate reacling.json by executing `$ yarn reacling config`. Use this config to provide custom structure of project.

##### This is default settings for FSD structure:

```json{
    "methodology": "fsd",
    "fsdStructure": {
      "app": { "withProviders": true },
      "pages": {
        "withLib": true,
        "withUi": true
      },
      "widgets": {
        "withLib": true,
        "withUi": true
      },
      "features": {
        "withApi": true,
        "withLib": true,
        "withModel": true,
        "withUi": true
      },
      "entities": {
        "withApi": true,
        "withLib": true,
        "withModel": true,
        "withUi": true
      }
    }
}
```

##### You can provide your oun settings using this interface:

```typescript
interface SliceStructure {
  withApi?: boolean
  withAssets?: boolean
  withConfig?: boolean
  withLib?: boolean
  withUi?: boolean
  withModel?: boolean
}

type Methodology = 'simple' | 'fsd'

interface ReaclingConfig {
  methodology?: Methodology
  fsdStructure?: {
    app?: {
      withProviders?: boolean
    }
    entities?: SliceStructure
    features?: SliceStructure
    widgets?: SliceStructure
    pages?: SliceStructure
  }
}
```

##### For example:

The command `$ yarn reacling init` provide us next folders structure:
![alt text](./assets/structure.png 'FSD structure')
