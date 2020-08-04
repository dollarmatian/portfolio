import styled from './node_modules/styled-components'
import { SideNav } from './node_modules/carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`