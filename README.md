# cosmos-groups-ts

## Re-generating

1. Copy proto files from cosmos sdk into `/proto`
2. run `buf export buf.build/cosmos/cosmos-sdk:$(curl -sS https://api.github.com/repos/cosmos/cosmos-sdk/commits/v0.46.1 | jq -r .sha) --output ./proto` from the root directory (replacing with whatever branch of cosmos is used)
3. `yarn codegen` - note: you might have to fix some errors in the proto files for this to run (typically issues with `;;` semicolons)

## Manual updates

These aren't ideal, and might point to an issue with type generation (or
possibly something on the SDK side), but for the short term it's easiest just to
run a manual search and replace on .ts files:

1. Make all `pagination` types optional (replace `pagination:` with `pagination?:` in `.ts` files)
2. Change passed parameters in `src/codegen/cosmos/group/v1/query.lcd.ts` to `snake_case` (should be fixed with [this issue](https://github.com/osmosis-labs/telescope/issues/194))

## TODO

- `Pagination` doesn't seem to be working
- Amino signing doesn't seem to be working correctly
