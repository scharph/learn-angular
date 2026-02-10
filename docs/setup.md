# Setup

ng new learn-angular --no-create-application

## Shared Library
ng generate library shared

tsconfig.json

"paths": {
  "@corp/ui-kit": [
    "projects/ui-kit/src/public-api.ts"
  ]
}

## Applications
ng generate application 01-basic
ng g c button --project shared