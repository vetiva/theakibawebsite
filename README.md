2. **Install dependencies:**

```shellscript
npm install
```




### Running Locally

1. **Start the development server:**

```shellscript
npm run dev
```

This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


2. **Build for production:**

```shellscript
npm run build
```


## Deployment

Instructions for deploying this website to Azure App Service are provided separately.

## Contact

For any inquiries or support, please contact `itsupport@vetiva.com`.
```

---

## Deploying the Akiba Website to Azure App Service

This guide will walk you through the steps to deploy your Next.js application to Azure App Service. Azure App Service provides a fully managed platform for hosting web applications, including Node.js apps like Next.js.

### Prerequisites

- An Azure account with an active subscription.
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed on your local machine.
- [Git](https://git-scm.com/downloads) installed on your local machine.
- Your Akiba website project (ensure you have run `npm install` locally).


### Step 1: Log in to Azure

Open your terminal or command prompt and log in to your Azure account:

```shellscript
az login
```

Follow the instructions to complete the login process in your browser.

### Step 2: Create a Resource Group (Optional but Recommended)

A resource group is a logical container for your Azure resources. If you don't have one, create a new one:

```shellscript
az group create --name AkibaWebsiteRG --location eastus
```

Replace `AkibaWebsiteRG` with your desired resource group name and `eastus` with your preferred Azure region.

### Step 3: Create an Azure App Service Web App

Now, create the App Service web app. This command creates a Linux-based Node.js app service plan and a web app within it.

```shellscript
az webapp create \
  --resource-group AkibaWebsiteRG \
  --plan AkibaAppServicePlan \
  --name akiba-website-app \
  --runtime "NODE|18-lts" \
  --deployment-container-image-and-tag "mcr.microsoft.com/azure-app-service/node:18-lts"
```

- `--resource-group`: The name of your resource group.
- `--plan`: A new App Service Plan will be created. This defines the underlying compute resources.
- `--name`: Your unique web app name (e.g., `akiba-website-app`). This will be part of your URL (`akiba-website-app.azurewebsites.net`). Choose a globally unique name.
- `--runtime "NODE|18-lts"`: Specifies the Node.js runtime version. Ensure this matches or is compatible with your Next.js version.
- `--deployment-container-image-and-tag`: Specifies the base image for the App Service.


### Step 4: Configure the App Service for Next.js

Next.js applications require a build step and a specific start command.

1. **Set the startup command**: Next.js apps are typically started with `npm start` after a build.

```shellscript
az webapp config set \
  --resource-group AkibaWebsiteRG \
  --name akiba-website-app \
  --startup-file "npm start"
```


2. **Enable `ORYX_ENABLE_NODE_TOOLS`**: This environment variable ensures that Oryx (Azure's build system) correctly installs dependencies and runs the build command.

```shellscript
az webapp config appsettings set \
  --resource-group AkibaWebsiteRG \
  --name akiba-website-app \
  --settings ORYX_ENABLE_NODE_TOOLS=true
```


3. **Set `SCM_DO_BUILD_DURING_DEPLOYMENT`**: This ensures that the `npm run build` command is executed during deployment.

```shellscript
az webapp config appsettings set \
  --resource-group AkibaWebsiteRG \
  --name akiba-website-app \
  --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true
```




### Step 5: Deploy Your Application

You can deploy your application using Git.

1. **Configure local Git deployment**:

```shellscript
az webapp deployment source config-local-git \
  --resource-group AkibaWebsiteRG \
  --name akiba-website-app \
  --query scmUri --output tsv
```

This command will output a Git URL (e.g., `https://<username>@akiba-website-app.scm.azurewebsites.net/akiba-website-app.git`). Copy this URL.


2. **Add Azure remote to your local Git repository**:
Navigate to your project's root directory in your terminal.

```shellscript
git remote add azure <the-git-url-you-copied>
```

Replace `<the-git-url-you-copied>` with the URL obtained in the previous step.


3. **Push your code to Azure**:

```shellscript
git push azure main
```

You will be prompted for a password. This is the deployment credential password you set up (or can set up via `az webapp deployment user set`). If you haven't set one, Azure CLI will guide you.

Azure will then pull your code, install dependencies, run `npm run build`, and then `npm start`.




### Step 6: Verify Deployment

Once the deployment is complete, you can browse to your application:

```shellscript
az webapp show \
  --resource-group AkibaWebsiteRG \
  --name akiba-website-app \
  --query defaultHostName --output tsv
```

This will output your application's URL (e.g., `akiba-website-app.azurewebsites.net`). Open this URL in your browser to see your deployed Akiba website.

### Environment Variables

If your application uses environment variables (e.g., for API keys, database connections, or the Formspree endpoint if you move it out of the code), you can set them in Azure App Service:

```shellscript
az webapp config appsettings set \
  --resource-group AkibaWebsiteRG \
  --name akiba-website-app \
  --settings MY_API_KEY="your_api_key_value" FORMSPREE_ENDPOINT="https://formspree.io/f/your_endpoint"
```

### Troubleshooting

- **Deployment Logs**: If deployment fails, check the logs in the Azure portal under your App Service -> Deployment Center -> Logs, or use the Azure CLI:

```shellscript
az webapp log tail --name akiba-website-app --resource-group AkibaWebsiteRG
```


- **Node.js Version**: Ensure the Node.js version configured in Azure App Service matches your project's requirements.
- **Build Errors**: If `npm run build` fails, check your local build process for any issues.
- **Startup Command**: Verify that `npm start` is correctly configured and your `package.json` has a `start` script that runs your Next.js app (e.g., `"start": "next start"`).


This comprehensive guide should help you get your Akiba website up and running on Azure App Service!
