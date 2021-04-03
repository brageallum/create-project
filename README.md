# Create Project
*Create Project* is a tool for quickly setting up the base of projects using templates. Usually setting up 
a new project with all the tools and libraries you want takes quite a while and can be really time-consuming.
This project aims to make that setup process as painless and fast as running a simple command.

## Setup
```bash
npm run build # Builds project
npm link # Adds create-project as a global cli command
```

## How to use
```bash
create-project [templates to use]

# Example:
create-project ts-prettier husky # Creates a typescript project with prettier and husky

# Hint: Running create-project with no arguments will list all available templates
```

## About Templates
A template consists of two parts:
1. A TypeScript file in the `src/templates` folder, which defines what should happen when that 
   template is applied.
2. (Optional) A folder in `static/` with the same name as the script, which contains static files used by the template's
   script.
   
There are some utility commands available for templates, which live in the folder [src/lib/commands](src/lib/commands).

Templates can use other templates through the `Templates.require()` method.

Each template is run as its own process, which means all templates are isolated from each other, however
some communication is done through persisting data in temporary files. 