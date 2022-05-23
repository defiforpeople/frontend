import React from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

import { Step, Steps, useSteps } from 'chakra-ui-steps';

import { useTranslation } from 'react-i18next';
import '../../i18n';

import IntroductionQuestions from './question/IntroductionQuestions';
import Question1 from './question/Question1';
import Question2 from './question/Question2';
import Question3 from './question/Question3';

function DashboardOnboarding() {
  const { t } = useTranslation('DashboardOnboarding');

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const steps = [
    { label: t('label1') },
    { label: t('label2') },
    { label: t('label3') },
  ];

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Center>
      <Box
        width={['100%', '50%', '50%']}
        marginTop={['50px', '100px', '100px%']}
      >
        <Box>
          <Steps
            labelOrientation="vertical"
            activeStep={activeStep}
            responsive={false}
            size={'sm'}
          >
            {steps.map(({ label }) => (
              <Step label={label} key={label}></Step>
            ))}
          </Steps>
        </Box>

        <Center>
          {currentQuestion === 0 ? (
            <IntroductionQuestions setQuestion={setCurrentQuestion} />
          ) : (
            ''
          )}
          {currentQuestion === 1 ? (
            <Question1 setQuestion={setCurrentQuestion} />
          ) : (
            ''
          )}
          {currentQuestion === 2 ? (
            <Question2
              question={currentQuestion}
              setQuestion={setCurrentQuestion}
            />
          ) : (
            ''
          )}
          {currentQuestion === 3 ? (
            <Question3 setQuestion={setCurrentQuestion} />
          ) : (
            ''
          )}
        </Center>

        {/* <Center>
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
      </Center> */}
      </Box>
    </Center>
  );
}

export default DashboardOnboarding;
