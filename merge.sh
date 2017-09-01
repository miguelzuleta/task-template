# chmod +x ./merge.sh

gulp --prod --merge
git add .
git commit -m 'merge'
git checkout master-TEST
git checkout dev-TEST site
mv site/* . && rm site
