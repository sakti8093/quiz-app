import { Box, Text } from "@chakra-ui/react"

const NavBar = () => {
  return (
    <Box w='100%' alignItems='center' p={2} bgColor='primary' color='whitecolor' top='0' position='sticky' >
        <Text fontSize='xl' fontWeight='bold'  >
            Quiz App
        </Text>
    </Box>
  )
}

export default NavBar