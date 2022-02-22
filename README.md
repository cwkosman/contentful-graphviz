To use this repository:

1. Install graphviz on your system. With homebrew: `brew install graphviz`
2. Create and populate your own .env file with the Contentful Space ID, a Cotentful Management Token, and the name of a Contentful environment (usually master).
3. `npm install` the dependencies of this repo
4. From the command line, use:

- `node index.js | dot -Tpng > a_file_name_here.png` to create a .png
- `node index.js | dot -Tpdf > a_file_name_here.pdf` to create a .pdf
