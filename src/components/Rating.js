import { HStack, Icon } from '@chakra-ui/react'
import * as React from 'react'
import { FaStar } from 'react-icons/fa'

export const Rating = (props) => {
  const { defaultValue = 0, max = 5, size = 'md', rootProps } = props
  const color = 'gray.600'
  const activeColor = 'blue.200'
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({
        length: max,
      })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  )
}
