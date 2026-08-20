import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  // Empty by design: this augments styled-components DefaultTheme with our Theme.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
