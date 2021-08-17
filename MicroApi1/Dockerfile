#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS b1
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["MicroApi1.csproj", "."]
RUN dotnet restore "./MicroApi1.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "MicroApi1.csproj" -c Release -o /app/build

FROM build AS publish1
RUN dotnet publish "MicroApi1.csproj" -c Release -o /app/publish

FROM b1 AS final1
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MicroApi1.dll"]