import type { Meta } from '@storybook/react'

import { IconButton } from './'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";

const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta

export const Default = {
  render() {
    return (
      <div style={{ display: 'flex', columnGap: '24px' }}>
        <IconButton icon={<GlobalSvgSelector id={'cross'} />} />
        <IconButton icon={<GlobalSvgSelector id={'edit'}/>} />
        <IconButton icon={<GlobalSvgSelector id={'trash-bin'} />} />
      </div>
    )
  },
}

export const Small = {
  render() {
    return (
      <div style={{ display: 'flex', columnGap: '24px' }}>
          <IconButton icon={<GlobalSvgSelector id={'cross'} />} />
          <IconButton icon={<GlobalSvgSelector id={'edit'}/>} />
          <IconButton icon={<GlobalSvgSelector id={'trash-bin'} />} />
      </div>
    )
  },
}
