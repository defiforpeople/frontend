// Return array started with 'Hoy' and finish with 'periods' and of large periods
function calculateInvesmentLabel(periods: number) {
  const labels = [];

  for (let index = 0; index < periods + 1; index++) {
    if (index === 0) {
      labels.push('Hoy');
      continue;
    }

    if (index === periods) {
      labels.push(`${periods} años`);
      continue;
    }

    labels.push('');
  }
  return labels;
}

// Return array started with initialValue and complete with monthlyAmount and of large periods
function calculateInvesmentValues(
  periods: number,
  initialValue: number,
  monthlyAmount: number,
) {
  const values = [];

  for (let index = 0; index < periods + 1; index++) {
    if (index === 0) {
      values.push(initialValue);
      continue;
    }

    values.push(values[index - 1] + monthlyAmount * 12);
  }

  return values;
}

function calculateInvesment(
  periods: number,
  initialValue: number,
  monthlyAmount: number,
) {
  console.log(`periods: ${periods}`);
  console.log(`initialValue: ${initialValue}`);
  console.log(`monthlyAmount: ${monthlyAmount}`);

  const labels = calculateInvesmentLabel(periods);

  const invested = calculateInvesmentValues(
    periods,
    initialValue,
    monthlyAmount,
  );

  const output = {
    labels: labels,
    invested: invested,
  };

  console.log(output);

  return output;
}

export default calculateInvesment;
