echo "what's the epo name?"
read projectName

git checkout --track origin/dev
mkdir ../temp-init
cp -r . ../temp-init

function deleteTempGit() {
  cd ../temp-init
  rm -rf .git
}
deleteTempGit

git checkout master
rm -rf .git

git init
git add .
git commit -m “init master branch”

git remote add origin https://github.com/miguelzuleta/$projectName.git
git push -u origin master
