# Mosaic
Simply put, Mosaic is an attempt to create a mosaic out of smartphones. This repo hosts the source code of Mosaic serrver.

## Installation & Usage
	$ npm install
	$ node index.js

## How it works?
Mosaic consists of two parts, mosaic server and [mosaic mobile application](https://github.com/akhilstanislavose/mosaic). To generate a mosaic using smartphones do the following.

* Open up Mosaic server homepage on all the smartphones that is going to be used to create the grid.
* Mosaic homepage is a simple page with just an ID shown to identify each smartphone.
* Arrange the smartphones to create a grid.
* Scan the grid using Mosaic mobile application using the mobile camera, which will identify the screen sizes and locations on the grid, and map it to the ID shown on the smartphone screens.
* Once the grid is scanned, users can upload an image to be shown on the grid.
* Mosaic client application will slice up the image uploaded and will push to each smartphone in the grid via the mosaic server.


## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
