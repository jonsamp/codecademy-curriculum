// reg ex test
const passedString = 'printNumsAndStrings\\((\'|")';
const passedNumber = 'printNumsAndStrings\\(\\d';
const variationOne = `${passedString}.*${passedNumber}`;
const variationTwo = `${passedNumber}.*${passedString}`;

const didPass = Components.CodeEditor.codeContains(
  'index.ts',
  new RegExp(`${variationOne}|${variationTwo}`, 's')
);

if (didPass) {
  return { pass: true };
}

return {
  pass: false,
  errors: {
    friendly:
      'Did you call `printNumsAndStrings()` twice, once with a string and again with a number as its argument?',
    component: 'PersistentCodeEditor',
  },
};

// Validate multiple comands
const validCommands = ['tsc index.ts', 'node index.js'];
const wroteCode = Components.CodeEditor.codeContains(
  'index.ts',
  /typeof\s+value\s+(==|===)\s+('|")number('|")/
);
const ranValidCommand = Components.Terminal.didRunOneOf(validCommands);
const ranCommands = Components.Terminal.ranOneOfWithOutput(validCommands, '42');

if (!wroteCode) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you write a type guard to check if `value` is a number?',
      component: 'PersistentCodeEditor',
    },
  };
} else {
  if (ranCommands) {
    return {
      pass: true,
    };
  }

  if (ranValidCommand) {
    return {
      pass: false,
      passive: true,
    };
  }

  return {
    pass: false,
    errors: {
      friendly: `Did you run ${validCommands.join(' or ')} in the terminal?`,
      component: 'Terminal',
    },
  };
}

// listings: (string | number)[]

const validCommands = ['tsc index.ts'];
const declaredUnion = Components.CodeEditor.codeContains(
  'index.ts',
  /(event\:\s+\(Like\s+\|\s+Share\)\[\])|(event\:\s+\(Share\s+\|\s+Like\)\[\])/
);
const ranCommandWithSuccess = Components.Terminal.didRunOneOf(validCommands, 0);

if (!declaredUnion) {
  return {
    pass: false,
    errors: {
      friendly:
        'Did you declare a union with `string` and `number` as the type for the `listings` parameter?',
      component: 'PersistentCodeEditor',
    },
  };
}

if (!ranCommandWithSuccess) {
  return {
    pass: false,
    errors: {
      friendly: `Did you run ${validCommands.join(' or ')} in the terminal?`,
      component: 'Terminal',
    },
  };
}

return {
  pass: true,
};


// function downloadStatus(status: 'idle' | 'downloading' | 'complete') {

const functionDeclared = Components.CodeEditor.codeContains('index.ts', /(function\s+downloadStatus\()|(const downloadStatus\s+=\s+\()/

function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const permutations = permute(['idle', 'downloading', 'complete'])

const unionPermutations = permutations.map(permuration => {
  const members = permuration.map(member => `('|"|\`)${member}('|"|\`)`)
  const unionedMembers =  members.join('\|');
  return `(${unionedMembers})`
})

const declaredUnion = Components.CodeEditor.codeContains(
  'index.ts',
  new RegExp(`${unionPermutations.join('\|')}`)
);

if (!functionDeclared) {
  return {
    pass: false,
    errors: {
      friendly:
        'Did you declare a function named `downloadStatus()`?',
      component: 'PersistentCodeEditor',
    },
  };
}

if (!declaredUnion) {
  return {
    pass: false,
    errors: {
      friendly:
        'Did you declare a union with three type members: `\'idle\'`, `\'downloading\'`, and `\'complete\'`?',
      component: 'PersistentCodeEditor',
    },
  };
}

return { pass: true };


///

const calledConsoleLogs = Components.CodeEditor.codeContains('index.ts', /(console\.log.*console\.log.*console\.log)/s
const wroteConditionals = Components.CodeEditor.codeContains('index.ts', /(if\s+\(.*if\s+\(.*if\s+\()/s

if (!wroteConditionals) {
  return {
    pass: false,
    errors: {
      friendly:
        'Did you write three conditionals?',
      component: 'PersistentCodeEditor',
    },
  };
}

if (!calledConsoleLogs) {
  return {
    pass: false,
    errors: {
      friendly:
        'Did you call `console.log()` in three places?',
      component: 'PersistentCodeEditor',
    },
  };
}

return { pass: true };


////

downloadStatus\(('|"|`)idle'\)

const calledConsoleLogs = Components.CodeEditor.codeContains('index.ts', /(downloadStatus\(('|"|`)idle('|"|`)\))|(downloadStatus\(('|"|`)downloading('|"|`)\))|(downloadStatus\(('|"|`)complete('|"|`)\))/);

const ranTsc = Components.Terminal.didRunCommand('tsc index.ts', 0);
const ranNode = Components.Terminal.didRunCommand('node index.js', 0);

if (ranTsc && ranNode) {
  return {
    pass: true
  };
}

return {
  pass: false,
  errors: {
    friendly: `Did you run tsc index.ts and node index.js in the terminal?`,
    component: 'Terminal'
  }
};






const wroteCode = Components.CodeEditor.codeContains('index.ts', /typeof\s+value\s+(==|===)\s+('|"|`)string('|"|`)/);


if (!wroteCode) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you write a type guard to check if `value` is a string?',
      component: 'PersistentCodeEditor'
    }
  }
}

return { pass: true }





const validCommands = ['tsc index.ts', 'node index.js'];
const ranValidCommand = Components.Terminal.didRunOneOf(validCommands);
const ranCommands = Components.Terminal.ranOneOfWithOutput(validCommands, 'hiya');

if (ranCommands) {
  return {
    pass: true
  };
}

if (ranValidCommand) {
  return {
    pass: false,
    passive: true
  };
}

return {
  pass: false,
  errors: {
    friendly: `Did you run ${validCommands.join(' or ')} in the terminal?`,
    component: 'Terminal'
  }
};