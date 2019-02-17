#!/bin/bash

SSH_URI="momo@static.posthop.momoperes.ca"
rsync -e "ssh -o StrictHostKeyChecking=no" --rsync-path="sudo rsync" -r dist/posthop/ $SSH_URI:/var/www/html --delete

