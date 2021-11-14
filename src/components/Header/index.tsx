import React from 'react'
import { Flex, Text, Switch, useColorMode } from '@chakra-ui/react'

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex w="100%" justifyContent="space-between" alignItems="center">
      <Text
        fontSize="5xl"
        fontWeight="bold"
        color={colorMode === 'dark' ? 'teal.300' : 'teal.600'}
      >
        Todo List
      </Text>
      <Switch size="md" colorScheme="teal" onChange={toggleColorMode} />
    </Flex>
  )
}
