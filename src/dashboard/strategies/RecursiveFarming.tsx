import React from 'react';

import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { ReactComponent as AvalancheLogo } from '../../assets/logos/avalanche-logo.svg';
import { ReactComponent as AaveLogo } from '../../assets/logos/aave-logo.svg';

function RecursiveFarming() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={10} width={'70%'}>
      <Text
        fontWeight={700}
        fontSize={'26'}
        lineHeight={'31.2px'}
        color="black"
      >
        Recursive Farming 👩‍🌾
      </Text>

      <Text
        paddingTop={5}
        fontWeight={400}
        fontSize={'16'}
        lineHeight={'24px'}
        color="grayLetter"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci
        lorem, molestie eu enim eget, sollicitudin blandit nulla. Aliquam
        cursus, sem a elementum auctor, felis leo dictum eros, id pellentesque
        nulla velit ut erat.
      </Text>

      <HStack paddingTop={10} justifyContent="space-around">
        <Box
          width={310}
          height={100}
          borderRadius={15}
          border="1px"
          borderColor={'#F1F4F6'}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Grid
            height={'100%'}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box
                bg="#0ECB81"
                height={'75%'}
                width={'20%'}
                borderRadius={'11'}
                margin={'auto'}
                marginTop={'3'}
              ></Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={5}>
              <Text
                fontWeight={400}
                fontSize={'18'}
                lineHeight={'21.6px'}
                color="black"
                paddingTop={5}
              >
                Balance
              </Text>
            </GridItem>

            <GridItem rowSpan={2} colSpan={1}>
              <Icon
                as={HelpOutlineIcon}
                color="#C4C4C4"
                margin={2}
                onClick={onOpen}
              />
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Body</ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <GridItem rowSpan={1} colSpan={5}>
              <Text
                fontWeight={700}
                fontSize={'30'}
                lineHeight={'26px'}
                color="black"
              >
                $27,223
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <Box
          width={310}
          height={100}
          borderRadius={15}
          border="1px"
          borderColor={'#F1F4F6'}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Grid
            height={'100%'}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box
                bg="#F6465D"
                height={'75%'}
                width={'20%'}
                borderRadius={'11'}
                margin={'auto'}
                marginTop={'3'}
              ></Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={5}>
              <HStack>
                <Text
                  fontWeight={400}
                  fontSize={'18'}
                  lineHeight={'21.6px'}
                  color="black"
                  paddingTop={5}
                >
                  PNL
                </Text>

                <Text
                  fontWeight={400}
                  fontSize={'12'}
                  lineHeight={'14.4px'}
                  color="grayLetter"
                  paddingTop={5}
                >
                  (Profit and Loss)
                </Text>
              </HStack>
            </GridItem>

            <GridItem rowSpan={2} colSpan={1}>
              <Icon
                as={HelpOutlineIcon}
                color="#C4C4C4"
                margin={2}
                onClick={onOpen}
              />
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Body</ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <GridItem rowSpan={1} colSpan={5}>
              <Text
                fontWeight={700}
                fontSize={'30'}
                lineHeight={'26.4px'}
                color="black"
              >
                -$465.73
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </HStack>

      <Text
        fontWeight={700}
        fontSize={'22'}
        lineHeight={'26.4px'}
        color="black"
        paddingTop={10}
      >
        Strategy assets
      </Text>

      <HStack paddingTop={10} gap={5}>
        <Box
          width={310}
          height={100}
          borderRadius={15}
          border="1px"
          borderColor={'#F1F4F6'}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Grid
            height={'100%'}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box marginTop={'24px'} marginLeft={'25px'}>
                <AvalancheLogo width={40} height={40} />
              </Box>
            </GridItem>

            <GridItem rowSpan={2} colSpan={1}>
              <Text
                fontWeight={700}
                fontSize={'18'}
                lineHeight={'21.6px'}
                color="black"
                marginTop={'35px'}
              >
                AVAX
              </Text>
            </GridItem>

            <GridItem rowSpan={2} colSpan={2}>
              <Stat margin={6}>
                <StatNumber
                  fontWeight={700}
                  fontSize={'18'}
                  lineHeight={'21.6px'}
                  color="#7A8AA0"
                >
                  $47.3
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  14.54%
                </StatHelpText>
              </Stat>
            </GridItem>
          </Grid>
        </Box>

        <Box
          width={310}
          height={100}
          borderRadius={15}
          border="1px"
          borderColor={'#F1F4F6'}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Grid
            height={'100%'}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box marginTop={'24px'} marginLeft={'25px'}>
                <AaveLogo width={40} height={40} />
              </Box>
            </GridItem>

            <GridItem rowSpan={2} colSpan={1}>
              <Text
                fontWeight={700}
                fontSize={'18'}
                lineHeight={'21.6px'}
                color="black"
                marginTop={'35px'}
              >
                AAVE
              </Text>
            </GridItem>

            <GridItem rowSpan={2} colSpan={2}>
              <Stat margin={6}>
                <StatNumber
                  fontWeight={700}
                  fontSize={'18'}
                  lineHeight={'21.6px'}
                  color="#7A8AA0"
                >
                  $345.670
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
            </GridItem>
          </Grid>
        </Box>
      </HStack>
    </Box>
  );
}

export default RecursiveFarming;
