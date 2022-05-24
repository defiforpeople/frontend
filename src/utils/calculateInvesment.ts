// Return array started with 'Hoy' and finish with 'periods' and of large periods
function calculateInvesmentLabel(periods: number) {
  const labels = [];
  for (let index = 0; index < periods; index++) {
    if (index === 0) {
      labels.push('Hoy');
      continue;
    }

    if (index === periods - 1) {
      labels.push(`${periods} años`);
      continue;
    }

    labels.push('');
  }
  return labels;
}

// return an array
function calculateInvesment(periods: number) {
  console.log(periods);

  const labels = calculateInvesmentLabel(periods);

  const output = {
    labels: labels,
  };

  console.log(output);

  return output;
}

export default calculateInvesment;
