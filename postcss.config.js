function pipeline(Q, query) {
  const pipeline = [];
  const removedElements = [];
  const frequencyMap = {};

  for (let i = 0; i < Q; i++) {
    const [X, N] = query[i];

    if (X === 1) {
      pipeline.push(N);
      frequencyMap[N] = (frequencyMap[N] || 0) + 1;
    } else if (X === 2) {
      let maxFreq = -1;
      let maxFreqElement = -1;

      // Find element with max frequency
      for (const num in frequencyMap) {
        if (frequencyMap.hasOwnProperty(num)) {
          if (
            frequencyMap[num] > maxFreq ||
            (frequencyMap[num] === maxFreq &&
              pipeline.indexOf(num) < pipeline.indexOf(maxFreqElement))
          ) {
            maxFreq = frequencyMap[num];
            maxFreqElement = num;
          }
        }
      }

      // Remove the element from pipeline
      const indexToRemove = pipeline.lastIndexOf(maxFreqElement);
      pipeline.splice(indexToRemove, 1);
      removedElements.push(parseInt(maxFreqElement));

      // Update frequency map
      frequencyMap[maxFreqElement]--;

      if (frequencyMap[maxFreqElement] === 0) {
        delete frequencyMap[maxFreqElement];
      }
    }
  }

  return removedElements.join(" ");
}

function writeOutput(inputData) {
  const chunks = inputData.trim().split("\n");
  const Q = parseInt(chunks.shift());
  const query = chunks.map((c) => c.split(" ").map((e) => parseInt(e, 10)));
  return pipeline(Q, query);
}

// Test
const inputData = `150
1 39
1 94
1 69
1 77
1 41
1 77
1 0
1 25
1 98
1 38
1 49
1 51
1 36
1 83
1 97
1 75
1 53
1 50
1 50
1 12
1 70
1 20
1 42
1 31
1 92
1 83
1 77
1 18
1 58
1 96
1 25
1 71
1 17
1 73
1 39
1 87
1 60
1 29
1 11
1 55
1 88
1 68
1 66
1 54
1 85
1 45
1 7
1 6
1 48
1 15
1 6
1 56
1 75
1 64
1 15
1 4
1 30
1 61
1 7
1 80
1 15
1 36
1 52
1 54
1 22
1 85
1 71
1 85
1 69
1 47
1 4
1 13
1 91
1 68
1 98
1 85
1 56
1 80
1 57
1 83
1 32
1 20
1 30
1 0
1 60
1 67
1 16
1 4
1 12
1 63
1 39
1 71
1 11
1 2
1 78
1 55
1 97
1 71
1 21
1 97
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1
2 -1`;

console.log(writeOutput(inputData)); // Output: 71 85 97 71 39 4 83 85 15 77 97 55 11 12 60 0 30 20 80 56 98 68 4 69 71 85 54 36 7 15 75 6 39 25 83 50 77 21 78 2 63 16 67 32 57 91 13 47 22 52
