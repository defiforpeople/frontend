import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';

import { ReactComponent as PolygonLogo } from '../../../../assets/logos/polygon-logo.svg';
import { FaWallet, FaRegMoneyBillAlt } from 'react-icons/fa';
import { AiOutlineSwap } from 'react-icons/ai';

import { FaMoneyBillAlt } from 'react-icons/fa';

import { useAdapter } from '../../../../hooks/use-adapter';

import WithdrawAaveModal from '../lending/WithdrawAaveModal';

function BalanceUni() {
  const { adapter } = useAdapter();

  const [nativeBalance, setNativeBalance] = useState(0);

  const [token1Balance, setToken1Balance] = useState(0);

  const [token2Balance, setToken2Balance] = useState(0);

  const [aaveBalance, setAaveBalance] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);

      const nativeToken = await adapter.getNativeToken();

      setNativeBalance(Number((Number(nativeToken.balance) / 1e18).toFixed(3)));

      const tokens = await adapter.getTokens();

      const tokenWMATIC = tokens.find((t: any) => t.symbol === 'WMATIC');

      const tokenWETH = tokens.find((t: any) => t.symbol === 'WETH');

      setToken1Balance(
        Number((Number(tokenWMATIC?.balance) / 1e18).toFixed(3)),
      );

      setToken2Balance(Number((Number(tokenWETH?.balance) / 1e18).toFixed(3)));

      const tokensInAave = await adapter.getBalanceAave();

      setAaveBalance(tokensInAave);

      setIsLoading(false);
    };

    fetchProfile();
  }, [adapter]);

  return (
    <Box>
      <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
        Your balance
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <HStack>
            <FaWallet size={20} color="#7209B7" />
            <Text
              fontSize={30}
              color={'third'}
              fontWeight={700}
              letterSpacing={'2px'}
            >
              Wallet
            </Text>
          </HStack>
          <TableContainer>
            <Table variant="striped" colorScheme="purple">
              <Thead>
                <Tr>
                  <Th>Assets</Th>
                  <Th isNumeric>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <HStack>
                      <PolygonLogo width={22} height={22} />
                      <Text fontSize={14} paddingLeft={2}>
                        MATIC
                      </Text>
                    </HStack>
                  </Td>
                  <Td isNumeric>
                    {isLoading ? <Spinner color="third" /> : nativeBalance}
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <HStack>
                      <Image src="./frontend/weth-logo.png" width={'12%'} />
                      <Text fontSize={14}>WETH</Text>
                    </HStack>
                  </Td>
                  <Td isNumeric>
                    {isLoading ? <Spinner color="third" /> : token2Balance}
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <HStack>
                      <Image src="./frontend/wmatic-logo.png" width={'15%'} />
                      <Text fontSize={14}>WMATIC</Text>
                    </HStack>
                  </Td>
                  <Td isNumeric>
                    {isLoading ? <Spinner color="third" /> : token1Balance}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
          <HStack>
            <FaMoneyBillAlt size={30} color="#F72585" />
            <AiOutlineSwap size={30} color="#F72585" />
            <FaRegMoneyBillAlt size={30} color="#F72585" />

            <Text
              fontSize={30}
              color={'primary'}
              fontWeight={700}
              letterSpacing={'2px'}
            >
              Pool
            </Text>
          </HStack>

          <TableContainer>
            <Table variant="striped" colorScheme="pink">
              <Thead>
                <Tr>
                  <Th>Assets</Th>
                  <Th isNumeric>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <HStack>
                      <Image src="./frontend/weth-logo.png" width={'15%'} />
                      <Text fontSize={14}>WETH</Text>
                    </HStack>
                  </Td>
                  <Td isNumeric>
                    {isLoading ? <Spinner color="primary" /> : 'Not available'}
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <HStack>
                      <Image src="./frontend/wmatic-logo.png" width={'15%'} />
                      <Text fontSize={14}>WMATIC</Text>
                    </HStack>
                  </Td>
                  <Td isNumeric>
                    {isLoading ? <Spinner color="primary" /> : 'Not available'}
                  </Td>
                </Tr>

                <Tr>
                  <Td colSpan={2}>
                    <Center>
                      <HStack>
                        <Button color={'white'} bg="sixth" onClick={onOpen}>
                          Claim
                        </Button>

                        <Button color={'white'} bg="sixth" onClick={onOpen}>
                          Collect all fees
                        </Button>
                      </HStack>
                    </Center>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </SimpleGrid>

      <Text paddingTop={5} fontSize={14} color="grey">
        * We only show tokens used in this strategy dApp
      </Text>

      <WithdrawAaveModal
        isOpen={isOpen}
        onClose={onClose}
        tokenBalance={aaveBalance}
      />
    </Box>
  );
}

export default BalanceUni;
