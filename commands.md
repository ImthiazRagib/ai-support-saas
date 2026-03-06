# Run all apps
`` Run frontend apps
pnpm --filter web dev
pnpm --filter widget dev
Run backend
pnpm --filter api start:dev
``

# Or run them together from root:
``
pnpm dev
``

# check .git
``
find . -name ".git"

rm -rf "directory path"
``