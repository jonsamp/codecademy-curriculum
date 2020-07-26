const checks = [
  {
    regex: /(((const|let|var)\s+downloadStatus\s*=\s*\(\s*status.*\s*\)\s*=>)|((const|let|var)\s+downloadStatus\s*=\s*function\s*\(\s*status.*\s*\))|(function\s+downloadStatus\s*\(\s*status.*\s*\)))/,
    msg: 'Did you call `downloadStatus()` with a valid argument?',
  },
];

for (let i = 0; i < checks.length; i++) {
  if (!Components.CodeEditor.codeContains('index.ts', checks[i].regex)) {
    return {
      pass: false,
      errors: {
        friendly: checks[i].msg,
        component: 'PersistentCodeEditor',
      },
    };
  }
}

return { pass: true };

//// run tsc

// In the command line, run `tsc` to compile your code.

if (!Components.Terminal.ranWithExitCode('tsc', 0)) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you run `tsc` in the terminal? It should compile successfully without any errors.',
      component: 'Terminal',
    },
  };
}

if (Components.OutputTerminal.hasError(/[^]+/)) {
  return {
    pass: false,
    errors: {
      friendly: 'Looks like you have an error. Double check your syntax.',
      component: 'Terminal',
    },
  };
}

return { pass: true }


// run node index.js

// Run `node index.js` to execute your compiled code. You should see the custom log messages from the `printNumsAndStrings()` function as the output.

if (!Components.Terminal.ranWithOutput('node index.js', 'LOG::')) {
  return {
    pass: false,
    errors: {
      friendly: 'Did you run `node index.js`? It should print out the content of both `printNumsAndStrings()` calls.',
      component: 'Terminal',
    },
  };
}

return { pass: true };


/// ts config

{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs"
  },
  "include": ["**/*.ts"]
}
