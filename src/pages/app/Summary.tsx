import { Box, HStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAdapter } from '../../hooks/use-adapter';

function Summary() {
  const { adapter } = useAdapter();

  const [updatedDate, setUpdatedDate] = useState(new Date());
  const [deposits, setDeposits] = useState(0);
  const [depositsLoading, setDepositsLoading] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const deposits = async () => {
      const d = await adapter.getDeposits();
      console.log('deposits', d);

      const sum = d.reduce((s, deposit) => s + deposit.amount, 0);
      setDeposits(Number((sum / 1e18).toFixed(3)));
    };

    console.log('KEKEKEKE');
    deposits();
  }, []);

  return (
    <Box padding={10} width={'80%'}>
      <Text
        fontWeight={700}
        fontSize={'26'}
        lineHeight={'31.2px'}
        color="black"
      >
        Investment Summary 📈
      </Text>

      <Text
        fontWeight={400}
        fontSize={'16'}
        lineHeight={'19.2px'}
        letterSpacing={'1%'}
        color="grayLetter"
        paddingTop={3}
      >
        You have been investing for 420 days
      </Text>

      <Box
        marginTop={5}
        boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
        borderRadius={14}
      >
        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🟢
              </Text>

              <Text
                padding={3}
                fontWeight={400}
                fontSize={'20px'}
                lineHeight={'24px'}
                letterSpacing={'-3%'}
                color="#282828"
              >
                Your deposits
              </Text>

              <Text
                paddingTop={1}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'14.4px'}
                color="grayLetter"
                fontStyle={'oblique'}
              >
                (Last deposit three days ago)
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              ${deposits}
            </Text>
          </HStack>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🟢
              </Text>

              <Text
                padding={3}
                fontWeight={400}
                fontSize={'20'}
                lineHeight={'24px'}
                letterSpacing={'-3%'}
                color="#282828"
              >
                Rewards
              </Text>

              <Text
                paddingTop={1}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'14.4px'}
                color="grayLetter"
                fontStyle={'oblique'}
              >
                (Estimaded average 55.55% APY)
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              $1,723.33
            </Text>
          </HStack>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🔴
              </Text>

              <Text
                padding={3}
                fontWeight={400}
                fontSize={'20'}
                lineHeight={'24px'}
                letterSpacing={'-3%'}
                color="#282828"
              >
                Withdraws
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              -$555
            </Text>
          </HStack>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🔴
              </Text>

              <Text
                padding={3}
                fontWeight={400}
                fontSize={'20'}
                lineHeight={'24px'}
                letterSpacing={'-3%'}
                color="#282828"
              >
                Other charges
              </Text>

              <Text
                paddingTop={1}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'14.4px'}
                color="grayLetter"
                fontStyle={'oblique'}
              >
                (Operational/Administrative fees)
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              $0
            </Text>
          </HStack>
        </Box>

        <Box padding={2}>
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                💰
              </Text>

              <Text
                padding={3}
                fontWeight={400}
                fontSize={'20'}
                lineHeight={'24px'}
                letterSpacing={'-3%'}
                color="#282828"
              >
                Total balance
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              $26,655.62
            </Text>
          </HStack>
        </Box>
      </Box>

      <Text
        fontWeight={400}
        fontSize={'16'}
        lineHeight={'19.2px'}
        letterSpacing={'1%'}
        color="grayLetter"
        paddingTop={5}
        textAlign={'right'}
      >
        Updated at 11/05/2022
      </Text>
    </Box>
  );
}

export default Summary;
