package main

import (
	"inertia-echo/middleware"
	"inertia-echo/routes"
	"log"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	e := echo.New()

	// configureMiddleware(e)
	middleware.ConfigureMiddleware(e)
	routes.ConfigureRoutes(e)

	e.Logger.Fatal(e.Start(":3000"))
}
