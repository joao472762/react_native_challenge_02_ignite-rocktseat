import { defaultTheme } from '@styles/defaultTheme'
import 'styled-components'

type Theme = typeof  defaultTheme

declare module 'styled-components'{
    interface DefaultTheme extends Theme {}
}