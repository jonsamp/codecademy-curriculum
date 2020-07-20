const wroteCode = Components.CodeEditor.codeContains(
  'index.ts',
  /typeof\s+value\s+(==|===)\s+('|"|`)number('|"|`)/
);

if (!wroteCode) {
  return {
    pass: false,
    errors: {
      friendly:
        "Did you write a type guard to check if `value` is a `'number'`?",
      component: 'PersistentCodeEditor',
    },
  };
}

return { pass: true };

const validCommands = ['tsc index.ts', 'node index.js'];
const ranValidCommand = Components.Terminal.didRunOneOf(validCommands);
const ranCommands = Components.Terminal.ranOneOfWithOutput(
  validCommands,
  '42.00'
);

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

////

const validCommands = ['tsc index.ts'];
const declaredVariable = Components.CodeEditor.codeContains(
  'index.ts',
  /(const|let|var) userData/
);
const declaredUnion = Components.CodeEditor.codeContains(
  'index.ts',
  /(User\s+\|\s+string)|(string\s+\|\s+User)/
);
const calledCreateUser = Components.CodeEditor.codeContains(
  'index.ts',
  /createUser\(\).*createUser\(\)/s
);

const ranCommandWithSuccess = Components.Terminal.didRunOneOf(validCommands, 0);

if (!declaredVariable) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you declare a variable name `userData`?',
      component: 'PersistentCodeEditor',
    },
  };
}

if (!declaredUnion) {
  return {
    pass: false,
    errors: {
      friendly:
        'Did you declare a union with `User` and `string` as the type for `userData`?',
      component: 'PersistentCodeEditor',
    },
  };
}

if (!calledCreateUser) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you call `createUser()`?',
      component: 'PersistentCodeEditor',
    },
  };
}

if (!ranCommandWithSuccess) {
  return {
    pass: false,
    errors: {
      friendly: `Were you able to run ${validCommands.join(
        ' or '
      )} in the terminal without error?`,
      component: 'Terminal',
    },
  };
}

return {
  pass: true,
};

////

const ranTsc = Components.Terminal.didRunCommand('tsc index.ts', 0);

if (ranTsc) {
  return {
    pass: true,
  };
}

return {
  pass: false,
  errors: {
    friendly: 'Did you run `tsc index.ts` in the terminal?',
    component: 'Terminal',
  },
};

////

// Now run `tsc index.ts` in the terminal to make sure there are no type errors.

const ranTsc = Components.Terminal.didRunCommand('tsc index.ts', 0);

if (ranTsc) {
  return {
    pass: true,
  };
}

return {
  pass: false,
  errors: {
    friendly: 'Did you run `tsc index.ts` in the terminal?',
    component: 'Terminal',
  },
};



We can write three conditionals to handle each state of our download button. That code might look like this:

```ts
function downloadStatus(status: 'idle' | 'downloading' | 'complete') {
  if (status === 'idle') {
    console.log('Download');
  }

  if (status === 'downloading') {
    console.log('Downloading...');
  }

  if (status === 'complete') {
    console.log('Your download is complete!');
  }
}
```



const calledFunction = Components.CodeEditor.codeContains('index.ts', /(downloadStatus\(('|"|`)idle('|"|`)\))|(downloadStatus\(('|"|`)downloading('|"|`)\))|(downloadStatus\(('|"|`)complete('|"|`)\))/);


if (!calledFunction) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you call `downloadStatus` with a valid argument?',
      component: 'PersistentCodeEditor'
    }
  };
}

return { pass: true };






const ranTsc = Components.Terminal.didRunCommand('tsc index.ts', 0);
const ranNode = Components.Terminal.didRunCommand('node index.js', 0);


if (ranTsc && ranNode) {
  return {
    pass: true
  };
}

if (ranTsc && !ranNode) {
  return {
    pass: false,
    passive: true
  }
}

return {
  pass: false,
  errors: {
    friendly: `Did you run tsc index.ts and node index.js in the terminal?`,
    component: 'Terminal'
  }
};


type Bike {
  pedal: () => void;
  getDirections: () => void;
}

type Subway {
  stand: () => void;
  __~getDirections: () => void~__;
}

function travel(method: Bike | Subway) {
  return method.__~getDirections~__();
}


