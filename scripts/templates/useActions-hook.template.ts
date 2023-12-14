export const USE_ACTIONS_HOOK = `import { bindActionCreators, ActionCreator } from '@reduxjs/toolkit'
import { useTypedDispatch } from '.'

export const useActions = <C extends ActionCreator<unknown>>(action: C) => {
   const dispatch = useTypedDispatch()

   return bindActionCreators(action, dispatch)
}

`
