# UNIAL

vite based on uni-app typescript plan

### directions

Because AutoImport.  
Hooks of `uni-app` `vue` can be used globally without import.  
UNIAL's Unique Hooks `request` `useStore` `useRoute` `useRouter` `onMountedAL` `onUnmountedAL` `onScrollAL` can also be used as.

### format

For plan Use `TypeScript` `ESLint` `Prettier` to format UNIAL

For git use `husky` `lint-staged` to format commit and code

### initialization

`yarn` `node 16.10.0`

### develop

`yarn dev:weixin`
`yarn dev:app`
`yarn dev:android`
`yarn dev:ios`
`yarn dev:h5`

### build

`yarn build:weixin`
`yarn build:app`
`yarn build:android`
`yarn build:ios`
`yarn build:h5`

### request

Already integrated interception

`request.get(url,params,config)`
`request.post(url,params,config)`
`request.put(url,params,config)`
`request.delete(url,params,config)`

### storage

Already integrated Storage Automation Collection

`useStore(moduleName)`

### routing

Already integrated Routing Authentication

`useRoute`
`useRouter.push`
`useRouter.replace`
`useRouter.go`

### hooks

`onMountedAL`
`onUnmountedAL`
`onScrollAL`
