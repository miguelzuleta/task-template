# chmod +x ./merge.sh

gulp --prod --merge
git add .
git commit -m 'merge'
git push
git checkout master
git checkout dev site
mv site/* .
rm -rf site
