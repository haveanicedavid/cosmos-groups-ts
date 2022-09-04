# cosmos-groups-ts

## Manual updates

These aren't ideal, and likely point to an issue with type generation (or
possibly something on the SDK side), but for the short term it's easiest just to
run a manual search and replace on .ts files:

1. Make all `pagination` types optional by replacing with `pagination?:`
2. Replace `groupPolicies:` -> `group_policies:`
