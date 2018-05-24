const view = {
    init : function() {
        const appContainer = document.querySelector('.app-container');
        const fragment = document.createDocumentFragment();
        for (appListing of octopus.getAppListings()) {
            this.addAppListing(fragment, appListing);
        }
        appContainer.append(fragment);
    },

    addAppListing : function(fragment, appListing) {
        const appListingElement = document.createElement('section');
        appListingElement.classList.add('app-listing');

        this.addAppImage(appListingElement, appListing.appImageSource, appListing.appImageAltText);
        this.addAppTitle(appListingElement, appListing.appTitle);
        this.addAppLinks(appListingElement, appListing.appLinks);
        this.addAppDescription(appListingElement, appListing.appDescription);

        fragment.append(appListingElement);
    },

    addAppImage : function(appListingElement, appImageSource, appImageAltText) {
        const appImageElement = document.createElement('img');
        appImageElement.classList.add('app-image');
        appImageElement.src = appImageSource;
        appImageElement.alt = appImageAltText;
        appListingElement.append(appImageElement);
    },

    addAppTitle : function(appListingElement, appTitle) {
        const appTitleElement = document.createElement('h3');
        appTitleElement.classList.add('app-title');
        appTitleElement.textContent = appTitle;
        appListingElement.append(appTitleElement);
    },

    addAppLinks : function(appListingElement, appLinks) {
       for (appLink of appLinks) {
                    const appLinkHeadingElement = document.createElement('h5');
        appLinkHeadingElement.classList.add('app-link');

        const appLinkElement = document.createElement('a');
        appLinkElement.href = appLink.linkUrl;
        appLinkElement.textContent = appLink.linkTitle;
        appLinkHeadingElement.append(appLinkElement);

        appListingElement.append(appLinkHeadingElement);
        }
    },

    addAppDescription : function(appListingElement, appDescription) {
        const appDescriptionElement = document.createElement('p');
        appDescriptionElement.classList.add('app-description');
        appDescriptionElement.textContent = appDescription;
        appListingElement.append(appDescriptionElement);
    }
}