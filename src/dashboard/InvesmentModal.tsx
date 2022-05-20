import React, { useState } from 'react';

import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { useMoralis } from 'react-moralis';

import { formatEther } from '@ethersproject/units';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ReactComponent as EthLogo } from '../assets/logos/eth-logo.svg';
import { ReactComponent as AvalancheLogo } from '../assets/logos/avalanche-logo.svg';
import { ReactComponent as DaiLogo } from '../assets/logos/dai-logo.svg';

import { getNativeToken } from '../utils/network';

type Props = {
  isOpen: any;
  onClose: any;
};

type Token = {
  symbol: string;
  balance: string;
  decimals: number;
};

function InvesmentModal({ isOpen, onClose }: Props) {
  const { user, Moralis } = useMoralis();

  const initialStrategy: string = 'Select Strategy';
  const initialToken: string = 'Select Token';
  const initialAmount: number = 0;
  const initialMaxAmount: string = '-';
  const initialTokensBalance: Token[] = [];

  const [strategy, setStrategy] = useState(initialStrategy);
  const [token, setToken] = useState(initialToken);
  const [amount, setAmount] = useState(initialAmount);
  const [maxAmount, setMaxAmount] = useState(initialMaxAmount);
  const [tokensBalance, setTokensBalance] = useState(initialTokensBalance);

  const handleStrategyChange = async (strategy: string) => {
    setStrategy(strategy);

    await getMaxTokenAmount();
  };

  const handleTokenChange = (token: string) => {
    setToken(token);

    setAmount(0);

    const tokenSimplified = tokensBalance.find(
      (t: Token) => t.symbol === token,
    );

    if (tokenSimplified !== undefined) {
      setMaxAmount(parseFloat(formatEther(tokenSimplified.balance)).toFixed(3));
    } else {
      setMaxAmount('0');
    }
  };

  const handleAmountChange = (event: any) => setAmount(event.target.value);

  const handleButtonMax = () => {
    setAmount(Number(maxAmount));
  };

  const resetStrategy = () => {
    setStrategy(initialStrategy);

    setToken(initialToken);

    setMaxAmount(initialMaxAmount);

    onClose();
  };

  const getMaxTokenAmount = async () => {
    await Moralis.enableWeb3();

    const chainId = await Moralis.getChainId();

    const nativeBalance = await Moralis.Web3API.account.getNativeBalance({
      chain: chainId as any,
      address: user!.attributes.ethAddress,
    });

    const tokensBalances = await Moralis.Web3API.account.getTokenBalances({
      chain: chainId as any,
      address: user!.attributes.ethAddress,
    });

    const tokensBalanceArray: Token[] = [];

    const nativeToken = {
      symbol: getNativeToken(chainId as string).symbol,
      balance: nativeBalance.balance,
      decimals: getNativeToken(chainId as string).decimals,
    };

    tokensBalanceArray.push(nativeToken);

    tokensBalances.forEach((token: any) => {
      const tokenSimplified: Token = {
        symbol: token.symbol,
        balance: token.balance,
        decimals: token.decimals,
      };

      tokensBalanceArray.push(tokenSimplified);
    });

    setTokensBalance(tokensBalanceArray);
  };

  return (
    <Modal isOpen={isOpen} onClose={resetStrategy} isCentered>
      <ModalOverlay />
      <ModalContent
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        borderRadius={'15px'}
      >
        <ModalHeader>Invest</ModalHeader>

        <Center>
          <Divider color={'#E1E1E0'} width={'90%'} />
        </Center>

        <ModalBody margin={'auto'}>
          <Text
            fontWeight={700}
            fontSize={'16px'}
            lineHeight={'18.75px'}
            letterSpacing="5%"
            color={'#282828'}
            paddingTop={3}
            paddingBottom={3}
          >
            Strategy
          </Text>

          {/* Menu for strategy */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={
                strategy === initialStrategy ? (
                  <ChevronDownIcon />
                ) : (
                  <ChevronUpIcon />
                )
              }
              width={'280px'}
              height={'60px'}
              boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
              borderRadius={'8px'}
              justifyContent="space-between"
            >
              <HStack>
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={strategy === initialStrategy ? '#666666' : 'black'}
                  padding={3}
                >
                  {strategy}
                </Text>
              </HStack>
            </MenuButton>
            <MenuList border={'0'} width={'280px'}>
              <MenuItem
                onClick={() => handleStrategyChange('Recursive Farming')}
              >
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={'black'}
                  padding={3}
                >
                  Recursive Farming
                </Text>
              </MenuItem>

              <MenuItem onClick={() => handleStrategyChange('Staking Farming')}>
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={'black'}
                  padding={3}
                >
                  Staking Farming
                </Text>
              </MenuItem>

              <MenuItem onClick={() => handleStrategyChange('Delta Neutral')}>
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={'black'}
                  padding={3}
                >
                  Delta Neutral
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Menu for tokens */}
          <Box display={strategy === initialStrategy ? 'none' : 'block'}>
            <Text
              fontWeight={700}
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={'#282828'}
              paddingTop={8}
              paddingBottom={3}
            >
              Token
            </Text>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  strategy === initialStrategy ? (
                    <ChevronDownIcon />
                  ) : (
                    <ChevronUpIcon />
                  )
                }
                width={'280px'}
                height={'60px'}
                boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
                borderRadius={'8px'}
              >
                <HStack>
                  <Box
                    display={token === 'ETH' ? 'block' : 'none'}
                    marginLeft={2}
                  >
                    <EthLogo width={25} height={25} />
                  </Box>

                  <Box display={token === 'AVAX' ? 'block' : 'none'}>
                    <AvalancheLogo width={25} height={25} />
                  </Box>

                  <Box display={token === 'DAI' ? 'block' : 'none'}>
                    <DaiLogo width={25} height={25} />
                  </Box>

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={token === initialToken ? '#666666' : 'black'}
                  >
                    {token}
                  </Text>
                </HStack>
              </MenuButton>
              <MenuList border={'0'} width={'280px'}>
                <MenuItem onClick={() => handleTokenChange('ETH')}>
                  <EthLogo width={25} height={25} />

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    ETH
                  </Text>
                </MenuItem>

                <MenuItem onClick={() => handleTokenChange('AVAX')}>
                  <AvalancheLogo width={25} height={25} />

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    AVAX
                  </Text>
                </MenuItem>

                <MenuItem onClick={() => handleTokenChange('DAI')}>
                  <DaiLogo width={25} height={25} />

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    DAI
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>

            <HStack justifyContent={'space-between'}>
              <Text
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'18.75px'}
                letterSpacing="5%"
                color={'#282828'}
                paddingTop={8}
                paddingBottom={3}
              >
                Amount
              </Text>

              <Text
                fontSize={'12px'}
                lineHeight={'14.06px'}
                color={'grayLetter'}
                paddingTop={8}
                paddingBottom={3}
              >
                Available: {maxAmount}
              </Text>
            </HStack>

            <InputGroup
              width={'280px'}
              height={'60px'}
              boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
              borderRadius={'8px'}
            >
              <Input
                type="number"
                border={'0'}
                margin={'auto'}
                height={'60px'}
                width={'70%'}
                focusBorderColor="white"
                onChange={handleAmountChange}
                value={amount}
              />

              <Button
                height={'24px'}
                border="1px"
                borderColor="primary"
                borderRadius={'53px'}
                margin={'auto'}
                marginRight={'10px'}
                width={'22%'}
                onClick={handleButtonMax}
              >
                <Text
                  fontWeight={400}
                  fontSize={'14px'}
                  lineHeight={'16.8px'}
                  color={'primary'}
                >
                  Max
                </Text>
              </Button>
            </InputGroup>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="primary"
            borderRadius={'70px'}
            boxShadow={'0px 2px 3px rgba(0, 0, 0, 0.15)'}
            isDisabled={
              !(
                strategy !== initialStrategy &&
                token !== initialToken &&
                amount > 0
              )
            }
          >
            <Text color={'white'}>Continue</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default InvesmentModal;
