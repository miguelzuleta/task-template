# chmod +x ./merge.sh

gulp --prod --merge
git add .
git commit -m 'merge'
git checkout master-TEST
git checkout dev-TEST site
find ./site -mindepth 2 -type f -print -exec mv {} . \
