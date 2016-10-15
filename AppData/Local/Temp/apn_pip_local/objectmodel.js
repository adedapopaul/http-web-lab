var objectModel = {};
objectModel.initialized = false;

function init() {
     if (objectModel.initialized === false && typeof window !== "undefined" &&
         typeof window.external !== "undefined") {

        logger = {};
        _logger = window.external.GetObject("logger");
        
   
        try {
            logger.log = function(var1) {
                return _logger.log(var1);
            };
            logger.error = function(var1) {
                return _logger.error(var1);
            };
            logger.debug = function(var1) {
                return _logger.debug(var1);
            };
            logger.info = function(var1) {
                return _logger.info(var1);
            };
            logger.warn = function(var1) {
                return _logger.warn(var1);
            };
            logger.group = function(var1) {
                return _logger.group(var1);
            };
            logger.dir = function(var1) {
                return _logger.dir(var1);
            };
        } catch (x) {
            logger.error(x);
        }

        browser = window.external.GetObject("browserinfo");
        system  = window.external.GetObject("system");
        piprule = window.external.GetObject("piprule");

}
};