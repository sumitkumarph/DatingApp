using System;

namespace API.Middleware;

public class ExceptionMiddleware(RequestDelegate next,
ILogger<ExceptionMiddleware> logger, IHostEnvironment env): IMiddleware
{
    public Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        throw new NotImplementedException();
    }
}