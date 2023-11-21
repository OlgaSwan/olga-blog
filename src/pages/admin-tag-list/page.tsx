import React, { FunctionComponent, useState } from 'react'
import { Box, Button, Form, FormField, Heading, Tag, TextInput } from 'grommet'

import { routeMap } from 'src/shared/route-map'
import { metadata } from 'src/shared/head-meta/metadata'
import { tagsStore } from 'src/model/tag/store'

import { useAuthRedirect } from 'src/model/auth'

import { Head } from 'src/shared/head-meta/head'
import { TemplateAdmin } from 'src/shared/template'
import { useStore } from '@nanostores/react'

const AdminTagList: FunctionComponent = () => {
  useAuthRedirect(true, routeMap.errorForbidden)
  const tagsDB = useStore(tagsStore.tags)
  const [value, setValue] = useState({ name: '' })

  // @ts-ignore
  return (
    <TemplateAdmin>
      <Head title={metadata.adminTagList.title} description={metadata.adminTagList.description} />
      <Heading level='2' margin={{ bottom: 'medium' }}>
        Tag list
      </Heading>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({ name: '' })}
        onSubmit={async ({ value }) => {
          if (value.name) await tagsStore.add(value)
          setValue({ name: '' })
        }}
      >
        <FormField name='name' label='Name'>
          <TextInput id='text-input-id' name='name' />
        </FormField>
        <Box direction='row' gap='medium'>
          <Button type='submit' primary label='Submit' />
          <Button type='reset' label='Reset' />
        </Box>
      </Form>

      <Box margin={{ top: 'large' }} wrap={true} direction='row' gap='small'>
        {tagsDB && tagsDB.map((t) => <Tag alignSelf='start' value={t.name} onRemove={async () => await tagsStore.remove(t.id)} />)}
      </Box>
    </TemplateAdmin>
  )
}

export default AdminTagList
