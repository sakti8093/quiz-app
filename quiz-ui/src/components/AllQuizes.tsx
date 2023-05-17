import { Box, Image, Text } from "@chakra-ui/react"
import react from '../assets/react.svg'
import html from '../assets/html.svg'
import css from '../assets/css.png'
import js from '../assets/js.svg'
const AllQuizes = () => {
  return (
    <Box mt='30px' >
        <Text textAlign='center' fontWeight='bold' fontSize='xl' >All Quizes</Text>
        <Box display='grid' gridTemplateColumns='repeat(2,1fr)' gap='20px' >
            <Box textAlign='center' fontWeight='bold' p={2} boxShadow='md' rounded='2xl' >
                <Image src={react} height='50px' display='block' margin='auto' />
                <Text rounded='xl' >React Js</Text>
            </Box>
            <Box textAlign='center' fontWeight='bold' p={2} boxShadow='md' rounded='2xl'  >
                <Image src={html} height='50px' display='block' margin='auto' />
                <Text rounded='xl' >HTML</Text>
            </Box>
            <Box textAlign='center' fontWeight='bold' p={2} boxShadow='md' rounded='2xl'  >
                <Image src={css} height='50px' display='block' margin='auto' />
                <Text rounded='xl' >CSS</Text>
            </Box>
            <Box textAlign='center' fontWeight='bold' p={2}  boxShadow='md' rounded='2xl' >
                <Image src={js} height='50px' display='block' margin='auto' />
                <Text rounded='xl' >JS</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default AllQuizes