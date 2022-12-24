### To use scripts  
    "build": "npx tsc",
    "start": "npx tsc && nodemon src/index.ts",
    "lint": "eslint ./src/*.ts",
    "prettier": "prettier --config .prettierrc.json src/*.ts --write",
    "test": "npm run build && jasmine"

### Port listening
The server use port 3000:

#### Endpoint
http://localhost:3000/img
Will display a error to describe the right url: {"errors":["[name]: Please enter File name ","[name]: Please enter avalid File name like ['santamonica', 'fjord',  'palmtunnel', 'encenadaport','icelandwaterfall']","[width]: Please enter width size ","[width]: Please enter a width number betweeen 50 and 1000","[hieght]: Please enter hieght size ","[hieght]: Please enter a hieght number betweeen 50 and 1000"]}

#### Example for right url
http://localhost:3000/img?name=fjord&width=500&hieght=200
Will display fjord image in width=500 and hight=200.

#### Images stores in path '/src/img'
1. input
2. santamonica
3. palmtunnel
4. icelandwaterfall
5. fjord
6. encenadaport

#### Notes
New imges will store in path '/src/thumb' .

### Built With
- [TypeScript]
- [NodeJS]
- [Express]
- [Sharp]