import { Box } from 'grommet'
import { FunctionComponent } from 'react'
import { TemplateProps } from 'src/shared/template/abstract/props'

export const MainContent: FunctionComponent<TemplateProps> = ({ main }) => {
  return (
    <Box as='main' basis='768px' flex='shrink'>
      {main}
    </Box>
  )
}
