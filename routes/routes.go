package routes

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func ConfigureRoutes(e *echo.Echo) {
	e.GET("/", func(ctx echo.Context) error {

		props := map[string]interface{}{
			"exampleProp": "Ini props",
		}

		return ctx.Render(http.StatusOK, "Index", props)
	})

	e.GET("/example-page", func(ctx echo.Context) error {

		props := map[string]interface{}{
			"phrase": "Don't panic!",
		}

		return ctx.Render(http.StatusOK, "ExamplePage", props)
	})
}
