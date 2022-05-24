import React from 'react';

import { Box, Button, Center, Text } from '@chakra-ui/react';

import { Step, Steps, useSteps } from 'chakra-ui-steps';

import { useTranslation } from 'react-i18next';
import '../../i18n';

import IntroductionQuestions from './question/IntroductionQuestions';
import Question1 from './question/Question1';
import Question2 from './question/Question2';
import Question3 from './question/Question3';
import Simulate from './simulate/Simulate';
import SimulationChart from './simulate/SimulationChart';

function DashboardOnboarding() {
  const { t } = useTranslation('DashboardOnboarding');

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [simulateState, setSimulateState] = React.useState('notActive');

  const [simulationData, setSimulationData] = React.useState({});

  const steps = [
    { label: t('label1') },
    { label: t('label2') },
    { label: t('label3') },
  ];

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const skip = () => {
    nextStep();
    setSimulateState('fistEdit');
  };

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

        <Center
          display={
            simulateState === 'fistEdit' || simulateState === 'simulate'
              ? 'none'
              : 'block'
          }
        >
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
            <Question3
              question={currentQuestion}
              setQuestion={setCurrentQuestion}
            />
          ) : (
            ''
          )}

          <Center marginTop={'30px'}>
            <Button
              size="sm"
              onClick={skip}
              bg="primary"
              boxShadow="0px 2px 3px rgba(0, 0, 0, 0.15)"
              borderRadius={'10px'}
            >
              <Text color={'white'}>Skip</Text>
            </Button>
          </Center>
        </Center>

        <Center>
          {simulateState === 'fistEdit' ? (
            <Simulate
              setSimulateState={setSimulateState}
              setSimulationData={setSimulationData}
            />
          ) : (
            ''
          )}
        </Center>

        <Center width={'100%'}>
          {simulateState === 'simulate' ? (
            <SimulationChart simulationData={simulationData} periods={4} />
          ) : (
            ' '
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