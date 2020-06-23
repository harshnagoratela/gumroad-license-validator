# gumroad-license-validator

## Usage Instructions

Send a POST request to "https://gumroad-license-validator.netlify.app/.netlify/functions/validate" with following parameters:

* **product_permalink : ** (the unique permalink of the product, if your product URL is "https://gumroad.com/l/QMGY" your product_permalink would be "QMGY)
* **license_key : ** (the license key provided by your customer)
