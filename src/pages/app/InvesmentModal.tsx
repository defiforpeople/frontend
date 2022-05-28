import { useState } from 'react';

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

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ReactComponent as EthLogo } from '../../assets/logos/eth-logo.svg';
import { ReactComponent as AvalancheLogo } from '../../assets/logos/avalanche-logo.svg';
import { ReactComponent as DaiLogo } from '../../assets/logos/dai-logo.svg';

import { useTranslation } from 'react-i18next';
import '../../i18n';

import { useAdapter } from '../../hooks/use-adapter';
import { ChainName, Deposit, TokenSymbol } from '../../utils/network-manager';
import { useNetworkManager } from '../../hooks/use-manager';

import { Spinner } from '@chakra-ui/react';

const { REACT_APP_STRATEGY_ADDRESS } = process.env;

type Props = {
  isOpen: any;
  onClose: any;
};

function InvesmentModal({ isOpen, onClose }: Props) {
  const { manager, setNetwork } = useNetworkManager();
  const { adapter } = useAdapter();

  const { t } = useTranslation('InvesmentModal');

  const initialStrategy: string = t('selectStrategy');
  const initialToken: string = t('selectToken');
  const initialAmount: number = 0;
  // const initialTokensBalance: Token | NativeToken[] = [];

  const [strategy, setStrategy] = useState(initialStrategy);
  const [symbol, setSymbol] = useState('weth' as TokenSymbol);
  const [text, setText] = useState(initialToken);
  const [amount, setAmount] = useState(initialAmount);
  const [maxAmount, setMaxAmount] = useState(initialAmount);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  // const [tokensBalance, setTextsBalance] = useState(initialTokensBalance);

  const networks = manager.listNetworks();

  const handleStrategyChange = async (strategy: string) => {
    setStrategy(strategy);
  };

  const handleTokenChange = async (
    chainName: ChainName,
    symbol: TokenSymbol,
  ) => {
    const text = `${symbol.toUpperCase()} (${networks[chainName].name})`;

    setText(text);
    setAmount(0);
    setMaxAmount(0);
    setSymbol(symbol);

    await manager.switchNetwork(chainName);
    setNetwork(networks[chainName]);

    setBalanceLoading(true);
    const nativeToken = await adapter.getNativeToken();
    if (!nativeToken || nativeToken.balance === 0) {
      setMaxAmount(0);
      setBalanceLoading(false);
      return;
    }

    setBalanceLoading(false);
    const amount = (nativeToken.balance! / 1e18).toFixed(3);
    setMaxAmount(Number(amount));
  };

  const handleAmountChange = (event: any) => setAmount(event.target.value);

  const handleButtonMax = () => {
    setAmount(Number(maxAmount));
  };

  const resetStrategy = () => {
    setStrategy(initialStrategy);
    setText(initialToken);
    setMaxAmount(initialAmount);
    setShowAlertSuccess(false);
    setShowAlertConfirm(false);
    setShowAlertError(false);
    setTransactionLoading(false);
    setSymbol('weth');

    onClose();
  };

  const handleContinueButton = async () => {
    setTransactionLoading(true);
    setShowAlertError(false);
    setShowAlertConfirm(false);
    setShowAlertSuccess(false);

    try {
      const approveDeposit = await adapter.approveDeposit(amount, symbol);
      setShowAlertConfirm(true);
      const approveTx = await approveDeposit.approveTx!.wait();
      console.log('approveTx');
      console.log('approveTx');
      console.log('approveTx');
      console.log('approveTx');
      console.log(approveTx);

      setShowAlertConfirm(false);
      const deposit = await adapter.deposit(approveDeposit);
      setShowAlertConfirm(true);
      const depositTx = await deposit.depositTx!.wait();
      console.log('depositTx');
      console.log('depositTx');
      console.log('depositTx');
      console.log(depositTx);

      setTransactionLoading(false);
      setShowAlertConfirm(false);
      setShowAlertSuccess(true);
    } catch (err) {
      console.error(err);
      setTransactionLoading(false);
      setShowAlertConfirm(false);
      setShowAlertError(true);
      setShowAlertSuccess(false);
    }
  };

  const handleExplorerButton = async () => {
    const { chainName } = adapter.network;
    const { strategies } = networks[chainName];
    const { address } = strategies['recursive_farming'];

    window.open(`https://testnet.snowtrace.io/address/${address}`, '_blank');

    resetStrategy();
  };

  return (
    <Modal isOpen={isOpen} onClose={resetStrategy} isCentered>
      <ModalOverlay />
      <ModalContent
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        borderRadius={'15px'}
      >
        <ModalHeader>{t('title')}</ModalHeader>

        <Center>
          <Divider color={'#E1E1E0'} width={'90%'} />
        </Center>

        <ModalBody margin={'auto'}>
          {/* Menu for strategy */}
          {!showAlertSuccess ? (
            <>
              <Text
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'18.75px'}
                letterSpacing="5%"
                color={'#282828'}
                paddingTop={3}
                paddingBottom={3}
              >
                {t('strategy')}
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

                  <MenuItem>
                    <Text
                      fontSize={'16px'}
                      lineHeight={'18.75px'}
                      letterSpacing="5%"
                      color={'#757575'}
                      padding={3}
                    >
                      Staking Farming (soon)
                    </Text>
                  </MenuItem>

                  <MenuItem>
                    <Text
                      fontSize={'16px'}
                      lineHeight={'18.75px'}
                      letterSpacing="5%"
                      color={'#757575'}
                      padding={3}
                    >
                      Delta Neutral (soon)
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
                        display={text === 'ETH' ? 'block' : 'none'}
                        marginLeft={2}
                      >
                        <EthLogo width={25} height={25} />
                      </Box>

                      <Box display={text === 'AVAX' ? 'block' : 'none'}>
                        <AvalancheLogo width={25} height={25} />
                      </Box>

                      <Box display={text === 'DAI' ? 'block' : 'none'}>
                        <DaiLogo width={25} height={25} />
                      </Box>

                      <Text
                        fontSize={'16px'}
                        lineHeight={'18.75px'}
                        letterSpacing="5%"
                        color={text === initialToken ? '#666666' : 'black'}
                      >
                        {text}
                      </Text>
                    </HStack>
                  </MenuButton>
                  <MenuList border={'0'} width={'280px'}>
                    <MenuItem
                      onClick={() => handleTokenChange('rinkeby', 'weth')}
                    >
                      <EthLogo width={25} height={25} />

                      <Text
                        fontSize={'16px'}
                        lineHeight={'18.75px'}
                        letterSpacing="5%"
                        color={'black'}
                        padding={3}
                      >
                        {networks['rinkeby'].nativeToken.symbol.toUpperCase()} (
                        {networks['rinkeby'].name})
                      </Text>
                    </MenuItem>

                    <MenuItem
                    // onClick={async () => await handleTokenChange('avalanche', 'wavax')}
                    >
                      <AvalancheLogo width={25} height={25} />

                      <Text
                        fontSize={'16px'}
                        lineHeight={'18.75px'}
                        letterSpacing="5%"
                        color={'#757575'}
                        padding={3}
                      >
                        {networks['avalanche'].nativeToken.symbol.toUpperCase()}{' '}
                        ({networks['avalanche'].name})
                      </Text>
                    </MenuItem>

                    <MenuItem
                    // onClick={async () =>
                    //   await handleTokenChange('avalanche testnet', 'wavax')
                    // }
                    >
                      <AvalancheLogo width={25} height={25} />

                      <Text
                        fontSize={'16px'}
                        lineHeight={'18.75px'}
                        letterSpacing="5%"
                        color={'#757575'}
                        padding={3}
                      >
                        {networks[
                          'avalanche testnet'
                        ].nativeToken.symbol.toUpperCase()}{' '}
                        ({networks['avalanche testnet'].name})
                      </Text>
                    </MenuItem>

                    {/* 
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
                </MenuItem> */}
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
                    {t('amount')}
                  </Text>

                  {!balanceLoading ? (
                    <Text
                      fontSize={'12px'}
                      lineHeight={'14.06px'}
                      color={'grayLetter'}
                      paddingTop={8}
                      paddingBottom={3}
                    >
                      {t('available')}: {maxAmount}
                    </Text>
                  ) : (
                    <Spinner marginTop={25} color="#E33E84" size={'xs'} />
                  )}
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
                    disabled={balanceLoading}
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
            </>
          ) : (
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              backgroundColor={'white'}
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Investment submitted
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                The transaction has been sended, it will be reflected in your
                dashboard soon. This may take a few moments to process.
              </AlertDescription>
            </Alert>
          )}
        </ModalBody>

        <ModalFooter flexDirection={'column'} paddingBottom={'25px'}>
          {showAlertError ? (
            <Alert marginBottom={5} status="error">
              <AlertIcon />
              <AlertTitle>The transaction has failed</AlertTitle>
            </Alert>
          ) : null}

          {showAlertConfirm ? (
            <Alert marginBottom={5} status="info">
              <AlertIcon />
              <AlertTitle fontWeight={'light'}>
                The transaction is being processed.
              </AlertTitle>
            </Alert>
          ) : null}

          {!showAlertSuccess ? (
            <Button
              bg="primary"
              borderRadius={'70px'}
              boxShadow={'0px 2px 3px rgba(0, 0, 0, 0.15)'}
              isDisabled={
                !(
                  strategy !== initialStrategy &&
                  text !== initialToken &&
                  amount > 0 &&
                  amount <= Number(maxAmount)
                ) || transactionLoading
              }
              onClick={handleContinueButton}
            >
              {!transactionLoading ? (
                <Text color={'white'}>{t('continue')}</Text>
              ) : (
                <Spinner color="white" size={'xs'} />
              )}
            </Button>
          ) : (
            <Box
              width={'100%'}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-around'}
            >
              <Button
                bg="primary"
                borderRadius={'70px'}
                boxShadow={'0px 2px 3px rgba(0, 0, 0, 0.15)'}
                onClick={resetStrategy}
                width={150}
              >
                <Text color={'white'}>Close</Text>
              </Button>
              <Button
                bg="white"
                borderRadius={'70px'}
                boxShadow={'0px 2px 3px rgba(0, 0, 0, 0.15)'}
                onClick={handleExplorerButton}
                width={150}
              >
                <Text color={'primary'}>View on Explorer</Text>
              </Button>
            </Box>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default InvesmentModal;
