import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react"
import reactimage from '../assets/reactimage.jpeg'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {BiTimer} from 'react-icons/bi'
import {GiAchievement} from 'react-icons/gi'
import DrawerCompnent from "./DrawerCompnent"

const TrendQuizCard = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = () => {
        onOpen();
    }

  return (
    <Box mt='20px' >
        <Text textAlign='center' fontWeight='bold' fontSize='xl' >Trending Quizes</Text>
            <Box  boxShadow='lg' rounded='3xl' mt='20px' >
                <Text bgColor='primary' roundedTop='3xl' p={2} color='white' fontWeight='bold' >React Js Quiz</Text>
                    <Box  p={3} >
                        <Image rounded='2xl' height='200px' w='100%' src={reactimage} display='block' margin='auto' />
                        <Text>
                        React. js framework used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript
                        </Text>
                        <Text fontWeight='bold' mt='10px' >This Quiz Includes:</Text>
                        <Text></Text>
                        <Box display='flex' gap='10px' alignItems='center' >
                           <Text fontSize='20px' > <AiFillQuestionCircle /></Text>
                            <Text>5 questions</Text>
                        </Box>
                        <Box display='flex' gap='10px' alignItems='center' >
                           <Text fontSize='20px'>< BiTimer /></Text> 
                            <Text>5 mins</Text>
                        </Box>
                        <Box display='flex' gap='10px' alignItems='center' >
                            <Text fontSize='20px' ><GiAchievement  /></Text>
                            <Text>50% passing</Text>
                        </Box>
                        <Button onClick={()=>handleClick()} color='white' display='block' margin='auto' rounded='full' bgColor='primary' >Take Quiz</Button>
                </Box>
            </Box>
            <DrawerCompnent isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default TrendQuizCard