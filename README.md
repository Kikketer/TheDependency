# The Dependency (The Library)

This library depends on a peerDependency of "the other dep".  When this one is built it does not include any code from "the other dep" because it's been included in the "externals" array:

```
externals: ['react', 'the-other-dep']
```

Also to makes sure this works, the two external dependencies are listed as `peerDependencies` in the package.json.