import React, { ReactElement } from 'react'

export const Foobar = (props: { test: string }): ReactElement => {
  return <div {...props}>foobar </div>
}
