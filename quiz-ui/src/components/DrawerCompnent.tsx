import React from 'react';
import {CiTimer} from 'react-icons/ci'
import {BsQuestionCircle} from 'react-icons/bs'
import { CiMedal  } from 'react-icons/ci'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text } from "@chakra-ui/react";

type props = {
    isOpen: boolean,
    onClose:()=>void
}

const DrawerCompnent:React.FC<props> = ({isOpen,onClose}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent  borderTopRadius='3xl'>
        <DrawerCloseButton/>
        <DrawerHeader >Quiz Rules</DrawerHeader>
        <DrawerBody>
            <Box>
                <Box display='flex' alignItems='center' gap='20px' >
                    <Text fontSize='40px' ><CiTimer /></Text>
                    <Box>
                        <Text fontWeight='bold' >5 MINS</Text>
                        <Text>
                            Keep in mind that its a time bound quiz
                        </Text>
                    </Box>
                </Box>
                <Box display='flex' alignItems='center' gap='20px' mt='20px' >
                    <Text fontSize='40px' ><BsQuestionCircle /></Text>
                    <Box>
                        <Text fontWeight='bold' >5 QUESTIONS</Text>
                        <Text>
                            We Believe you will ace it !
                        </Text>
                    </Box>
                </Box>
                <Box display='flex' alignItems='center' gap='20px' mt='20px' >
                    <Text fontSize='40px' ><CiMedal /></Text>
                    <Box>
                        <Text fontWeight='bold' >50% PASSING CRITERIA</Text>
                        <Text>
                            All the best ! see you on other side
                        </Text>
                    </Box>
                </Box>
            </Box>
        </DrawerBody>
        <DrawerFooter>
          <Button color='white' display='block' margin='auto' rounded='full' bgColor='primary' >start</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCompnent;
