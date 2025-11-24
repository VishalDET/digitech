using Microsoft.AspNetCore.Rewrite;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();
//var rewrite = new RewriteOptions()
//    .AddRewrite("about-us", "about", false).AddRewrite("introduction", "about", false);
//app.UseRewriter(rewrite);

app.Use(async (context, next) => {
    var url = context.Request.Path.Value;
    if (url.Contains("/about-us"))
    {
        context.Request.Path = "/about";
    }
    await next();
});

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
