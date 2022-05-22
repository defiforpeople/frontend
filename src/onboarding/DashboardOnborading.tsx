import React from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

import { Step, Steps, useSteps } from 'chakra-ui-steps';

import { useTranslation } from 'react-i18next';
import '../i18n';

function DashboardOnboarding() {
  const { t } = useTranslation('DashboardOnboarding');

  const steps = [
    { label: t('label1') },
    { label: t('label2') },
    { label: t('label3') },
  ];

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Box width={['100%', '50%', '50%']} marginTop={['50px', '100px', '100px%']}>
      <Box>
        <Steps
          labelOrientation="vertical"
          activeStep={activeStep}
          responsive={false}
          size={'sm'}
        >
          {steps.map(({ label }) => (
            <Step label={label} key={label}>
              {/* {content} */}
            </Step>
          ))}
        </Steps>
      </Box>

      <Center>
        {activeStep === steps.length ? (
          <Flex p={4}>
            <Button mx="auto" size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex margin={'auto'} marginTop={'50px'}>
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep} bg="primary">
              <Text color={'white'}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Text>
            </Button>
          </Flex>
        )}
      </Center>
    </Box>
  );
}

export default DashboardOnboarding;
