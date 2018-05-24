const octopus = {
    init : function() {
        view.init();
    },

    getAppListings : function() {
        return model.appListings;
    }
}

octopus.init();