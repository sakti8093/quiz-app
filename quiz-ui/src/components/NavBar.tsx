import { Box, Text } from "@chakra-ui/react"

const NavBar = () => {
  return (
    <Box w='100%' border='1px solid black' alignItems='center' p={2} >
        <Text fontSize='xl' >
            Quiz App
        </Text>
    </Box>
  )
}

export default NavBar