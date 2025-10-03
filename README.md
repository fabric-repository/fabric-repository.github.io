This is the repository for the Fabric project's website! This is a Next.js website (the React framework built on top of Node.js) with Tailwind CSS. 

To run the code on your local device, you'll need to run npm which is easily installed if you install Node.js. the file you will edit to update the website is ''pages/index.tsx''. The below terminal commands assume that you are within the fabric-repository.github.io folder...

To run the code locally: 
```
npm run dev
```

To build the website before adding files to git:
```
npm run deploy
```

If you've only updated the pages/index.tsx and already built the website with "npm run deploy", then all you need to add to Github is the docs/ folder and the tsx file so:
```
git add docs/ pages/index.tsx 
git commit -m "Update website"
git push
```
If you made other changes to the project files, then you'd need to add those to git too though before committing and pushing.