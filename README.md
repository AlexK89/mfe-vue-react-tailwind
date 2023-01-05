## Requirements

- Node.js
- NPM

## Getting Started

1. Clone the repository
2. Navigate to the project root
3. Run `yarn install`
4. Run `yarn start`

# Swoop microfrontend test

This test will assess your skills in architecture, fundamental understanding of how microfrontends work, and your ability to create a microfrontend architecture from scratch. The pages provided will not be assessed for any CSS changes. However, you are free to make any changes to the CSS if you would like to.

## Project structure

. - Application shell
./apps/ - Micro applications
./apps/marketplace/ - Vue application
./apps/portal/ - React application

## Tasks

1. Use the login page to stub a login function that logs the user in and allows them to view the dashboard page. The dashboard page should not be accessible without logging in to the application. The login page does not require authentication with a backend service. 
2. Create a microfrontend architecture from scratch which renders `apps\marketplace\src\views\Dashboard.vue` and `apps\portal\src\pages\Reports.tsx` within the application shell. The dashboard page provides a sidebar with links to render the applications.
3. Allow the logged in user to be shared as state between both applications within the apps directory. All stores should be able to sync with global state provided by the application shell.
4. Include any tests and types you think the application requires.

## Requirements

- Node.js
- NPM
- Familiarity with microfrontend architecture

## Getting Started

1. Clone the repository
2. Navigate to the project root
3. Run `yarn install`
4. Run `yarn start`
5. Begin implementing the microfrontend architecture from scratch