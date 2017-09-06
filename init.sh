tempfolder="temp-init"

echo "what's the epo name?"
read projectName

git checkout --track origin/dev
mkdir ../$tempfolder
cp -r . ../$tempfolder

git checkout master
rm -rf .git

git init
git add .
git commit -m "init master branch"

git remote add origin https://github.com/miguelzuleta/$projectName.git
git push -u origin master


git checkout -b dev
rm -rf ../$tempfolder/.git
mv ../$tempfolder/{.,}* ./
rm -rf ../$tempfolder

git add .
git commit -m "init dev branch"
git push --set-upstream origin dev
