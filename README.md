# blitzjs_starter

## 使用技術

- Next.js
  - React Framework
- React Query
  - Data Query
- Tailwind CSS
  - CSS
- Prisma
  - TypeScript ORM
- SuperTokens library
  - Authentication
- Jest
  - Test(Unit)
- Cypress
  - Test(E2E)
- ESLint
  - Linter
- Prettier
  - Code Formatter
- husky
  - Git Hooks

## Getting Started

```blitz
yarn
blitz prisma migrate dev
blitz dev
```

### pre-push

```husky
npx tsc
yarn lint
yarn test
yarn cypress:run
```

- pre-push 時に cypress の E2E テストが実行されるため，予め`blitz dev`でローカルサーバーを起動しておかないと，プッシュエラーが発生する．
