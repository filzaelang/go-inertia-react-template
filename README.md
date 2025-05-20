GO-INERTIA-REACT_TEMPLATE

A base template for creating golang inertia react project, To make setup easier

1. Copy the requirement from go.mod
2. Delete go.mod and go.sum files
3. Init your own go.mod and paste the copied requirement
4. Run "go mod tidy"
5. Change the module name "inertia-echo" with your own module name
6. Open another terminal, run "cd views" and run "npm install" or "bun install"
7. Add your own .env file with at least "BUILD_ENV" variable
8. Run "bun dev" or "npm run dev" in views terminal
9. Run "go run main.go" in base terminal
10. Open in backend's server (localhost:3000)
